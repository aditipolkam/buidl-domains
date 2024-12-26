// src/hooks/useUserByName.ts

import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

const GET_USER_BY_NAME = gql`
  query User($name: String!) {
    user_by_name(name: $name) {
      user_address
      name
      token_id
      token_uri
      registration_tx
      block_number
      timestamp
    }
  }
`;

export function useUserByName(name: string) {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const {
    data,
    loading: queryLoading,
    error: queryError,
  } = useQuery(GET_USER_BY_NAME, {
    variables: { name },
    skip: !name,
  });

  useEffect(() => {
    if (queryLoading) {
      setLoading(true);
    } else if (queryError) {
      setError(queryError);
      setLoading(false);
    } else if (data) {
      setUser(data.user_by_name);
      setLoading(false);
    }
  }, [queryLoading, queryError, data]);

  return { user, loading, error };
}
