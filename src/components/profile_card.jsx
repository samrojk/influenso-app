import { useState } from "react";
import { FaHeart, FaBolt, FaBookmark } from "react-icons/fa";

const ProfileCard = ({ profile, onClick }) => {
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);

  const isHighMatch = profile.match >= 80;

  return (
    <div className="w-auto max-w-87 shrink-0 cursor-pointer" onClick={onClick}>
      <div className="relative rounded-[28px] overflow-hidden shadow-2xl active:scale-[0.98] transition duration-200">
        {/* IMAGE */}
        <img
          src={profile.image}
          alt={profile.name}
          className="w-full h-auto max-h-128 object-cover"
        />

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

        {/* TOP SECTION */}
        <div className="absolute top-5 left-5 right-5 flex justify-between items-center">
          {/* MATCH BADGE */}
          <div
            className={`flex items-center gap-2 text-sm px-4 py-1.5 rounded-full font-semibold transition-all
              ${
                isHighMatch
                  ? "bg-yellow-400 text-black shadow-md"
                  : "bg-white/20 text-white backdrop-blur-md border border-white/30"
              }
            `}
          >
            <FaBolt className="text-xs" />
            {profile.match}% Match
          </div>

          {/* SAVE BUTTON */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSaved(!saved);
            }}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20"
          >
            <FaBookmark
              className={`text-sm transition-colors ${
                saved ? "text-yellow-400" : "text-white"
              }`}
            />
          </button>
        </div>

        {/* BOTTOM CONTENT */}
        <div className="absolute bottom-0 p-6 text-white w-full">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-semibold leading-tight">
              {profile.name}
            </h2>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setLiked(!liked);
              }}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20"
            >
              <FaHeart
                className={`text-sm transition-colors ${
                  liked ? "text-yellow-400" : "text-white"
                }`}
              />
            </button>
          </div>

          <p className="text-yellow-400 text-sm mt-1">{profile.username}</p>

          <p className="text-sm text-white/80 mt-3 line-clamp-2">
            {profile.bio}
          </p>

          {/* TAGS + FOLLOWERS */}
          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-2 flex-wrap">
              {profile.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-white/10 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/10"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <span className="text-sm">
              {profile.followers}{" "}
              <span className="text-white/60">Followers</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
