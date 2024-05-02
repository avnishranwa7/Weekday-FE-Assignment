import { Button } from "@mui/material";

const EasyApplyButton = () => {
  return (
    <Button
      sx={{
        height: 40,
        backgroundColor: "#55efc4",
        borderRadius: "8px",
        fontWeight: 500,
        color: "black",
        textTransform: "none",
        fontSize: 16,
      }}
    >
      ⚡ Easy Apply
    </Button>
  );
};

export default EasyApplyButton;
