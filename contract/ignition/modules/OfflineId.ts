// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const OfflineIdModule = buildModule("OfflineIdModule", (m) => {
  const name = m.getParameter("unlockTime", "Offline ID Name Service");
  const symbol = m.getParameter("lockedAmount", "offline");

  const offlieid = m.contract("OfflineId", [name, symbol, name]);

  return { offlieid };
});

export default OfflineIdModule;
