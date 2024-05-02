import { Card } from "@mui/material";

const LoadingCard = () => {
  return (
    <Card
      sx={{
        position: "fixed",
        p: "4px 8px",
        width: "fit-content",
        bottom: 10,
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      Loading...
    </Card>
  );
};

export default LoadingCard;
