import React from "react";
import { Suspense, lazy, useState, useEffect } from "react";
import Layout from "./Layout/Layout";
import Loading from "./Components/PreLoader/PreLoader";
const Hero = React.lazy(() => import("./Components/Hero/Hero"));
const Events = React.lazy(() => import("./Components/Events/Events"));
const Profile = React.lazy(() => import("./Components/Profile/Profile"));
const WorkShop = React.lazy(() => import("./Components/WorkShop/WorkShop"));
const Sponsors = React.lazy(() => import("./Components/Sponsors/Sponsors"));
const OurTeam = React.lazy(() => import("./Components/OurTeam/OurTeam"));
const Registration = React.lazy(() =>
  import("./Components/Registration/Registration")
);
const DomainEvents = React.lazy(() =>
  import("./Components/Events/DomainEvents/DomainEvents")
);
const PrePredhiEvents = React.lazy(() =>
  import("./Components/PreParedhiEvents/PrePredhiEvents")
);
const SignUp = React.lazy(() => import("./Components/SignUp/SignUp"));
const Login = React.lazy(() =>
  import("./Components/Login_coding/Login_coding")
);
const Merchandise = React.lazy(() =>
  import("./Components/Merchandise/Merchandise")
);
import Spinner from "./Components/Spinner/Spinner";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// import loadingVideo from '../src/assets/video/loading.mp4';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        path=""
        element={
          <Suspense fallback={<Spinner />}>
            <Hero />
          </Suspense>
        }
      />
      <Route
        path="events"
        element={
          <Suspense fallback={<Spinner />}>
            <Events />
          </Suspense>
        }
      />
      <Route
        path="workshop"
        element={
          <Suspense fallback={<Spinner />}>
            <WorkShop />
          </Suspense>
        }
      />
      <Route
        path="our_team"
        element={
          <Suspense fallback={<Spinner />}>
            <OurTeam />
          </Suspense>
        }
      />
      <Route
        path="sponsors"
        element={
          <Suspense fallback={<Spinner />}>
            <Sponsors />
          </Suspense>
        }
      />
      <Route
        path="pre_paredhi_events"
        element={
          <Suspense fallback={<Spinner />}>
            <PrePredhiEvents />
          </Suspense>
        }
      /> */}
      <Route
        path="events/:Domain"
        element={
          <Suspense fallback={<Spinner />}>
            <DomainEvents />
          </Suspense>
        }
      />
      <Route
        path="profile"
        element={
          <Suspense fallback={<Spinner />}>
            <Profile />
          </Suspense>
        }
      />
      <Route
        path="sign_up"
        element={
          <Suspense fallback={<Spinner />}>
            <SignUp />
          </Suspense>
        }
      />
      {/* <Route
        path="events/:Domain/:EventName/register"
        element={
          <Suspense fallback={<Spinner />}>
            <Login />
          </Suspense>
        }
      /> */}
      <Route
        path="merchandise"
        element={
          <Suspense fallback={<Spinner />}>
            <Merchandise />
          </Suspense>
        }
      />
      <Route
        path="events/:Domain/:EventName"
        element={
          <Suspense fallback={<Spinner />}>
            <Registration />
          </Suspense>
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
