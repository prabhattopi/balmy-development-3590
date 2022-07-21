import { Box } from "@chakra-ui/react";
import './App.css';
import { Navbar } from "./Common/Navbar/Navbar";
import { Body } from "./home/body/Body";
import { Footer } from "./Common/footer/Footer";
// import { Header } from "./home/header/Header";
import {Header} from "./liveScore/Header/Header"

function App() {
  return (
    <Box>
      
   {/* <Navbar/> */}
    {/* <Header/> */}
    <Header/>
    {/* <Body/> */}
    {/* <Footer/> */}
    </Box>
  );
}

export default App;
