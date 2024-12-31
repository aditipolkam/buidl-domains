import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insert = async (
  name: string,
  address: string,
  tokenId: number,
  registrationTx: string,
  blockNumber: number,
  blockTimestamp: number
) => {
  await prisma.domain.create({
    data: {
      name: name,
      address: address,
      token_id: tokenId,
      transaction_hash: registrationTx,
      block_number: blockNumber,
      timestamp: blockTimestamp,
    },
  });
};

export default insert;
