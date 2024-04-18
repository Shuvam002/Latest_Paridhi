import React, { useState, useEffect } from "react";
import Layout from "./Layout/Layout";
import Loading from "./Components/PreLoader/PreLoader";
import Hero from "./Components/Hero/Hero";
import Events from "./Components/Events/Events";
import Profile from "./Components/Profile/Profile";
import OurTeam from "./Components/OurTeam/OurTeam";
import DomainEvents from "./Components/Events/DomainEvents/DomainEvents";
import SignUp from "./Components/SignUp/SignUp";
import Merchandise from "./Components/Merchandise/Merchandise";
import Registration from "./Components/Registration/Registration";
import Spinner from "./Components/Spinner/Spinner";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Hero />} />
      <Route path="events" element={<Events />} />
      <Route path="our_team" element={<OurTeam />} />
      <Route path="events/:Domain" element={<DomainEvents />} />
      <Route path="profile" element={<Profile />} />
      <Route path="sign_up" element={<SignUp />} />
      <Route path="merchandise" element={<Merchandise />} />
      <Route path="events/:Domain/:EventName" element={<Registration />} />
    </Route>
  )
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVideoLoaded(true);
    }, 2000);

    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <div className="main">
      {isLoading || !videoLoaded ? (
        <Loading />
      ) : (
        <RouterProvider router={router} />
      )}
    </div>
  );
}
