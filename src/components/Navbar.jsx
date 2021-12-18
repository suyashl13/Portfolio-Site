import { Center, useBreakpointValue } from "@chakra-ui/react";
import { Box, Flex, HStack, Spacer, Text } from "@chakra-ui/layout";
import { Button, IconButton } from "@chakra-ui/button";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/color-mode";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/hooks";
import React from "react";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggleColorMode, colorMode } = useColorMode();
  const menuButton = <IconButton icon={<FaBars />} onClick={onOpen} />;
  const navlinkProps = {
    color: colorMode === "light" ? "black" : "teal",
  };

  const menuOptions = [
    { title: "Home" },
    { title: "Certifications" },
    { title: "Portfolio" },
    { title: "Contact" },
  ];

  const menuNavs = (
    <HStack>
      {menuOptions.map((e) => {
        return (
          <>
            <Button bg="transparent" {...navlinkProps}>
              {e.title}
            </Button>
            <Spacer w="24px" />
          </>
        );
      })}
      <IconButton
        bg="transparent"
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        onClick={toggleColorMode}
      />
    </HStack>
  );

  const variant = useBreakpointValue({
    base: menuButton,
    sm: menuButton,
    md: menuButton,
    lg: menuNavs,
  });

  return (
    <>
      <Center h="90px">
        <Box
          width={[
            "90%", // 0-30em
            "90%", // 30em-48em
            "80%", // 48em-62em
            "70%", // 62em+
          ]}
        >
          <Flex justifyContent="space-between">
            <Flex flexDirection="column" alignItems="center">
              <Text fontSize="2xl" textTransform="uppercase">
                Hiresuyash
              </Text>
              <Text fontWeight="light" opacity="0.6" fontSize="">
                Portfolio Site
              </Text>
            </Flex>
            <HStack>{variant}</HStack>
          </Flex>
        </Box>
      </Center>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Text fontWeight="light">Welcome to,</Text>
            <Text fontWeight="bold" fontSize="2xl">
              <code>hiresuyash.com</code>
            </Text>
            <hr style={{ marginTop: "8px" }} />
          </DrawerHeader>
          <DrawerBody>
            {menuOptions.map((e) => {
              return (
                <>
                  <Button bg="transparent" {...navlinkProps}>
                    {e.title}
                  </Button>
                  <Spacer h="24px" />
                </>
              );
            })}
            <hr />
            <Button
              mt="14px"
              bg="transparent"
              leftIcon={colorMode === "light" ? <FaMoon /> : <FaSun />}
              onClick={toggleColorMode}
            >
              {" "}
              <Text p="2">Switch Theme</Text>
            </Button>
          </DrawerBody>
          <DrawerFooter>
            <Text fontSize="12px" opacity="0.4">
              © Suyash Lawand 2021{" "}
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
