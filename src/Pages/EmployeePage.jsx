import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { ClaimForm } from "./ClaimForm";

export const EmployeePage = () => {
  const user = useSelector((state) => state.login.typeOfUser);

  if (user === "") {
    alert("Login is Needed, Kindly Login");
    return (
      <>
        <Redirect to="/" />
      </>
    );
  }
  return <ClaimForm />;
};
