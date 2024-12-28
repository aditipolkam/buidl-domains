// src/hooks/useUserByAddress.ts

import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { User } from "../utils/types.ts";

const GET_USER_BY_ADDRESS = gql`
  query User($address: String!) {
    user(address: $address) {
      user_address
      name
      token_id
      registration_tx
      block_number
      timestamp
      display_name
      bio
      profession
    }
  }
`;

export function useUserByAddress(address: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const {
    data,
    loading: queryLoading,
    error: queryError,
  } = useQuery(GET_USER_BY_ADDRESS, {
    variables: { address },
    skip: !address,
  });

  useEffect(() => {
    if (queryLoading) {
      setLoading(true);
    } else if (queryError) {
      setError(queryError);
      setLoading(false);
    } else if (data) {
      setUser(data.user);
      setLoading(false);
    }
  }, [queryLoading, queryError, data]);

  return { user, loading, error };
}
