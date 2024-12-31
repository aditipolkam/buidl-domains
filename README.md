# Decentralized Name Service

This project is a **Decentralized Name Service (DNS)**, enabling users to register, manage, and resolve ids on the blockchain. The project leverages blockchain technology to provide a decentralized, secure, and transparent naming system.

![Decentralized Name Service](/assets/landing.png)

It consists of three main components:

1. **Contract**: The smart contract `BuidlDomains.sol` manages name registration and ownership on the blockchain.
2. **Backend**: A GraphQL server built with Node.js and TypeScript provides an API layer for interacting with the contract data that is indexed and managing metadata.
3. **Frontend**: A React application built with Vite serves as the user interface for interacting with the decentralized name service, using Privy smart wallets.

---

### Deployments and Documentation

Backend: https://buidl-domains.aditipolkam.me/

Frontend: https://buidl-domains.vercel.app/

Contract: https://sepolia.basescan.org/token/0x53bd9bdff89037a97375e33ae1c412e94d7f2c6c

API Docs: [/backend/README.md](/backend/README.md)

Basic Architecture:
![Architecture](/assets/architecture.png)

---

### About the app:

Claim Name: Users can register and claim a unique name on the blockchain, ensuring ownership and decentralization.

![Claim Name](/assets/claim.png)

Setup Profile: Once a name is claimed, users can set up their profile by adding personal information, bio, and other details.

![Setup Profile](/assets/profile-setup.png)

View Profile: Users can view their own profile or the profiles of others, showcasing their claimed name and associated details.

![View Profile](/assets/profile.png)

Discover People: Users can explore and discover other profiles on the platform, fostering connections within the decentralized network.

![Discover](/assets/discover.png)

---

## Installation and Setup

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (v20 or higher)
- Yarn or npm
- Hardhat (for smart contract development)
- A blockchain node (e.g., Hardhat local node or any testnet)

### 1. Clone the Repository

```bash
git clone https://github.com/aditipolkam/buidl-domains
cd buidl-domains
```

---

### 2. Contract Setup (Hardhat)

Navigate to the `contract` folder to set up the smart contract.

#### Steps:

1. Install dependencies:
   ```bash
   cd contract
   yarn install
   ```
2. Compile the contract:
   ```bash
   npx hardhat compile
   ```
3. Deploy the contract:

   - Start a local blockchain node:
     ```bash
     npx hardhat node
     ```
   - Deploy the contract to the local node:
     ```bash
     npx hardhat ignition deploy ignition/modules/buidl.ts --network localhost
     ```

4. (Optional) Deploy to a testnet - Configure your `.env` file with the necessary keys (e.g., `PRIVATE_KEY`, `ALCHEMY_KEY`):.
   - Deploy:
     ```bash
     npx hardhat ignition deploy ignition/modules/buidl.ts --network <testnet-name>
     ```

---

### 3. Backend Setup (GraphQL Server)

Navigate to the `backend` folder to set up the GraphQL server.

#### Steps:

1. Install dependencies:
   ```bash
   cd ../backend
   yarn install
   ```
2. Create a `.env` file:
   ```
   DATABASE_URL=<database connection string>
   CONTRACT_ADDRESS=<deployed_contract_address>
   RPC=<blockchain_node_url>
   ```
3. Start the server:
   ```bash
   yarn start
   ```

---

### 4. Frontend Setup (React Vite)

Navigate to the `frontend` folder to set up the user interface.

#### Steps:

1.  Install dependencies:
    ```bash
    cd ../frontend
    yarn install
    ```
2.  Create a `.env` file: - Add the necessary environment variables:
    ```
    VITE_PRIVY_APP_ID=<privy app id>
    VITE_GRAPHQL_ENDPOINT=http://localhost:4000
    VITE_CONTRACT_ADDRESS=<deployed_contract_address>
    ```
3.  Start the development server:
    ```bash
    yarn dev
    ```

---

## Running the Project

1. **Start the blockchain node**: Ensure the Hardhat node is running if using a local network.
2. **Deploy the contract**: Make sure the smart contract is deployed.
3. **Run the backend**: Start the GraphQL server.
4. **Run the frontend**: Launch the React development server.

You can now access the frontend at `http://localhost:5173` and interact with the decentralized name service!
