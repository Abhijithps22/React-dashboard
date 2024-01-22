import React from "react";

const ProfileCard = () => {
  return (
    <div>
      <div className="flex  w-full justify-center">
        <div className="max-w-xs">
          <div className="bg-white shadow-xl rounded-lg py-3">
            <div className="photo-wrapper p-2">
              <img src="/Assets/media.png" alt="" />
            </div>
            <div className="p-2">
              <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                Joh Doe
              </h3>
              <div className="text-center text-gray-400 text-xs font-semibold">
                <p>Ceo</p>
              </div>
              <div className="social_icons mt-3">
                <ul className="flex justify-center gap-3">
                  <li>
                    <img src="/Assets/facebook.png" alt="" />
                  </li>
                  <li>
                    <img src="/Assets/instagram.png" alt="" />
                  </li>
                  <li>
                    <img src="/Assets/twitter.png" alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
