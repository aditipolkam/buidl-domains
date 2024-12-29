import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

const GET_USERS = gql`
  query User {
    users {
      name
      user_address
      bio
      display_name
      profession
    }
  }
`;

export function useUsers() {
  const { loading, error, data } = useQuery(GET_USERS);

  return {
    loading,
    error,
    users: data?.users || [],
  };
}
