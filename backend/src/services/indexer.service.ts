import { ethers, EventLog } from "ethers";
import { RPC } from "../config/constants";

const provider = new ethers.JsonRpcProvider(RPC);

const fetchPastEvents = async (
  contract: ethers.Contract,
  eventName: string,
  fromBlock: number
) => {
  try {
    const eventFilter = contract.filters[eventName]();

    const toBlock = "latest";

    const events = (await contract.queryFilter(
      eventFilter,
      fromBlock,
      toBlock
    )) as EventLog[];

    const eventsWithTimestamps = await Promise.all(
      events.map(async (event) => {
        const block = await provider.getBlock(event.blockNumber);
        if (block)
          return {
            ...event,
            timestamp: block.timestamp,
          };
      })
    );

    return eventsWithTimestamps;
  } catch (error) {
    console.error("Error fetching past events:", error);
    return [];
  }
};

export default {
  fetchPastEvents,
};
