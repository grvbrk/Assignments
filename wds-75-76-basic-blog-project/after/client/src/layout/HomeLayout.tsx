import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Skeleton from "react-loading-skeleton";

function HomeLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      <ScrollRestoration
        getKey={(location) => {
          return location.pathname;
        }}
      />
      <Navbar />

      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default HomeLayout;
