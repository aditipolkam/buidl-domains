import { useAuth } from "../context/AuthContext";

export default function NewUserInfo() {
  const { login } = useAuth();

  return (
    <div className="card max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-[#ffafbd]">
        Welcome, Space Explorer!
      </h2>
      <p className="mb-4 text-gray-300">
        Offline ID is your secure gateway to the cosmos. Verify your identity
        without compromising your personal information, allowing you to navigate
        our services while maintaining the privacy of your universal
        coordinates.
      </p>
      <button onClick={login} className="btn-primary w-full">
        Initiate Launch Sequence
      </button>
    </div>
  );
}
