import { Box, HStack, Image, Spacer } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

import React, { useState } from "react";
import "./navbar.css";
import Image1 from "../../Images/logo.png";
import Image2 from "../../Images/fantasy-home.png";
import { TbMoon } from "react-icons/tb";
import { BiBell } from "react-icons/bi";
import { CgMenuGridO } from "react-icons/cg";
import { TbLanguageHiragana } from "react-icons/tb";
import { BsSearch } from "react-icons/bs";
import { CardComponents } from "./CardComponents";
import { data1 } from "../../Data/NavbarData/NavbarData1";

import { data2 } from "../../Data/NavbarData/NavbarData2";
import { data3 } from "../../Data/NavbarData/NavbarData3";
import { data4 } from "../../Data/NavbarData/NavbarData4";
import { data7 } from "../../Data/NavbarData/NavbarData7";
import { data6 } from "../../Data/NavbarData/NavbarData6";
export const Navbar = () => {
  const [card1, setCard1] = useState(false);
  const [card2, setCard2] = useState(false);
  const [card3, setCard3] = useState(false);
  const [card4, setCard4] = useState(false);
  const [card5, setCard5] = useState(false);
  const [card6, setCard6] = useState(false);
  const [card7, setCard7] = useState(false);
  return (
    <>
      <HStack
        justifyContent="space-around"
        bg="blue.400"
        color="white"
        p="10px 0px"
        boxSize="border-box"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap="50px"
        >
          <Box>
            <Image width="150px" src={Image1} alt="logo" />
          </Box>

          <Box display="flex" alignItems="center" gap="20px">
            <Box
              zIndex="1000"
              onMouseMove={() => setCard1(true)}
              onMouseOut={() => {
                setCard1(false);
              }}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                Live Score
              </Link>
            </Box>
            <Box
              onMouseMove={() => setCard2(true)}
              onMouseOut={() => setCard2(false)}
              zIndex="1000"
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                Series
              </Link>
            </Box>
            <Box
              onMouseMove={() => setCard3(true)}
              onMouseOut={() => setCard3(false)}
              zIndex="1000"
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                Teams
              </Link>
            </Box>
            <Box
              onMouseMove={() => setCard4(true)}
              onMouseOut={() => setCard4(false)}
              zIndex="1000"
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                News
              </Link>
            </Box>
            <Box
              onMouseMove={() => setCard5(true)}
              onMouseOut={() => setCard5(false)}
              zIndex="1000"
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                Features
              </Link>
            </Box>
            <Box
              onMouseMove={() => setCard6(true)}
              onMouseOut={() => setCard6(false)}
              zIndex="1000"
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                Vedieos
              </Link>
            </Box>
            <Box
              onMouseMove={() => setCard7(true)}
              onMouseOut={() => setCard7(false)}
              zIndex="1000"
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                Stats
              </Link>
            </Box>
          </Box>
        </Box>

        <Box display="flex" alignItems="center" gap="30px">
          <Box display="flex" alignItems="center" gap="10px">
            <Box>
              <Image width="20px" src={Image2} alt="Fantasy" />
            </Box>
            <Box>Fantasy</Box>
          </Box>
          <Box>Edition IN</Box>
          <Box>
            <TbMoon fontSize="25px" />
          </Box>
          <Box>
            <BiBell fontSize="25px" />
          </Box>
          <Box>
            <TbLanguageHiragana fontSize="25px" />
          </Box>
          <Box>
            <CgMenuGridO fontSize="25px" />
          </Box>
          <Box>
            <BsSearch fontSize="20px" />
          </Box>
        </Box>
      </HStack>
      <Box>
        <Box
          className={card1 ? "card" : "cardx"}
          position="absolute"
          marginTop="0rem"
          w="300px"
          onMouseMove={() => setCard1(true)}
          // onMouseOut={() => setCard1(false)}
          ml="15rem"
          p="2"
          shadow="md"
          borderWidth="1px"
          flexDirection="column"
          gap="20px"
        >
          {data1.map((e) => (
            <CardComponents key={e.id} item={e} />
          ))}
        </Box>

        <Box
     
          className={card2 ? "card2" : "cardx2"}
          onMouseMove={() => setCard2(true)}
          // onMouseOut={() => setCard2(false)}
          flexDirection="column"
          height="200px"
          w="600px"
          position="absolute"
          marginTop="0rem"
       
          ml="19rem"
          flexWrap="wrap"
          p="2"
          shadow="md"
          borderWidth="1px"
          gap="10px"
        >
          {data2.map((e) => (
            <CardComponents key={e.id} item={e} />
          ))}
        </Box>
        <Box
          className={card3 ? "card3" : "cardx3"}
          onMouseMove={() => setCard3(true)}
          // onMouseOut={() => setCard3(false)}
          flexDirection="column"
          position="absolute"
          marginTop="0rem"
          height="200px"
          w="600px"
          flexWrap="wrap"
          ml="18rem"
          p="2"
          shadow="md"
          borderWidth="1px"
          gap="10px"
        >
          {data3.map((e) => (
            <CardComponents key={e.id} item={e} />
          ))}
        </Box>
        <Box
          className={card4 ? "card4" : "cardx4"}
          onMouseMove={() => setCard4(true)}
          // onMouseOut={() => setCard4(false)}
          flexDirection="column"
          position="absolute"
          marginTop="0rem"
          height="200px"
          w="600px"
          flexWrap="wrap"
          ml="27rem"
          p="2"
          shadow="md"
          borderWidth="1px"
          gap="10px"
        >
          {data4.map((e) => (
            <CardComponents key={e.id} item={e} />
          ))}
        </Box>
        <Box
          className={card5 ? "card5" : "cardx5"}
          onMouseMove={() => setCard5(true)}
          // onMouseOut={() => setCard5(false)}
          flexDirection="column"
          position="absolute"
          marginTop="0rem"
          height="200px"
          w="600px"
          flexWrap="wrap"
          ml="34rem"
          p="2"
          shadow="md"
          borderWidth="1px"
          gap="10px"
        >
          {data6.map((e) => (
            <CardComponents key={e.id} item={e} />
          ))}
        </Box>
        <Box
          className={card6 ? "card6" : "cardx6"}
          onMouseMove={() => setCard6(true)}
          // onMouseOut={() => setCard6(false)}
          flexDirection="column"
          position="absolute"
          marginTop="0rem"
          height="200px"
          w="600px"
          flexWrap="wrap"
          ml="38rem"
          p="2"
          shadow="md"
          borderWidth="1px"
          gap="10px"
        >
          {data6.map((e) => (
            <CardComponents key={e.id} item={e} />
          ))}
        </Box>
        <Box
          className={card7 ? "card7" : "cardx7"}
          onMouseMove={() => setCard7(true)}
          // onMouseOut={() => setCard7(false)}
          flexDirection="column"
          height="200px"
          position="absolute"
          marginTop="0rem"
          w="600px"
          flexWrap="wrap"
          ml="40rem"
          p="2"
          shadow="md"
          borderWidth="1px"
          gap="10px"
        >
          {data7.map((e) => (
            <CardComponents key={e.id} item={e} />
          ))}
        </Box>
      </Box>
    </>
  );
};
