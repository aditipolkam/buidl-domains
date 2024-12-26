interface RegisteredUserProps {
  name?: string;
}

export default function RegisteredUser({ name }: RegisteredUserProps) {
  return (
    <div className="card" role="alert">
      <p className="font-bold text-[#ffafbd] mb-2">
        Welcome back, cosmic traveler{name ? ` ${name}` : ""}!
      </p>
      <p className="text-gray-300">
        Your cosmic coordinates are registered. You may proceed to navigate our
        celestial services.
      </p>
    </div>
  );
}
