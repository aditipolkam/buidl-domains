import { useParams } from "react-router-dom";
import { useUserByName } from "../hooks/useUserByName.ts";

export default function Profile() {
  const searchParams = useParams();
  const { user } = useUserByName(searchParams.username as string);
  if (!user) {
    return (
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden text-center py-16">
          {/* <div className="h-48 bg-gradient-to-r from-[#ffafbd] to-[#4989a7]" /> */}
          <div className="px-8 py-6 mt-16">
            <h1 className="text-6xl font-bold text-white mb-4">404</h1>
            <p className="text-gray-400 text-lg">
              Oops! The page you are looking for doesn't exist.
            </p>
            <div className="mt-8">
              <a
                href="/"
                className="inline-block px-6 py-3 text-white font-semibold bg-gradient-to-r from-[#4989a7] to-[#ffafbd] rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                Go Back Home
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden">
        <div className="h-48 bg-gradient-to-r from-[#4989a7] to-[#ffafbd]" />

        <div className="px-8 py-6 -mt-16">
          <div className="flex items-end gap-6 mb-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#4989a7] to-[#ffafbd] border-4 border-gray-900" />
            <div>
              <h1 className="text-3xl font-bold text-white">
                {user.display_name ? user.display_name : "---"}
              </h1>
              <p className="text-gray-400">{user.name}.offline</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold text-white">Bio</h2>
                <p className="text-gray-400">{user.bio ? user.bio : "---"}</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white">Profession</h2>
                <p className="text-gray-400">
                  {user.profession ? user.profession : "----"}
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="p-4 rounded-lg bg-white/5">
                <h3 className="text-gray-400 mb-2">Blockchain Details</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-gray-500">Address:</span>
                    <p className="text-white font-mono">{user.user_address}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Token ID:</span>
                    <p className="text-white font-mono">{user.token_id}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Transaction:</span>
                    <p
                      className="text-white font-mono overflow-hidden text-ellipsis whitespace-nowrap"
                      title={user.registration_tx}
                    >
                      {user.registration_tx}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-500">Claimed:</span>
                    <p className="text-white">
                      {new Date(parseInt(user.timestamp)).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
