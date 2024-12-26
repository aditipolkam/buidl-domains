interface SuccessfulClaimProps {
  name: string;
}

export default function SuccessfulClaim({ name }: SuccessfulClaimProps) {
  return (
    <div className="container mx-auto px-16 pt-40 h-full">
      <div className="card">
        <h2 className="text-2xl font-bold mb-4 text-[#ffafbd]">
          Congratulations, {name}!
        </h2>
        <p className="mb-4 text-gray-300">
          You have successfully claimed your Offline ID and established quantum
          entanglement.
        </p>
        <p className="text-gray-300">
          You can now traverse our cosmic services with your registered
          coordinates.
        </p>
      </div>
    </div>
  );
}
