import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postingFormDetails } from "../Redux/Employee/action";
import { v4 as uuid } from "uuid";

export const ClaimForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [purpose, setPurpose] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    const payload = {
      name,
      date,
      purpose,
      amount,
      status: "PENDING",
      id: uuid()
    };
    const submitAct = postingFormDetails(payload);
    dispatch(submitAct);
  };

  return (
    <Box>
      <h1>Employee Reimbursement Form</h1>
      <br />
      <br />
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="username"
        id="standard-basic"
        label="Employee Name"
        variant="standard"
      />
      <br />
      <TextField
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Date of Claim"
        id="standard-basic"
        label="Date"
        variant="standard"
      />
      <br />
      <TextField
        value={purpose}
        onChange={(e) => setPurpose(e.target.value)}
        placeholder="Purpose"
        id="standard-basic"
        label="Purpose of Claim"
        variant="standard"
      />
      <br />
      <TextField
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        id="standard-basic"
        label="Amount"
        variant="standard"
      />
      <br />
      <br />
      <Button onClick={handleSubmit} variant="contained">
        Submit Form
      </Button>
    </Box>
  );
};
