import { usePrivy } from "@privy-io/react-auth";

export default function Navigation() {
  const { user, login, logout } = usePrivy();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-16 mt-10">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="w-20 mt-5">
                <img src="offline.svg" alt="" />
              </div>
              <span className="text-white text-xl font-medium">
                Offline Protocol
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {user ? (
              <button
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-full transition-all"
                onClick={logout}
              >
                Logout
              </button>
            ) : (
              <button
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-full transition-all"
                onClick={login}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
