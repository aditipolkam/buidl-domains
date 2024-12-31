// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BuidlDomainsModule = buildModule("BuidlDomainsModule", (m) => {
  const name = m.getParameter("unlockTime", "Buidl Domains Name Service");
  const symbol = m.getParameter("lockedAmount", "buidl");

  const buidlNames = m.contract("BuidlDomains", [name, symbol, name]);

  return { buidlNames };
});

export default BuidlDomainsModule;
