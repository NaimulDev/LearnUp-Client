import { NavLink, Outlet } from "react-router-dom";
import {
  FaWallet,
  FaHome,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaBars,
} from "react-icons/fa";
import { LoadingBar } from "react-redux-loading-bar";
import useAuth from "../hooks/useAuth";
import IsAdmin from "../Pages/DashboardPages/Shared/Sidebar/IsAdmin";
import IsInstractors from "../Pages/DashboardPages/Shared/Sidebar/IsInstractors";
import IsUser from "../Pages/DashboardPages/Shared/Sidebar/IsUser";
import { useAdmin, useInstractor } from "../hooks/useAdmin";
import "./dashboardStyles.css";
// import { useEffect, useState } from "react";
const Dashboard = () => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isIntractor] = useInstractor();
  const { user, logOut } = useAuth();

  // const [windowSize, setWindowSize] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowSize(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  if (isAdminLoading) {
    return <LoadingBar />;
  }

  const handleLogOut = () => {
    logOut()
      .then(() => {
        window.location.href = "/";
      })
      .catch((error) => console.log(error));
  };

  return (
    // <div className="drawer drawer-mobile lg:drawer-open ">
    //   <input id="my-drawer" type="checkbox" className="drawer-toggle" />

    //   <div className="drawer-content bg-primary text-white">
    //     <label
    //       htmlFor="my-drawer"
    //       className="btn btn-primary text-info drawer-button "
    //     >
    //       Open
    //     </label>
    //     <Outlet></Outlet>
    //   </div>

    //   <div className="drawer-side bg-secondary text-white ">
    //     <label
    //       htmlFor="my-drawer"
    //       aria-label="close sidebar"
    //       className="drawer-overlay"
    //     >
    //       {" "}
    //     </label>
    //     <div className="justify-center text-center space-y-4 mt-9">
    //       <div className="avatar cursor-pointer">
    //         <div className="w-10 h-10 rounded-full  ring ring-primary ring-offset-base-100 ring-offset-2">
    //           <img src={user?.photoURL} alt="User Avatar" />
    //         </div>
    //       </div>
    //       <div>
    //         <p>{user?.email}</p>
    //       </div>
    //       <div className="flex gap-5 justify-center">
    //         <NavLink to="/">
    //           <FaHome></FaHome>
    //         </NavLink>
    //         <FaCalendarAlt></FaCalendarAlt>
    //         <FaWallet></FaWallet>
    //       </div>
    //     </div>
    //     <hr className="my-5 " />

    //     <ul className="menu p-4 w-52 ">
    //       {isAdmin ? (
    //         <IsAdmin />
    //       ) : (
    //         <>{isIntractor ? <IsInstractors /> : <IsUser />}</>
    //       )}

    //       <div className="divider">
    //         <hr className="my-5" />

    //         <button
    //           className="mt-6 ml-14  gap-4 inline-flex  items-center"
    //           onClick={handleLogOut}
    //         >
    //           <FaExternalLinkAlt></FaExternalLinkAlt>Logout
    //         </button>
    //       </div>
    //     </ul>
    //   </div>
    // </div>

    <div className="drawer drawer-mobile lg:drawer-open bg-secondary text-white sm:h-full">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className=" text-info drawer-button lg:hidden"
        >
          <FaBars></FaBars>
        </label>
        <Outlet />
      </div>
      <div className="drawer-side lg:bg-primary ">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="justify-center text-center space-y-4 mt-9">
          <div className="avatar cursor-pointer">
            <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL} alt="User Avatar" />
            </div>
          </div>
          <div>
            <p>{user?.email}</p>
          </div>
          <div className="flex gap-5 justify-center">
            <NavLink to="/">
              <FaHome />
            </NavLink>
            <FaCalendarAlt />
            <FaWallet />
          </div>
        </div>
        <hr className="my-5" />
        <ul className="menu p-4 w-52 ">
          {isAdmin ? (
            <IsAdmin />
          ) : (
            <>{isIntractor ? <IsInstractors /> : <IsUser />}</>
          )}
          {/* <div className="divider bg-secondary">
            <hr className="my-5" />
            <button
              className="mt-6 ml-14 gap-4 inline-flex items-center"
              onClick={handleLogOut}
            >
              <FaExternalLinkAlt />
              Logout
            </button>
          </div> */}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
