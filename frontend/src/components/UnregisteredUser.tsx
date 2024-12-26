import { useState } from "react";
import SuccessfulClaim from "./SuccessfulClaim";

const nameSuggestions = [
  "Nebula",
  "Orion",
  "Nova",
  "Celeste",
  "Astro",
  "Luna",
  "Cosmos",
  "Stella",
];

enum WorkflowStep {
  NameSelection,
  AddressVerification,
  Confirmation,
  Success,
}

export default function UnregisteredUser() {
  const [selectedName, setSelectedName] = useState("");
  const [workflowStep, setWorkflowStep] = useState(WorkflowStep.NameSelection);
  const [address, setAddress] = useState("");

  const handleStartWorkflow = async () => {
    if (!selectedName) {
      alert(
        "Please select a cosmic identity before initiating the launch sequence."
      );
      return;
    }
    setWorkflowStep(WorkflowStep.AddressVerification);
  };

  const handleAddressSubmit = async () => {
    if (!address) {
      alert("Please enter your cosmic coordinates.");
      return;
    }
    setWorkflowStep(WorkflowStep.Confirmation);
  };

  const handleConfirmation = async () => {
    try {
      // Simulate API call to register user
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setWorkflowStep(WorkflowStep.Success);
    } catch (error) {
      alert("Error in quantum entanglement: " + (error as Error).message);
    }
  };

  switch (workflowStep) {
    case WorkflowStep.NameSelection:
      return (
        <div className="card">
          <h2 className="text-2xl font-bold mb-4 text-[#ffafbd]">
            Cosmic Identity Assignment
          </h2>
          <p className="mb-4 text-gray-300">
            Select your cosmic identity to begin the registration process:
          </p>
          <select
            value={selectedName}
            onChange={(e) => setSelectedName(e.target.value)}
            className="input-field"
          >
            <option value="">Select a cosmic identity</option>
            {nameSuggestions.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
          <button onClick={handleStartWorkflow} className="btn-primary w-full">
            Initiate Identity Verification
          </button>
        </div>
      );

    case WorkflowStep.AddressVerification:
      return (
        <div className="card">
          <h2 className="text-2xl font-bold mb-4 text-[#ffafbd]">
            Cosmic Coordinate Verification
          </h2>
          <p className="mb-4 text-gray-300">
            Please enter your cosmic coordinates:
          </p>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="input-field"
            placeholder="Enter your cosmic coordinates"
          />
          <button onClick={handleAddressSubmit} className="btn-primary w-full">
            Verify Coordinates
          </button>
        </div>
      );

    case WorkflowStep.Confirmation:
      return (
        <div className="card">
          <h2 className="text-2xl font-bold mb-4 text-[#ffafbd]">
            Quantum Entanglement Confirmation
          </h2>
          <p className="mb-4 text-gray-300">
            Please confirm your cosmic information:
          </p>
          <p className="text-[#ffafbd]">Cosmic Identity: {selectedName}</p>
          <p className="text-[#ffafbd]">Cosmic Coordinates: {address}</p>
          <button
            onClick={handleConfirmation}
            className="btn-primary w-full mt-4"
          >
            Confirm and Initiate Quantum Entanglement
          </button>
        </div>
      );

    case WorkflowStep.Success:
      return <SuccessfulClaim name={selectedName} />;

    default:
      return null;
  }
}
