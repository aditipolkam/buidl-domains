import insert from "../repository/insert";

const handleRegister = async (
  from: string,
  tokenid: number,
  name: string,
  transactionHash: string,
  blockHash: string,
  blockNumber: number,
  blockTimestamp: number
) => {
  try {
    console.log({
      from,
      tokenid,
      name,
      transactionHash,
      blockHash,
      blockNumber,
      blockTimestamp,
    });
    await insert(
      name,
      from,
      Number(BigInt(tokenid)),
      transactionHash,
      blockNumber,
      blockTimestamp
    );
  } catch (err) {
    const error = err as Error;
    console.log(error.message);
  }
};

export default { handleRegister };
