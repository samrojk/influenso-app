import { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import ProfileCard from "../components/profile_card";
import PopUp from "../components/popup";
import profile from "../data/profile";

const Discover = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  return (
    <div className="mx-4 sm:mx-12 mt-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold font-secondary">Discover</h1>
        <button>
          <IoFilterSharp size={24} />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-6">
        {profile.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onClick={() => setSelectedProfile(profile)}
          />
        ))}
      </div>

      <PopUp
        isOpen={!!selectedProfile}
        profile={selectedProfile}
        onClose={() => setSelectedProfile(null)}
      />
    </div>
  );
};

export default Discover;
