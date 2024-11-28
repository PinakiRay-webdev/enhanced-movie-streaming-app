import React from "react";
import { useSelector } from "react-redux";
const UserProfile = () => {
  const sidebarStatus = useSelector((state) => state.sidebar.isOpen);

  const user = JSON.parse(localStorage.getItem("accountCredentials"));

  return (
    <div className="w-full h-fit">
      <div
        className={`profile ${
          sidebarStatus ? "pl-[12vw]" : "pl-[7rem]"
        } py-8 h-screen transition-all ease-in-out duration-150 pr-8`}
      >
        <header className="flex items-end justify-between" >
          <div className="flex items-center gap-5">
            <p className="text-white text-4xl font-light py-1 px-4 border rounded-full">
              {`${user.mail}`.split("").join("").charAt(0)}
            </p>
            <p className="text-white text-2xl">{user.mail}</p>
          </div>

          <div className="flex gap-5">
            <button className=" bg-amber-500 px-6 py-1 rounded-md" >Suscribe</button>
            <button className="text-amber-500 border border-amber-500 px-6 py-1 rounded-md" >Logout</button>
          </div>
        </header>

        <main className="mt-52 border-b border-gray-600" >
          <header>
            <p className="text-blue-600 font-semibold text-lg" >Wishlist</p>
          </header>
        </main>
      </div>
    </div>
  );
};

export default UserProfile;
