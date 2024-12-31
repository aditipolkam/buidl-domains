import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

const GET_USERS = gql`
  query Domains {
    domains {
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

export function useUsers() {
  const { loading, error, data } = useQuery(GET_USERS);

  return {
    loading,
    error,
    domains: data?.domains || [],
  };
}
