import { useEffect, useState } from "react";
import { useUsers } from "../hooks/useDomains";

export function NewsTicker() {
  const { loading, domains } = useUsers();
  const [claims, setClaims] = useState<string[]>([]);

  useEffect(() => {
    if (domains.length > 0) {
      const newClaims = domains.map(
        (user: { name: string; address: string }) =>
          `${user.name}.offline claimed by ${user.address}`
      );
      setClaims(newClaims);
    }
  }, [domains]);

  if (loading)
    return (
      <div className="w-full py-2 text-center text-[#4989a7]">Loading...</div>
    );

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-[#4989a7]/10 to-[#ffafbd]/10 py-2">
      <div className="animate-slide whitespace-nowrap">
        {claims.concat(claims).map((claim, index) => (
          <span key={index} className="inline-block px-20 text-primary">
            {claim}
          </span>
        ))}
      </div>
    </div>
  );
}
