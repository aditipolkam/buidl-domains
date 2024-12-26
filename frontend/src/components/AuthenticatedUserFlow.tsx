import { usePrivy } from "@privy-io/react-auth";
import { useAddressCheck } from "../hooks/useAddressCheck";
import RegisteredUser from "./RegisteredUser";
import UnregisteredUser from "./UnregisteredUser";

export default function AuthenticatedUserFlow() {
  const { user } = usePrivy();
  const { isAddressRegistered, loading, error } = useAddressCheck();

  if (loading) return <div>Checking registration status...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (user) {
    return <RegisteredUser />;
  }

  return isAddressRegistered ? <RegisteredUser /> : <UnregisteredUser />;
}
