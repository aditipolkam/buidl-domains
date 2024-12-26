import { useEffect, useState } from "react";
import { useUserByName } from "../hooks/useUserByName.ts";

export default function Claim() {
  const [username, setUsername] = useState("");
  const { user: existingUser } = useUserByName(username);
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    if (username.length > 0) {
      setIsAvailable(existingUser === null);
    } else {
      setIsAvailable(null);
    }
  }, [existingUser, username]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  return (
    <main className="container mx-auto px-4 max-w-2xl pt-40 text-center">
      <h1 className="text-2xl text-white mb-4">Claim Your Offline Id</h1>

      {/* Search Section */}
      <div className="relative">
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Search for a name"
          className={`w-full p-6 text-lg rounded-2xl shadow-sm border-2 focus:ring-2 text-black ${
            isAvailable === null
              ? "border-gray-200 focus:border-[#4989a7] focus:ring-[#4989a7]"
              : isAvailable
              ? "border-green-500 focus:border-green-500 focus:ring-green-500"
              : "border-red-500 focus:border-red-500 focus:ring-red-500"
          }`}
        />

        <button
          className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 mt-10 rounded-full transition-all"
          disabled={!isAvailable}
        >
          Claim
        </button>
      </div>
    </main>
  );
}
