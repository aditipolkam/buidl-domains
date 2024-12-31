import { usePrivy } from "@privy-io/react-auth";
import { Link } from "react-router-dom";

export default function Navigation() {
  const { user, login, logout } = usePrivy();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-16 mt-10">
        <div className="flex items-center justify-between h-16">
          <a href="/">
            <div className="flex items-center">
              <div className="w-20">
                <img src="logo.svg" alt="" />
              </div>
              <span className="text-primary text-2xl font-medium">
                Buidl Domains
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-full transition-all"
                  to={"/dashboard"}
                >
                  Dashboard
                </Link>

                <Link
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-full transition-all"
                  to={"/discover"}
                >
                  Discover
                </Link>
                <button
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-full transition-all"
                  onClick={logout}
                >
                  Logout
                </button>
              </>
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
