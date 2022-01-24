import Box from "@mui/material/Box";
import BasicModal from "./ModalComp";

function UserCard({ name, amount, date, purpose, status, id }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "2px"
      }}
    >
      <Box
        sx={{
          border: "2px solid black",
          display: "inline-block",
          padding: "15px",
          width: "100px"
        }}
      >
        {name}
      </Box>

      <Box
        sx={{
          border: "2px solid black",
          display: "inline-block",
          padding: "15px",
          width: "100px"
        }}
      >
        {date}
      </Box>

      <Box
        sx={{
          border: "2px solid black",
          display: "inline-block",
          padding: "15px",
          width: "100px"
        }}
      >
        {purpose}
      </Box>

      <Box
        sx={{
          border: "2px solid black",
          display: "inline-block",
          padding: "15px",
          width: "100px"
        }}
      >
        {amount}
      </Box>

      <Box
        sx={{
          border: "2px solid black",
          display: "inline-block",
          padding: "15px",
          width: "120px",
          cursor: "pointer",
          color: "blue"
        }}
      >
        <BasicModal status={status} id={id} />
      </Box>
    </Box>
  );
}

export default UserCard;
