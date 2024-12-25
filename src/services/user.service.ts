import getAllUsers from "../repository/getAllUsers";
import insert from "../repository/insert";

const handleRegister = async (
  from: string,
  tokenid: number,
  name: string,
  event: any
) => {
  console.log({
    from,
    tokenid,
    name,
    transactionHash: event.log.transactionHash,
    blockHash: event.log.blockHash,
    blockNumber: event.log.blockNumber,
  });
  await insert(
    name,
    from,
    Number(BigInt(tokenid)),
    "",
    event.log.transactionHash,
    event.log.blockNumber
  );
  // console.log(await getAllUsers());
};

export default { handleRegister };
