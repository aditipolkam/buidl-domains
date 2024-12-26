import insert from "../repository/insert";

const handleRegister = async (
  from: string,
  tokenid: number,
  name: string,
  event: any
) => {
  try {
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
  } catch (err) {
    const error = err as Error;
    console.log(error.message);
  }
};

export default { handleRegister };
