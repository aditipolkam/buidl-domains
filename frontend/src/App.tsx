import { Suspense } from "react";
import NewUserInfo from "./components/NewUserInfo";
import AuthenticatedUserFlow from "./components/AuthenticatedUserFlow";
import { AuthProvider, useAuth } from "./context/AuthContext";

function App() {
  return (
    <main>
      <AuthProvider>
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <ClientAuthWrapper />
        </Suspense>
      </AuthProvider>
    </main>
  );
}

function ClientAuthWrapper() {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <AuthenticatedUserFlow /> : <NewUserInfo />;
}

export default App;
