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
  if (!smartWalletClient) {
    navigate("/");
  }

  const { user: existingUser } = useUserByAddress(
    smartWalletClient?.account.address as `0x${string}`
  );

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

  if (existingUser) {
    return (
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden text-center py-16">
          <div className="px-8 py-6 mt-16">
            <h1 className="text-3xl font-bold text-white mb-4">
              You have already claimed the name:{" "}
              <span className="text-[#ffafbd]">{existingUser.name}</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Head over to your dashboard to set up your profile or view it.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="/dashboard"
                className="inline-block px-6 py-3 text-white font-semibold bg-gradient-to-r from-[#4989a7] to-[#ffafbd] rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                Go to Dashboard
              </a>
              <a
                href={`/profile/${existingUser.name}`}
                className="inline-block px-6 py-3 text-white font-semibold bg-gradient-to-r from-[#ffafbd] to-[#4989a7] rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
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
