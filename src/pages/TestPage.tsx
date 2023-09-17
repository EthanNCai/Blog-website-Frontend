import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Helmet } from "react-helmet";
export default function TestPage() {
  // 使用 params 对象来访问 URL 中的参数
  const queryParameters = new URLSearchParams(window.location.search);
  const bid = queryParameters.get("bid");
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lambo</title>
      </Helmet>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 128,
            height: 128,
          },
        }}>
        {bid}
      </Box>
    </>
  );
}
