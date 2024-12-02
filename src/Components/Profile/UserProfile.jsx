import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/Firebase/firebase";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/Firebase/firebase";
import "react-toastify/ReactToastify.css";

const UserProfile = () => {
  const sidebarStatus = useSelector((state) => state.sidebar.isOpen);

  const user = JSON.parse(localStorage.getItem("accountCredentials"));
  const sessionID = JSON.parse(localStorage.getItem('accountCredentials'))
  const [wishlist, setWishlist] = useState([])
  const userProfileImageLink = user.dp;

  const navigate = useNavigate();

  const logout = async () => {
    toast.loading("logging you out", { theme: "dark" });
    await new Promise((resolve) => {
      setInterval(() => {
        resolve();
      }, 1500);
    }).then(() => {
      signOut(auth)
        .then(() => {
          toast.dismiss();
          toast.success("logged out successfully", { theme: "dark" });
          localStorage.clear();
          setTimeout(() => {
            navigate("/home");
          }, 1000);
        })
        .catch((error) => {
          toast.dismiss();
          toast.error(error.message, { theme: "dark" });
        });
    });
  };

  const getWishList = async () =>{
    const wishListRef = doc(db , 'wishlists' , sessionID.sessionID)
    const wishListSnap = await getDoc(wishListRef)
    if(wishListSnap.exists()){
      setWishlist(wishListSnap.data().lists)
    }
  }

  useEffect(() =>{
    getWishList()
  },[])

  return (
    <div className="w-full h-fit">
      <div
        className={`profile ${
          sidebarStatus ? "pl-[12vw]" : "pl-[7rem]"
        } py-8 h-screen transition-all ease-in-out duration-150 pr-8`}
      >
        <header className="flex items-end justify-between">
          <div className="flex items-center gap-5">
            <p className="text-white text-4xl font-light rounded-full">
              {userProfileImageLink !== null ? (
                <img
                  loading="lazy"
                  className="w-18 rounded-full"
                  src={userProfileImageLink}
                />
              ) : (
                `${user.mail}`.split("").join("").charAt(0)
              )}
            </p>
            <p className="text-white text-2xl">{user.mail}</p>
          </div>

          <div className="flex gap-5">
            <button className=" bg-amber-500 px-6 py-1 rounded-md">
              Suscribe
            </button>
            <button
              onClick={logout}
              className="text-amber-500 border border-amber-500 px-6 py-1 rounded-md"
            >
              Logout
            </button>
          </div>
        </header>

        <div className="mt-52">
          <header className="border-b border-gray-600" >
            <p className="text-blue-600 font-semibold text-lg">Wishlist</p>
          </header>
          <main>
            {wishlist.map((Element , id) =>(
              <div key={id} >
                <p className="text-white" >{Element.showName}</p>
              </div>  
            ))}
          </main>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UserProfile;
