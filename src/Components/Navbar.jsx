import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        flexDirection: "row",
        justifyContent: "center"
      }}
    >
      <Link
        style={{
          color: "brown",
          fontSize: "20px",
          textDecoration: "none",
          border: "4px solid black",
          padding: "8px"
        }}
        to="/"
      >
        Home
      </Link>
      <Link
        style={{
          color: "brown",
          fontSize: "20px",
          textDecoration: "none",
          border: "4px solid black",
          padding: "8px"
        }}
        to="/dashboard/user"
      >
        Employee
      </Link>
      <Link
        style={{
          color: "brown",
          fontSize: "20px",
          textDecoration: "none",
          border: "4px solid black",
          padding: "8px"
        }}
        to="/dashboard/admin"
      >
        Admin DB
      </Link>
    </Box>
  );
};

export default Navbar;
