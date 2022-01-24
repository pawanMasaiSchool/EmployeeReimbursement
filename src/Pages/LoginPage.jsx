import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginRequestFailure,
  loginRequestSuccess
} from "../Redux/Login/action";
import { Redirect } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.typeOfUser);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (name.length > 0 || name === "ADMIN") {
      const succAct = loginRequestSuccess(name);
      dispatch(succAct);
      alert(`Logged in`);
    } else {
      const failAct = loginRequestFailure();
      dispatch(failAct);
      alert("Wrong Credidentials");
    }
  };

  if (user === "ADMIN") {
    return <Redirect to="/dashboard/admin" />;
  }

  return (
    <Box>
      <h3>For Loggin in as an Admin name and password should be ADMIN</h3>
      <br />
      Current User is -- {`${user}`}
      <br />
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="username"
        id="standard-basic"
        label="name"
        variant="standard"
      />
      <br />
      <br />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        id="standard-basic"
        label="password"
        variant="standard"
      />
      <br />
      <br />
      <Button onClick={handleLogin} variant="contained">
        Login
      </Button>
    </Box>
  );
};

export default LoginPage;
