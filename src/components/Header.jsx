import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex sm:flex-row flex-col justify-between items-center sm:w-[1200px] w-auto ">
        <div className="font-bold text-lg flex ">
          <h2>Good Morning !</h2>
          <img src="/Assets/sun png.webp" alt="" width={30} height={30} />
        </div>
        <div className="shadow-lg p-3 flex gap-3 rounded-md bg-white">
          <div>
            <h2 className="text-base font-semibold">Hello</h2>
            <h4>john@doe.com</h4>
          </div>
          <div>
            <img src="/Assets/Rectangle 10.png" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
