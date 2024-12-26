import { useAuth } from "../context/AuthContext";
import { useAddressCheck } from "../hooks/useAddressCheck";
import RegisteredUser from "./RegisteredUser";
import UnregisteredUser from "./UnregisteredUser";

export default function AuthenticatedUserFlow() {
  const { userInfo } = useAuth();
  const { isAddressRegistered, loading, error } = useAddressCheck();

  if (loading) return <div>Checking registration status...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (userInfo) {
    return <RegisteredUser name={userInfo.name} />;
  }

  return isAddressRegistered ? <RegisteredUser /> : <UnregisteredUser />;
}
