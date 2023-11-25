import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Visibility, ThumbDown, ThumbUp, LockClock } from "@mui/icons-material";

const icons = [<Visibility />, <ThumbDown />, <ThumbUp />, <LockClock />];
const labels = ["43", "1", "4", "2021.2.12"];

export default function InBlogTitle() {
  return (
    <Paper elevation={3}>
      <Box padding={"20px"}>
        <Typography variant="h5" component="div" sx={{ fontFamily: "JBFont" }}>
          convLSTM Horizon self driving v1.0'
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          programming
        </Typography>
        {icons.map((icon, index) => (
          <Chip
            key={index}
            icon={icon}
            label={labels[index]}
            sx={{ fontFamily: "JBFont" }}
            size="small"
            color="secondary"
            style={{ marginInline: "5px" }}
          />
        ))}
      </Box>
    </Paper>
  );
}
