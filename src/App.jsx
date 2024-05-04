import React, { useState, useEffect } from "react";
import Layout from "./Layout/Layout";
import Loading from "./Components/PreLoader/PreLoader";
import Spinner from "./Components/Spinner/Spinner";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Codezen from "./Components/Login_coding/Login_coding";

const Hero = React.lazy(() => import("./Components/Hero/Hero"));
const Events = React.lazy(() => import("./Components/Events/Events"));
const Profile = React.lazy(() => import("./Components/Profile/Profile"));
const WorkShop = React.lazy(() => import("./Components/WorkShop/WorkShop"));
const PrePredhiEvents = React.lazy(() =>
  import("./Components/PreParedhiEvents/PrePredhiEvents")
);
// const ProfileInformation = React.lazy(() =>
//   import("./Components/ProfileInformation/ProfileInformation")
// );

import ProfileInformation from "./Components/ProfileInformation/ProfileInformation";
const OurTeam = React.lazy(() => import("./Components/OurTeam/OurTeam"));

const DomainEvents = React.lazy(() =>
  import("./Components/Events/DomainEvents/DomainEvents")
);
const SignUp = React.lazy(() => import("./Components/SignUp/SignUp"));
const Merchandise = React.lazy(() =>
  import("./Components/Merchandise/Merchandise")
);
const Registration = React.lazy(() =>
  import("./Components/Registration/Registration")
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        path=""
        element={
          <React.Suspense fallback={<Spinner />}>
            <Hero />
          </React.Suspense>
        }
      />
      <Route
        path="events"
        element={
          <React.Suspense fallback={<Spinner />}>
            <Events />
          </React.Suspense>
        }
      />
      <Route
        path="workshop"
        element={
          <React.Suspense fallback={<Spinner />}>
            <WorkShop />
          </React.Suspense>
        }
      />
      <Route
        path="pre_paredhi_events"
        element={
          <React.Suspense fallback={<Spinner />}>
            <PrePredhiEvents />
          </React.Suspense>
        }
      />
      <Route
        path="our_team"
        element={
          <React.Suspense fallback={<Spinner />}>
            <OurTeam />
          </React.Suspense>
        }
      />
      <Route
        path="events/:Domain"
        element={
          <React.Suspense fallback={<Spinner />}>
            <DomainEvents />
          </React.Suspense>
        }
      />
      <Route
        path="profile"
        element={
          <React.Suspense fallback={<Spinner />}>
            <Profile />
          </React.Suspense>
        }
      />

      <Route
        path="sign_up"
        element={
          <React.Suspense fallback={<Spinner />}>
            <SignUp />
          </React.Suspense>
        }
      />
      <Route
        path="merchandise"
        element={
          <React.Suspense fallback={<Spinner />}>
            <Merchandise />
          </React.Suspense>
        }
      />
      <Route
        path="events/:Domain/:EventName"
        element={
          <React.Suspense fallback={<Spinner />}>
            <Registration />
          </React.Suspense>
        }
      />
      <Route
        path="events/:Domain/:EventName/:eventRegName"
        element={
          <React.Suspense fallback={<Spinner />}>
            <Codezen />
          </React.Suspense>
        }
      />
      <Route
        path="/profile/:GID"
        element={
          <React.Suspense fallback={<Spinner />}>
            <ProfileInformation />
          </React.Suspense>
        }
      />
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