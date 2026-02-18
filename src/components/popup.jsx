import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const PopUp = ({ isOpen, onClose, profile }) => {
  const [sent, setSent] = useState(false);

  const rawY = useMotionValue(0);

  const y = useSpring(rawY, {
    stiffness: 300,
    damping: 30,
    mass: 0.7,
  });

  useEffect(() => {
    if (!isOpen) {
      setSent(false);
      rawY.set(0);
    }
  }, [isOpen]);

  if (!profile) return null;

  const closeSheet = () => {
    // FAST OUT animation
    rawY.set(window.innerHeight);
    setTimeout(() => {
      onClose();
      rawY.set(0);
    }, 180); // fast industry-grade close
  };

  const handleDragEnd = (_, info) => {
    if (info.offset.y > 120 || info.velocity.y > 900) {
      closeSheet();
    } else {
      rawY.set(0);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-md z-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeSheet}
          />

          {/* SHEET */}
          <motion.div
            drag="y"
            dragConstraints={{ top: 0 }}
            dragElastic={0.25}
            onDragEnd={handleDragEnd}
            style={{ y }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 0.7,
            }}
            className="fixed bottom-0 left-0 right-0 z-70
            h-[85vh]
            bg-white
            rounded-t-[28px]
            shadow-2xl
            flex flex-col"
          >
            {/* SCROLLABLE CONTENT */}
            <div className="overflow-y-auto px-6 pt-4 pb-32">
              {/* HANDLE */}
              <div className="w-12 h-1.5 bg-black/20 rounded-full mx-auto mb-6 cursor-grab active:cursor-grabbing" />

              {/* HEADER */}
              <div className="text-center">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-yellow-400"
                />

                <h2 className="text-gray-900 text-2xl font-semibold mt-4">
                  {profile.name}
                </h2>

                <p className="text-yellow-500 text-sm mt-1">
                  {profile.username}
                </p>

                <div className="flex justify-center items-center gap-1 text-gray-500 mt-2 text-sm">
                  <IoLocationSharp />
                  {profile.location}
                </div>
              </div>

              {/* STATS */}
              <div className="flex justify-between mt-8 gap-3">
                <Stat value={profile.followers} label="Followers" />
                <Stat value={profile.engagementRate} label="Eng. Rate" />
                <Stat value={profile.category} label="Category" />
              </div>

              {/* WHY MATCH */}
              <div className="mt-8 bg-gray-100 rounded-2xl p-4">
                <div className="flex justify-between mb-3">
                  <h3 className="text-gray-900 font-semibold">
                    ✨ Why This Match?
                  </h3>
                  <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full">
                    {profile.matchScore}% Score
                  </span>
                </div>

                <p className="text-sm text-gray-800">
                  {profile.audienceOverlap}% Audience Overlap
                </p>

                <div className="w-full h-2 bg-gray-300 rounded-full mt-2">
                  <div
                    style={{ width: `${profile.audienceOverlap}%` }}
                    className="h-full bg-yellow-400 rounded-full"
                  />
                </div>

                <p className="text-xs text-gray-500 mt-3">
                  {profile.matchReason}
                </p>
              </div>

              {/* ABOUT */}
              <div className="mt-8">
                <h3 className="text-gray-900 font-semibold mb-3">About</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {profile.about}
                </p>
              </div>

              {/* TAGS */}
              <div className="mt-8">
                <h3 className="text-gray-900 font-semibold mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* STICKY CTA */}
            <div
              className="absolute bottom-0 left-0 right-0
              bg-linear-to-t from-white via-white to-transparent
              px-6 pb-6 pt-4"
            >
              <motion.button
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 500, damping: 25 }}
                onClick={() => setSent(true)}
                className={`w-full py-4 rounded-full font-semibold shadow-lg transition-all duration-300
                ${
                  sent ? "bg-green-600 text-white" : "bg-yellow-400 text-black"
                }`}
              >
                {sent ? (
                  <div className="flex justify-center gap-2 items-center">
                    <FaCheck /> Sent!
                  </div>
                ) : (
                  "Connect Request"
                )}
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Stat = ({ value, label }) => (
  <div className="flex-1 bg-gray-100 rounded-2xl p-4 text-center">
    <p className="text-gray-900 font-semibold">{value}</p>
    <p className="text-xs text-gray-500 mt-1">{label}</p>
  </div>
);

export default PopUp;
