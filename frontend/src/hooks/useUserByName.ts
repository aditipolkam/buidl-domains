// src/hooks/useUserByName.ts

import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { User } from "../utils/types.ts";

const GET_USER_BY_NAME = gql`
  query User($name: String!) {
    user_by_name(name: $name) {
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

export function useUserByName(name: string) {
  const [user, setUser] = useState<User | null>(null);
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
