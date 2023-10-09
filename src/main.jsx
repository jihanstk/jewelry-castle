import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import MainLayout from "./MainLayout/MainLayout";
import Register from "./Pages/Register/Register";
import AuthProvider from "./AuthProvider/AuthProvider";
import Login from "./Pages/Login/Login";
import AddJewelry from "./Pages/AddJewelry/AddJewelry";
import AllJewelry from "./Pages/AllJewelry/AllJewelry";
import MyJewelry from "./Pages/MyJewelry/MyJewelry";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-jewelry",
        element: <AddJewelry></AddJewelry>,
      },
      {
        path: "/all-jewelry",
        element: <AllJewelry></AllJewelry>,
      },
      {
        path: "/my-jewelry",
        element: <MyJewelry></MyJewelry>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
