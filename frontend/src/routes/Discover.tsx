import ProfileCard from "../components/profile-card";
import { useUsers } from "../hooks/useDomains.ts";
import { Domain } from "../utils/types.ts";

export default function Discover() {
  const { domains, loading, error } = useUsers();
  // const [search, setSearch] = useState("");
  console.log(error);

  return (
    <div className="container mx-auto px-4">
      {loading ? (
        <div className="text-center py-12">
          <div className="w-8 h-8 border-4 border-[#4989a7] border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      ) : error ? (
        <div className="text-center py-12 text-red-400">
          An error occurred while loading users.
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain: Domain) => (
            <ProfileCard key={domains.name} domain={domain} />
          ))}
        </div>
      )}

      {domains.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-gray-400">No users found matching your search.</p>
        </div>
      )}
    </div>
  );
}
