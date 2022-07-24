import { Box } from "@chakra-ui/react";
import './App.css';
import { Navbar } from "./Common/Navbar/Navbar";
import { Body } from "./home/body/Body";
import { Footer } from "./Common/footer/Footer";
// import { Header } from "./home/header/Header";
import {Header} from "./news/header/Header"
import { AllRoutes } from "./AllRoutes";

function App() {
  return (
    <Box>
      
  <AllRoutes/>
  {/* <Footer/> */}
    </Box>
  );
}

export default App;
