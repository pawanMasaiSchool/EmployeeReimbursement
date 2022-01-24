import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { getUsers, sendUpdateToServer } from "../Redux/Admin/action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  p: 4
};

export default function BasicModal({ id, status }) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleStatusChange = async (name) => {
    console.log(id, name);
    const statUpdateAct = sendUpdateToServer(id, name);
    await dispatch(statUpdateAct);
    const getAct = getUsers();
    dispatch(getAct);
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>{status}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button
            name="REJECT"
            onClick={(e) => {
              handleStatusChange(e.target.name);
            }}
            variant="contained"
          >
            REJECT
          </Button>
          <Button
            name="IN-PROGRESS"
            onClick={(e) => {
              handleStatusChange(e.target.name);
            }}
            variant="contained"
          >
            IN-PROGRESS
          </Button>
          <Button
            name="SETTLED"
            onClick={(e) => {
              handleStatusChange(e.target.name);
            }}
            variant="contained"
          >
            SETTLED
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
