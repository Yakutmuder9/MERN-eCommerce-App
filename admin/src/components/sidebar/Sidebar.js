import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Icon,
  Link,
} from "@chakra-ui/react";
import IconBox from "../Icons/IconBox";
import {
  renderThumbDark,
  renderThumbLight,
  renderTrack,
  renderView,
} from "../Scrollbar/Scrollbar";
import { HSeparator } from "../Separator/Separator";
import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { HomeIcon } from "../Icons/Icons";

const Sidebar = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  let greenGradient =
    "linear-gradient(91.3deg, #03312E 0.94%, #0A5447 102.84%)";
  let location = useLocation();
  const [state, setState] = React.useState({});
  const mainPanel = React.useRef();
  let variantChange = "0.2s linear";

  const activeRoute = (routeName) => {
    return location.pathname === routeName ? "active" : "";
  };
  const { colorMode } = useColorMode;
  const createLinks = (routes) => {
    let activeBg = "white";
    let inactiveBg = "white";
    let activeColor = "gray.700";
    let inactiveColor = "gray.400";
    let sidebarActiveShadow = "0px 7px 11px rgba(0, 0, 0, 0.1)";
    return routes.map((prop, key) => {
      if (prop.redirect) {
        return null;
      }
      if (prop.category) {
        var st = {};
        st[prop["state"]] = !state[prop.state];
        return (
          <>
            <Text
              color={activeColor}
              fontWeight="bold"
              mb={{
                xl: "6px",
              }}
              mx="auto"
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              py="12px"
            >
              {prop.name}
            </Text>
            {createLinks(prop.views)}
          </>
        );
      }
      return (
        <NavLink to={prop.layout + prop.path} key={key}>
          {activeRoute(prop.layout + prop.path) === "active" ? (
            <Button
              boxSize="initial"
              justifyContent="flex-start"
              alignItems="center"
              boxShadow={sidebarActiveShadow}
              bg={activeBg}
              transition={variantChange}
              mb={{
                xl: "6px",
              }}
              mx={{
                xl: "auto",
              }}
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              py="12px"
              borderRadius="15px"
              _hover="none"
              w="100%"
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "0px 7px 11px rgba(0, 0, 0, 0.04)",
              }}
            >
              <Flex>
                {typeof prop.icon === "string" ? (
                  <Icon>{prop.icon}</Icon>
                ) : (
                  <IconBox
                    bg={greenGradient}
                    color="white"
                    h="30px"
                    w="30px"
                    me="12px"
                    transition={variantChange}
                  >
                    {prop.icon}
                  </IconBox>
                )}
                <Text color={activeColor} my="auto" fontSize="sm">
                  {document.documentElement.dir === "rtl"
                    ? prop.rtlName
                    : prop.name}
                </Text>
              </Flex>
            </Button>
          ) : (
            <Button
              boxSize="initial"
              justifyContent="flex-start"
              alignItems="center"
              bg="transparent"
              mb={{
                xl: "5px",
              }}
              mx={{
                xl: "auto",
              }}
              py="12px"
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              borderRadius="15px"
              _hover="none"
              w="100%"
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
            >
              <Flex>
                {typeof prop.icon === "string" ? (
                  <Icon>{prop.icon}</Icon>
                ) : (
                  <IconBox
                    bg={inactiveBg}
                    color={greenGradient}
                    h="30px"
                    w="30px"
                    me="12px"
                    transition={variantChange}
                  >
                    {prop.icon}
                  </IconBox>
                )}
                <Text color={inactiveColor} my="auto" fontSize="sm">
                  {prop.name}
                </Text>
              </Flex>
            </Button>
          )}
        </NavLink>
      );
    });
  };

  const { logo, routes } = props;

  let links = <>{createLinks(routes)}</>;
  let sidebarBg = useColorModeValue("white", "navy.800");

  let brand = (
    <Box pt={"25px"} mb="12px">
      {logo}
      <HSeparator my="26px" />
    </Box>
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const sidebarWidth = isHovered ? "260px" : "75px";
  const borderRadius = isHovered ? "0px 20px 20px 0px" : "0px";

  return (
    <Box ref={mainPanel}>
      <Box display={{ sm: "none", xl: "block" }} position="fixed">
        <Box
          bg={sidebarBg}
          transition={variantChange}
          w={sidebarWidth}
          h="100vh"
          p={"6px 12px"}
          filter="drop-shadow(0px 5px 14px rgba(0, 0, 0, 0.2))"
          borderRadius={borderRadius}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Scrollbars
            autoHide
            renderTrackVertical={renderTrack}
            renderThumbVertical={useColorModeValue(
              renderThumbLight,
              renderThumbDark
            )}
            renderView={renderView}
            hideTxt={isHovered}
          >
            <Box>{brand}</Box>

            <Stack direction="column" mb="40px">
              <Box>
                <HomeIcon color="inherit" />
                <Text
                  color={"red"}
                  fontWeight="bold"
                  mb={{
                    xl: "6px",
                  }}
                  mx="auto"
                  ps={{
                    sm: "10px",
                    xl: "16px",
                  }}
                  py="12px"
                >
                  Dashboard
                </Text>
              </Box>

              <Box>{links}</Box>
            </Stack>

            <Stack
              justify="center"
              direction="column"
              align="center"
              spacing="20px"
              mb="22px"
              mt="auto"
              mx="20px"
            >
              <Link href="login" minW="95%">
                <Button
                  variant={colorMode === "light" ? "dark" : "navy"}
                  minW="100%"
                >
                  Log Out
                </Button>
              </Link>
            </Stack>
          </Scrollbars>
        </Box>
      </Box>
    </Box>
  );
};

