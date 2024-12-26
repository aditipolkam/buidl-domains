import { useState, useEffect } from "react";

// This is a mock function to simulate a GraphQL query
const mockGraphQLQuery = (): Promise<{ isAddressRegistered: boolean }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ isAddressRegistered: Math.random() > 0.5 });
    }, 1000);
  });
};

export function useAddressCheck() {
  const [isAddressRegistered, setIsAddressRegistered] = useState<
    boolean | null
  >(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const checkAddress = async () => {
      try {
        const result = await mockGraphQLQuery();
        setIsAddressRegistered(result.isAddressRegistered);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An error occurred"));
      } finally {
        setLoading(false);
      }
    };

    checkAddress();
  }, []);

  return { isAddressRegistered, loading, error };
}
