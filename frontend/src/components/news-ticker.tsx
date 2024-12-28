"use client";

import { useEffect, useState } from "react";

const claims = [
  "aditi.offline claimed",
  "rap.offline claimed",
  "crypto.offline claimed",
  "web3.offline claimed",
];

export function NewsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % claims.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-[#4989a7]/10 to-[#ffafbd]/10 py-2">
      <div className="animate-slide whitespace-nowrap">
        <span className="inline-block px-4 text-[#4989a7]">
          {claims[currentIndex]}
        </span>
      </div>
    </div>
  );
}
