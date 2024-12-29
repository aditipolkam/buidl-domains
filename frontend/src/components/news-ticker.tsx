import { useEffect, useState } from "react";
import { useUsers } from "../hooks/useUsers";

export function NewsTicker() {
  const { loading, error, users } = useUsers();
  const [claims, setClaims] = useState<string[]>([]);

  useEffect(() => {
    if (users.length > 0) {
      const newClaims = users.map(
        (user: { name: string; user_address: string }) =>
          `${user.name}.offline claimed by ${user.user_address}`
      );
      setClaims(newClaims);
    }
  }, [users]);

  if (loading)
    return (
      <div className="w-full py-2 text-center text-[#4989a7]">Loading...</div>
    );
  if (error)
    return (
      <div className="w-full py-2 text-center text-red-500">
        Error fetching data
      </div>
    );

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-[#4989a7]/10 to-[#ffafbd]/10 py-2">
      <div className="animate-slide whitespace-nowrap">
        {claims.concat(claims).map((claim, index) => (
          <span key={index} className="inline-block px-20 text-[#ffafbd]">
            {claim}
          </span>
        ))}
      </div>
    </div>
  );
}
