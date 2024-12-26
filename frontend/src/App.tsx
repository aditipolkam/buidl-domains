import { Suspense } from "react";
import NewUserInfo from "./components/NewUserInfo";
import AuthenticatedUserFlow from "./components/AuthenticatedUserFlow";
import { usePrivy } from "@privy-io/react-auth";
import MainLayout from "./layout/MainLayout.tsx";

function App() {
  return (
    <main>
      <MainLayout>
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <ClientAuthWrapper />
        </Suspense>
      </MainLayout>
    </main>
  );
}

function ClientAuthWrapper() {
  const { authenticated } = usePrivy();
  return authenticated ? <AuthenticatedUserFlow /> : <NewUserInfo />;
}

export default App;
