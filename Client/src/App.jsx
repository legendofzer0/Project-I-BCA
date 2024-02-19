import Role from "./private/role";
//Routes
import AdminRoute from "./private/AdminRoute";
import UserRoute from "./private/UserRoute";
import PageNotFound from "./pages/PageNotFound";
import KitchenRoute from "./private/KitchenRoute";
import RiderRoute from "./private/RiderRoute";

function App() {
  const CurrentUser = "Customer";
  return CurrentUser === Role.Customer || CurrentUser === Role.Public ? (
    <UserRoute user={CurrentUser} />
  ) : CurrentUser === Role.Admin ? (
    <AdminRoute user={CurrentUser} />
  ) : CurrentUser === Role.Kitchen ? (
    <KitchenRoute user={CurrentUser} />
  ) : CurrentUser === Role.Rider ? (
    <RiderRoute user={CurrentUser} />
  ) : (
    <PageNotFound />
  );
}

export default App;
