// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import {StringUtils} from "./libraries/StringUtils.sol";
import {Base64} from "./libraries/Base64.sol";

contract OfflineId is ERC721URIStorage {
    string public tld;
    address payable public owner;
    uint256 private _currentTokenId;

    error Unauthorized();
    error AlreadyRegistered();
    error InvalidName(string name);

    event Register(address user, uint tokenId, string name);

    string svgPartOne =
        '<svg xmlns="http://www.w3.org/2000/svg" width="270" height="270" fill="none"><path fill="url(#B)" d="M0 0h270v270H0z"/><defs><filter id="A" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="270" width="270"><feDropShadow dx="0" dy="1" stdDeviation="2" flood-opacity=".225" width="200%" height="200%"/></filter></defs><svg width="100" height="60" viewBox="-15 -30 105 90" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" width="15" height="15" fill="#F4FCFF"/><rect x="30" y="15" width="15" height="15" fill="#F4FCFF"/><rect x="30" y="30" width="15" height="15" fill="#F4FCFF"/><rect x="45" width="15" height="15" fill="#F4FCFF"/><rect x="60" y="15" width="15" height="15" fill="#F4FCFF"/><rect x="45" y="30" width="15" height="15" fill="#F4FCFF"/><rect x="30" y="45" width="15" height="15" fill="#F4FCFF"/><rect x="15" y="45" width="15" height="15" fill="#F4FCFF"/><rect x="15" y="15" width="15" height="15" fill="#F4FCFF"/><rect y="45" width="15" height="15" fill="#F4FCFF"/><rect x="15" y="30" width="15" height="15" transform="rotate(90 15 30)" fill="#F4FCFF"/></svg><defs><linearGradient id="B" x1="0" y1="0" x2="270" y2="270" gradientUnits="userSpaceOnUse"><stop stop-color="#ffafbd"/><stop offset="1" stop-color="#4989a7" stop-opacity=".99"/></linearGradient></defs><text x="32.5" y="231" font-size="27" fill="#fff" filter="url(#A)" font-family="georgia" font-weight="bold">';
    string svgPartTwo = "</text></svg>";

    mapping(string => address) public domains;
    mapping(uint256 => string) public names;

    function isOwner() public view returns (bool) {
        return msg.sender == owner;
    }
    modifier onlyOwner() {
        require(isOwner());
        _;
    }

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _tld
    ) payable ERC721(_name, _symbol) {
        owner = payable(msg.sender);
        tld = _tld;
        _currentTokenId = 0;
    }

    function currentTokenId() public view returns (uint256) {
        return _currentTokenId;
    }

    //register function
    function register(string calldata name) public payable {
        //require(domains[name] == address(0), "Name already registered.");
        if (domains[name] != address(0)) revert AlreadyRegistered();
        if (!valid(name)) revert InvalidName(name);

        //temporarily stop price check
        // uint256 _price = price(name);
        // require(msg.value >= _price, "Not enough money paid");

        string memory _name = string(abi.encodePacked(name, ".", tld));
        string memory finalSvg = string(
            abi.encodePacked(svgPartOne, _name, svgPartTwo)
        );
        uint256 newRecordId = _currentTokenId++;
        uint256 length = StringUtils.strlen(name);
        string memory strLen = Strings.toString(length);
        string memory json = Base64.encode(
            abi.encodePacked(
                '{"name": "',
                _name,
                '", "description": "A domain on the Buidl Name Service.", "image": "data:image/svg+xml;base64,',
                Base64.encode(bytes(finalSvg)),
                '","length":"',
                strLen,
                '"}'
            )
        );
        string memory finalTokenUri = string(
            abi.encodePacked("data:application/json;base64,", json)
        );
        _safeMint(msg.sender, newRecordId);
        _setTokenURI(newRecordId, finalTokenUri);
        domains[name] = msg.sender;
        names[newRecordId] = name;
        emit Register(msg.sender, newRecordId, name);
    }

    function valid(string calldata name) public pure returns (bool) {
        return StringUtils.strlen(name) >= 3 && StringUtils.strlen(name) <= 10;
    }

    function price(string calldata name) public pure returns (uint256) {
        uint256 len = StringUtils.strlen(name);
        require(len > 0);
        if (len == 3) {
            return 5 * 10 ** 17;
        } else if (len == 4) {
            return 3 * 10 ** 17;
        } else {
            return 1 * 10 ** 17;
        }
    }

    //domain owner address
    function getAddress(string calldata name) public view returns (address) {
        return domains[name];
    }

    function withdraw() public onlyOwner {
        uint256 amount = address(this).balance;

        (bool success, ) = msg.sender.call{value: amount}("");
        require(success, "Failed to withdraw");
    }
}
