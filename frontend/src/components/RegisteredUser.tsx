import { usePrivy } from "@privy-io/react-auth";

export default function RegisteredUser() {
  const { user } = usePrivy();

  return (
    <div className="container mx-auto px-16 pt-40 h-full">
      <div className="card" role="alert">
        <p className="font-bold text-[#ffafbd] mb-2">
          Welcome back, cosmic traveler {user?.google?.name}!
        </p>
        <p className="text-gray-300">
          Your cosmic coordinates are registered. You may proceed to navigate
          our celestial services.
        </p>
      </div>
    </div>
  );
}
