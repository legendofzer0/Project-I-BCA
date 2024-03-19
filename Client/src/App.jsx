import Role from "./private/role";
import axios from "axios";
import Cookies from "universal-cookie";
// Routes
import PageNotFound from "./pages/PageNotFound";
import AdminRoute from "./private/AdminRoute";
import UserRoute from "./private/UserRoute";
import KitchenRoute from "./private/KitchenRoute";
import RiderRoute from "./private/RiderRoute";
import { useState, useEffect } from "react";

const cookie = new Cookies();

function App() {
  const [user, setUser] = useState("Public");

  useEffect(() => {
    let isMounted = true;
    const verifyUser = async () => {
      const token = cookie.get("token");
      // console.log(token);
      // const parseData = token.data;
      // console.log(parseData);
      if (token) {
        try {
          const response = await axios.post("/api/user/verifyToken", {
            token: token,
          });
          if (isMounted) {
            // console.log(response);
            console.log();
            const string = response.data.role;
            const role = string.charAt(0).toUpperCase() + string.slice(1);
            // console.log(role);
            setUser(role || "Public");
          }
        } catch (error) {
          console.error("Error verifying token:", error);
          if (isMounted) setUser("Public");
        }
      } else {
        if (isMounted) setUser("Public");
      }
    };

    verifyUser();
    const intervalId = setInterval(verifyUser, 1000);
    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, []);

  return user === Role.Customer || user === Role.Public ? (
    <UserRoute user={user} />
  ) : user === Role.Admin ? (
    <AdminRoute user={user} />
  ) : user === Role.Kitchen ? (
    <KitchenRoute user={user} />
  ) : user === Role.Rider ? (
    <RiderRoute user={user} />
  ) : (
    <PageNotFound />
  );
}

export default App;
