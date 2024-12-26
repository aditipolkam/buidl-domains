import { Suspense } from "react";
import NewUserInfo from "./NewUserInfo";
import AuthenticatedUserFlow from "./AuthenticatedUserFlow";
import { usePrivy } from "@privy-io/react-auth";

function Home() {
  return (
    <Suspense fallback={<div className="text-center">Loading...</div>}>
      <ClientAuthWrapper />
    </Suspense>
  );
}

function ClientAuthWrapper() {
  const { authenticated } = usePrivy();
  return authenticated ? <AuthenticatedUserFlow /> : <NewUserInfo />;
}

export default Home;
