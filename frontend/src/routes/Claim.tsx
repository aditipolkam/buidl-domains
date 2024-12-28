import { useEffect, useState } from "react";
import { useUserByName } from "../hooks/useUserByName.ts";
import { useSmartWallets } from "@privy-io/react-auth/smart-wallets";
import { CONTRACT_ADDRESS, ABI } from "../utils/constants.ts";
import { encodeFunctionData } from "viem";
import { baseSepolia } from "viem/chains";
import { useUserByAddress } from "../hooks/useUserByAddress.ts";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button.tsx";
import { Input } from "../components/ui/input.tsx";

export default function Claim() {
  const [username, setUsername] = useState("");
  const { user: usernameRegistered } = useUserByName(username);
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const { client: smartWalletClient } = useSmartWallets();
  const navigate = useNavigate();

  // if (!smartWalletClient) {
  //   navigate("/");
  // }

  const existingUser = useUserByAddress(
    smartWalletClient?.account.address as `0x${string}`
  );
  console.log(existingUser);

  // if (existingUser) {
  //   navigate("/dashboard");
  // }

  useEffect(() => {
    if (username.length > 0) {
      setIsAvailable(usernameRegistered === null);
    } else {
      setIsAvailable(null);
    }
  }, [usernameRegistered, username]);

  const handleClaim = async () => {
    if (!smartWalletClient) return;
    const tx = await smartWalletClient.sendTransaction({
      chain: baseSepolia,
      to: CONTRACT_ADDRESS,
      value: BigInt(0),
      data: encodeFunctionData({
        abi: ABI,
        functionName: "register",
        args: [username],
      }),
    });
    console.log(tx);
  };
  return (
    <div className="container mx-auto px-4 max-w-md">
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-white">Claim Your Name</h1>
          <p className="text-gray-400">
            Enter your desired name to check availability
          </p>
        </div>

        <div className="space-y-4">
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter name (e.g. vitalik)"
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
          />

          {isAvailable !== null && (
            <div
              className={`p-4 rounded-lg ${
                isAvailable
                  ? "bg-green-500/20 text-green-300"
                  : "bg-red-500/20 text-red-300"
              }`}
            >
              {isAvailable ? "Available!" : "Name is taken"}
            </div>
          )}

          <Button
            onClick={handleClaim}
            className="w-full"
            disabled={!isAvailable}
          >
            Claim Name
          </Button>
        </div>
      </div>
    </div>
  );
}
