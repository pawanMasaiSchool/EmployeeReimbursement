import Box from "@mui/material/Box";

function HeadCard() {
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
        Name
      </Box>

      <Box
        sx={{
          border: "2px solid black",
          display: "inline-block",
          padding: "15px",
          width: "100px"
        }}
      >
        Date of Claim
      </Box>

      <Box
        sx={{
          border: "2px solid black",
          display: "inline-block",
          padding: "15px",
          width: "100px"
        }}
      >
        Purpose of Claim
      </Box>

      <Box
        sx={{
          border: "2px solid black",
          display: "inline-block",
          padding: "15px",
          width: "100px"
        }}
      >
        Amount to be Claimed
      </Box>

      <Box
        sx={{
          border: "2px solid black",
          display: "inline-block",
          padding: "15px",
          width: "120px"
        }}
      >
        Status
      </Box>
    </Box>
  );
}

export default HeadCard;
