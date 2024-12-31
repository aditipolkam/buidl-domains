// src/hooks/useUserByAddress.ts

import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { Domain } from "../utils/types.ts";

const GET_DOMAIN_BY_ADDRESS = gql`
  query Domain($address: String!) {
    domain(address: $address) {
      address
      bio
      block_number
      display_name
      name
      profession
      timestamp
      token_id
      transaction_hash
    }
  }
`;

export function useDomainByAddress(address: string) {
  const [domain, setDomain] = useState<Domain | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const {
    data,
    loading: queryLoading,
    error: queryError,
  } = useQuery(GET_DOMAIN_BY_ADDRESS, {
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
      setDomain(data.domain);
      setLoading(false);
    }
  }, [queryLoading, queryError, data]);

  return { domain, loading, error };
}
