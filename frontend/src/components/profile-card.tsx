import { Link } from "react-router-dom";
import { Domain } from "../utils/types.ts";

interface ProfileCardProps {
  domain: Domain;
}

function ProfileCard({ domain }: ProfileCardProps) {
  return (
    <div className="group relative">
      {/* Card background with hover effect */}
      <div className="absolute inset-0.5 bg-gradient-to-br from-[#4989a7] to-[#ffafbd] rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity" />

      <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 h-full border border-white/10 hover:border-white/20 transition-colors">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-primary flex-shrink-0">
            {/* {user.pfp && (
              <img
                src={user.pfp}
                alt={user.name}
                className="w-full h-full rounded-full object-cover"
              />
            )} */}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-white truncate">
              {domain.name}
            </h3>
            <p className="text-[#4989a7] text-sm">{domain.name}.buidl</p>
            <p className="text-gray-400 text-sm mt-1">
              {domain.profession ? domain.profession : "---"}
            </p>
          </div>
        </div>

        <p className="mt-4 text-gray-300 text-sm line-clamp-3">
          {domain.bio ? domain.bio : "---"}
        </p>

        <div className="mt-4 pt-4 border-t border-white/10">
          <Link
            to={`/profile/${domain.name}`}
            className="text-sm text-[#4989a7] hover:text-[#ffafbd] transition-colors"
          >
            View Profile →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
