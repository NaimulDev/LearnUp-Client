import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Courses from "../Pages/Courses/Courses";
import Instructors from "../Pages/Instructors/Instructors";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
import AdminHome from "../Pages/DashboardPages/Panel/AdminPanel/AdminHome/AdminHome";
import ManageUsers from "../Pages/DashboardPages/Panel/AdminPanel/ManageUsers/ManageUsers";
import ManageClasses from "../Pages/DashboardPages/Panel/AdminPanel/ManageClasses/ManageClasses";
import AdminPayHistory from "../Pages/DashboardPages/Panel/AdminPanel/AdminPayHistory/AdminPayHistory";
import InstructorHome from "../Pages/DashboardPages/Panel/IsInstractorPanel/InstructorHome/InstructorHome";
import AddClasses from "../Pages/DashboardPages/Panel/IsInstractorPanel/AddClasses";
import MyAddedClass from "../Pages/DashboardPages/Panel/IsInstractorPanel/MyAddedClass";
import UserHome from "../Pages/DashboardPages/Panel/UserPanel/UserHome/UserHome";
import SelectedClass from "../Pages/DashboardPages/Panel/UserPanel/SelectedClass/SelectedClass";
import UserPayHistory from "../Pages/DashboardPages/Panel/UserPanel/UserPayHistory/UserPayHistory";
import Payment from "../Pages/DashboardPages/Shared/Payment/Payment";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/shop",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "adminhome",
        element: <AdminHome />,
      },

      {
        path: "manageusers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "manageclasses",
        element: (
          <AdminRoute>
            <ManageClasses />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payhistory",
        element: (
          <AdminRoute>
            <AdminPayHistory />
          </AdminRoute>
        ),
      },
      // INstructor
      {
        path: "inshome",
        element: <InstructorHome />,
      },
      {
        path: "addclass",
        element: <AddClasses />,
      },
      {
        path: "myclass",
        element: <MyAddedClass />,
      },
      {
        path: "enrolled",
        element: <MyAddedClass />,
      },
      // User
      {
        path: "userhome",
        element: <UserHome />,
      },
      {
        path: "selectclass",
        element: <SelectedClass />,
      },
      {
        path: "/dashboard/enroll",
        element: <UserPayHistory />,
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
      },
    ],
  },
]);
