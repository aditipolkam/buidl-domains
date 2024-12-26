import { usePrivy } from "@privy-io/react-auth";
import { useAddressCheck } from "../hooks/useAddressCheck";
import RegisteredUser from "./RegisteredUser";
import UnregisteredUser from "./UnregisteredUser";
import { useUserByName } from "../hooks/useUserByName.ts";

export default function AuthenticatedUserFlow() {
  const { user } = usePrivy();
  const { isAddressRegistered, loading, error } = useAddressCheck();
  const { user: guser } = useUserByName("aditi");
  console.log(guser);

  if (loading) return <div>Checking registration status...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (user) {
    return <RegisteredUser />;
  }

  return isAddressRegistered ? <RegisteredUser /> : <UnregisteredUser />;
}
