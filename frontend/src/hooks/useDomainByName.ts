// src/hooks/useUserByName.ts

import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { Domain } from "../utils/types.ts";

const GET_DOMAIN_BY_NAME = gql`
  query domain_by_name($name: String!) {
    domain_by_name(name: $name) {
      name
      address
      token_id
      transaction_hash
      block_number
      timestamp
      display_name
      bio
      profession
    }
  }
`;

export function useDomainByName(name: string) {
  const [domain, setDomain] = useState<Domain | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const {
    data,
    loading: queryLoading,
    error: queryError,
  } = useQuery(GET_DOMAIN_BY_NAME, {
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
      setDomain(data.domain_by_name);
      setLoading(false);
    }
  }, [queryLoading, queryError, data]);

  return { domain, loading, error };
}
