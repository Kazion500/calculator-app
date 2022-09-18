import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "~/pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="*"
        element={
          <Box
            display={"flex"}
            height="100vh"
            justifyContent={"center"}
            alignItems="center"
            fontWeight={'900'}
            fontSize={'3rem'}
          >
            Not Found
          </Box>
        }
      />
    </Routes>
  );
};

export default App;
