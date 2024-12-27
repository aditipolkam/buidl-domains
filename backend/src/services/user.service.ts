import insert from "../repository/insert";

const handleRegister = async (
  from: string,
  tokenid: number,
  name: string,
  transactionHash: string,
  blockHash: string,
  blockNumber: number
) => {
  try {
    console.log({
      from,
      tokenid,
      name,
      transactionHash,
      blockHash,
      blockNumber,
    });
    await insert(
      name,
      from,
      Number(BigInt(tokenid)),
      transactionHash,
      blockNumber
    );
  } catch (err) {
    const error = err as Error;
    console.log(error.message);
  }
};

export default { handleRegister };
