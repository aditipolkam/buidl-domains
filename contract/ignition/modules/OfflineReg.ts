import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const OfflineIdRegModule = buildModule("OfflineIdRegModule", (m) => {
  // Deploy the contract
  const offlineId = m.contractAt(
    "OfflineId",
    "0x5fbdb2315678afecb367f032d93f642f64180aa3"
  );

  // Interact with the `register` function after deployment
  m.call(offlineId, "register", ["aditi"]);
  //   m.call(offlineId, "register", ["cutie"]);

  return { offlineId };
});

export default OfflineIdRegModule;
