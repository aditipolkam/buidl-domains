import { ethers, EventLog } from "ethers";

const fetchPastEvents = async (
  contract: ethers.Contract,
  eventName: string,
  fromBlock: number
) => {
  try {
    const eventFilter = contract.filters[eventName]();

    // Replace with the desired block range
    const toBlock = "latest"; // End block

    // Query past events
    const events = (await contract.queryFilter(
      eventFilter,
      fromBlock,
      toBlock
    )) as EventLog[];

    return events;
  } catch (error) {
    console.error("Error fetching past events:", error);
    return [];
  }
};

export default {
  fetchPastEvents,
};
