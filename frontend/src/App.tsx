import { Suspense } from "react";
import NewUserInfo from "./components/NewUserInfo";
import AuthenticatedUserFlow from "./components/AuthenticatedUserFlow";
import { AuthProvider, useAuth } from "./context/AuthContext";

function App() {
  return (
    <main className="container mx-auto p-4 relative z-10">
      <h1 className="text-4xl font-bold mb-6 text-center text-[#ffafbd]">
        Welcome to Offline ID
      </h1>
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
