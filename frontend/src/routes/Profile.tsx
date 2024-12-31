import { useParams } from "react-router-dom";
import { useDomainByName } from "../hooks/useDomainByName.ts";
import { NotFound } from "../components/not-found.tsx";

export default function Profile() {
  const searchParams = useParams();
  const { domain } = useDomainByName(searchParams.username as string);
  if (!domain) return <NotFound />;

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden">
        <div className="h-48 bg-gradient-to-r from-secondary to-primary" />

        <div className="px-8 py-6 -mt-16">
          <div className="flex items-end gap-6 mb-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-secondary to-primary border-4 border-gray-900" />
            <div>
              <h1 className="text-3xl font-bold text-white">
                {domain.display_name ? domain.display_name : "---"}
              </h1>
              <p className="text-gray-400">{domain.name}.offline</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold text-white">Bio</h2>
                <p className="text-gray-400">
                  {domain.bio ? domain.bio : "---"}
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white">Profession</h2>
                <p className="text-gray-400">
                  {domain.profession ? domain.profession : "----"}
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="p-4 rounded-lg bg-white/5">
                <h3 className="text-gray-400 mb-2">Blockchain Details</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-gray-500">Address:</span>
                    <p className="text-white font-mono">{domain.address}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Token ID:</span>
                    <p className="text-white font-mono">{domain.token_id}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Transaction:</span>
                    <p
                      className="text-white font-mono overflow-hidden text-ellipsis whitespace-nowrap"
                      title={domain.transaction_hash}
                    >
                      {domain.transaction_hash}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-500">Claimed:</span>
                    <p className="text-white">
                      {new Date(
                        parseInt(domain.timestamp) * 1000
                      ).toLocaleDateString()}
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