export const SidebarResponsive = (props) => {
  let location = useLocation();
  const { logo, routes, colorMode, hamburgerColor, ...rest } = props;

  const [state, setState] = React.useState({});
  const mainPanel = React.useRef();
  let greenGradient =
    "linear-gradient(91.3deg, #03312E 0.94%, #0A5447 102.84%)";

  const activeRoute = (routeName) => {
    return location.pathname === routeName ? "active" : "";
  };

  // Chakra Color Mode
  let activeBg = useColorModeValue("white", "navy.700");
  let inactiveBg = useColorModeValue("white", "navy.700");
  let activeColor = useColorModeValue("gray.700", "white");
  let inactiveColor = useColorModeValue("gray.400", "white");
  let sidebarActiveShadow = useColorModeValue(
    "0px 7px 11px rgba(0, 0, 0, 0.04)",
    "none"
  );
  let sidebarBackgroundColor = useColorModeValue("white", "navy.800");

  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      if (prop.redirect) {
        return null;
      }
      if (prop.category) {
        var st = {};
        st[prop["state"]] = !state[prop.state];
        return (
          <>
            <Text
              color={activeColor}
              fontWeight="bold"
              mb={{
                xl: "6px",
              }}
              mx="auto"
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              py="12px"
            >
              {document.documentElement.dir === "rtl"
                ? prop.rtlName
                : prop.name}
            </Text>
            {createLinks(prop.views)}
          </>
        );
      }
      return (
        <NavLink to={prop.layout + prop.path} key={key}>
          {activeRoute(prop.layout + prop.path) === "active" ? (
            <Button
              boxSize="initial"
              justifyContent="flex-start"
              alignItems="center"
              bg={activeBg}
              boxShadow={sidebarActiveShadow}
              mb={{
                xl: "6px",
              }}
              mx={{
                xl: "auto",
              }}
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              py="12px"
              borderRadius="15px"
              _hover="none"
              w="100%"
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
            >
              <Flex>
                {typeof prop.icon === "string" ? (
                  <Icon>{prop.icon}</Icon>
                ) : (
                  <IconBox
                    bg="blue.500"
                    color="white"
                    h="30px"
                    w="30px"
                    me="12px"
                  >
                    {prop.icon}
                  </IconBox>
                )}
                <Text color={activeColor} my="auto" fontSize="sm">
                  {prop.name}
                </Text>
              </Flex>
            </Button>
          ) : (
            <Button
              boxSize="initial"
              justifyContent="flex-start"
              alignItems="center"
              bg="transparent"
              mb={{
                xl: "6px",
              }}
              mx={{
                xl: "auto",
              }}
              py="12px"
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              borderRadius="15px"
              _hover="none"
              w="100%"
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
            >
              <Flex>
                {typeof prop.icon === "string" ? (
                  <Icon>{prop.icon}</Icon>
                ) : (
                  <IconBox
                    bg={inactiveBg}
                    color="blue.500"
                    h="30px"
                    w="30px"
                    me="12px"
                  >
                    {prop.icon}
                  </IconBox>
                )}
                <Text color={inactiveColor} my="auto" fontSize="sm">
                  {prop.name}
                </Text>
              </Flex>
            </Button>
          )}
        </NavLink>
      );
    });
  };

  var links = <>{createLinks(routes)}</>;

  var brand = (
    <Box pt={"35px"} mb="8px">
      {logo}
      <HSeparator my="26px" />
    </Box>
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex
      display={{ sm: "flex", xl: "none" }}
      ref={mainPanel}
      alignItems="center"
    >
      <HamburgerIcon
        color={hamburgerColor}
        w="18px"
        h="18px"
        ref={btnRef}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement={"left"}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          w="250px"
          maxW="250px"
          ms={{
            sm: "16px",
          }}
          my={{
            sm: "16px",
          }}
          borderRadius="16px"
          bg={sidebarBackgroundColor}
        >
          <DrawerCloseButton
            _focus={{ boxShadow: "none" }}
            _hover={{ boxShadow: "none" }}
          />
          <DrawerBody maxW="250px" px="1rem">
            <Box maxW="100%" h="100vh">
              <Box>{brand}</Box>
              <Stack direction="column" mb="40px">
                <Box>{links}</Box>
              </Stack>
              <Stack
                justify="center"
                direction="column"
                align="center"
                spacing="20px"
                mb="22px"
                mt="auto"
                mx="20px"
              >
                <Link href="#" minW="100%">
                  <Button
                    variant={colorMode === "light" ? "dark" : "navy"}
                    minW="100%"
                    mb={window.innerWidth <= 1024 && "12px"}
                  >
                    Log Out
                  </Button>
                </Link>
              </Stack>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
export default Sidebar;
