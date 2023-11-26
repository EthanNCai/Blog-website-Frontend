import Box from "@mui/material/Box";
export default function Headpicture() {
  return (
    <Box
      sx={{
        overflow: "hidden",
        maxHeight: "30vh",
      }}>
      <img
        src="rt.webp"
        alt="Loading"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
}
export {};
