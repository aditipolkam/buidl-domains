import { usePrivy } from "@privy-io/react-auth";
import { useNavigate, useParams } from "react-router-dom";

export default function Profile() {
  //   const [searchParams] = useSearchParams();
  const searchParams = useParams();
  const profile = {
    username: searchParams.username,
    name: "John Doe",
    bio: "Blockchain enthusiast and developer",
    profession: "Software Engineer",
    user_address: "0x83be038BAfbf19170490FDD29de89e491bCF8Cf3",
    token_id: "1234",
    txn_hash: "0x123...abc",
    timestamp: "2024-12-28T21:42:00Z",
    pfp: null,
    cover: null,
  };

  const { user, authenticated } = usePrivy();
  const navigate = useNavigate();
  // if (!user || !authenticated) {
  //   navigate("/");
  // }

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden">
        <div className="h-48 bg-gradient-to-r from-[#4989a7] to-[#ffafbd]" />

        <div className="px-8 py-6 -mt-16">
          <div className="flex items-end gap-6 mb-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#4989a7] to-[#ffafbd] border-4 border-gray-900" />
            <div>
              <h1 className="text-3xl font-bold text-white">{profile.name}</h1>
              <p className="text-gray-400">{profile.username}.offline</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold text-white">Bio</h2>
                <p className="text-gray-400">{profile.bio}</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white">Profession</h2>
                <p className="text-gray-400">{profile.profession}</p>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="p-4 rounded-lg bg-white/5">
                <h3 className="text-gray-400 mb-2">Blockchain Details</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-gray-500">Address:</span>
                    <p className="text-white font-mono">
                      {profile.user_address}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-500">Token ID:</span>
                    <p className="text-white font-mono">{profile.token_id}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Transaction:</span>
                    <p className="text-white font-mono">{profile.txn_hash}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Claimed:</span>
                    <p className="text-white">
                      {new Date(profile.timestamp).toLocaleDateString()}
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
