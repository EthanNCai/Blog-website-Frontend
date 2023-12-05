import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { EmojiPeople, Web } from "@mui/icons-material";
import { Stack, Box } from "@mui/material";

export default function PersonalInfoBar() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Stack direction={"row"} alignContent={"center"} spacing={"7px"}>
            <Web />
            <Typography
              variant="body2"
              sx={{
                fontFamily: "JBFont",
              }}>
              站點信息 Site info.
            </Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction={"row"} spacing={"15px"} padding={"8px"}>
            <Typography>
              這是一個博客網站，主要包括關於我的個人經歷以及在計算機科學領域的探索的文章。網站於
              2023 年 12 月 5 日完成。網站使用的技術棧包括 React、Nginx、Django
              和 MySQL。
              <br /> <br />
              This is a blog website that primarily includes posts about my
              personal experiences and explorations in computer science. It was
              completed on December 5th, 2023. The technology stack used for
              this website consists of React, Nginx, Django, and MySQL.
            </Typography>
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header">
          <Stack direction={"row"} alignContent={"center"} spacing={"7px"}>
            <EmojiPeople />
            <Typography
              variant="body2"
              sx={{
                fontFamily: "JBFont",
              }}>
              作者信息 Establisher info.
            </Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction={"row"} spacing={"15px"} alignContent={"center"}>
            <div style={{ maxWidth: "70%" }}>
              <Box
                sx={{
                  width: "82px",
                  height: "82px",
                  aspectRatio: "1/1",
                  overflow: "hidden",
                  borderRadius: "15%",
                  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
                }}>
                <img
                  src="https://th.bing.com/th/id/R.5dd4012098c6c106db072d0ab2e1b6f9?rik=3Dx%2fMkkB0Tc6cA&riu=http%3a%2f%2fi1.hdslb.com%2fbfs%2farchive%2f1f2b374af0dbfcfc14c4e88626dbf9afb6b8495b.jpg&ehk=RPD1cT%2fudh5d6usCI7YzvdX85Ri3dhiQmu11j4a4E2s%3d&risl=&pid=ImgRaw&r=0"
                  alt="Loading"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </div>
            <Stack>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "JBFont",
                }}>
                蔡俊志 Junzhi Cai
              </Typography>
              <Typography variant="body2" padding={"8px"}>
                集美大學本科在讀
                <br />
                計算機科學
                <br />+ 在我的GitHub主頁查看更多細節
                <br />
                <br />
                Undergraduate student at JiMei University
                <br />
                Computer Science
                <br />+ more details on my GitHub page
              </Typography>
            </Stack>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

//B.S. at JiMei University
//<br />
//
