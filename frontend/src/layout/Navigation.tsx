import { usePrivy } from "@privy-io/react-auth";

export default function Navigation() {
  const { user } = usePrivy();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
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
            {/* <a
              href="/"
              className="text-white hover:text-[#ffafbd] transition-colors"
            >
              Home
            </a>
            <a
              href="/oracles"
              className="text-white hover:text-[#ffafbd] transition-colors"
            >
              Oracles
            </a>
            <a
              href="/about"
              className="text-white hover:text-[#ffafbd] transition-colors"
            >
              About
            </a>
            <a
              href="/docs"
              className="text-white hover:text-[#ffafbd] transition-colors"
            >
              Docs
            </a> */}
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-full transition-all">
              {user?.wallet?.address}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
