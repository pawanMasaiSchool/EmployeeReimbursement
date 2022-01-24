import { Route, Switch } from "react-router-dom";
import AdminPage from "../Pages/AdminPage";
import { EmployeePage } from "../Pages/EmployeePage";
import LoginPage from "../Pages/LoginPage";

const AllRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LoginPage />
      </Route>
      <Route exact path="/dashboard/user/">
        <EmployeePage />
      </Route>
      <Route exact path="/dashboard/admin">
        <AdminPage />
      </Route>
      <Route exact>
        <h2>Page Not Found</h2>
      </Route>
    </Switch>
  );
};

export default AllRoutes;
