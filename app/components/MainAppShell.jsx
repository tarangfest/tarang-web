"use client";

import React, { useState } from "react";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import {
  AppShell,
  Burger,
  Text,
  Drawer,
  Stack,
  Box,
  Divider,
  Paper,
  Group,
  Transition,
  Center,
} from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";

const commonTextStyles = {
  fontFamily: "General Sans",
  fontSize: "2rem",
  fontWeight: 500,
  color: "#292929",
  whiteSpace: "nowrap",
};

const textStyles = {
  ...commonTextStyles,
  transform: "rotate(-90deg)",
};

const homeTextStyles = {
  ...commonTextStyles,
  transform: "rotate(-90deg) translateX(45%)",
  color: "#8C8C8C",
};

const navItemsStyles = {
  ...commonTextStyles,
  lineHeight: "143.98%",
  marginTop: "0.75rem",
};

function createNavItem(isMobileView, text, hovered, sethovered) {
  const fontSize = isMobileView ? "2rem" : "2.5rem";

  return (
    <Box
      key={text}
      onMouseEnter={() => sethovered(text)}
      onMouseLeave={() => sethovered("")}
    >
      <Group
        justify="space-between"
        align="center"
        pr={20}
        style={{ cursor: "pointer" }}
      >
        <Text
          pl={isMobileView ? "2.5rem" : "0"}
          style={{
            ...navItemsStyles,
            fontSize: fontSize,
          }}
        >
          {text}
        </Text>
        <Transition
          mounted={hovered == text}
          transition="slide-right"
          duration={300}
          timingFunction="ease"
        >
          {(styles) => (
            <div style={styles}>
              {" "}
              <IconArrowUpRight
                size={"3.5rem"}
                stroke={1}
                style={{ marginBottom: "-0.75rem" }}
              />
            </div>
          )}
        </Transition>
      </Group>
      <Divider color="#9A9A9A" size={"md"} mt={25} />
    </Box>
  );
}
export default function MainAppShell({ children }) {
  const navItems = ["Home", "About", "Events", "Gallery", "Contact Us", "FAQ"];

  const [opened, { toggle, close }] = useDisclosure(false);
  const isMobileView = useMediaQuery("(max-width: 768px)");
  const [hovered, sethovered] = useState("");

  return (
    <AppShell
      navbar={{
        width: 96,
        breakpoint: "sm",
        collapsed: { mobile: true },
      }}
    >
      <AppShell.Navbar>
        <Stack align="center" w={96} p={20} justify="space-between" h="100vh">
          <Burger opened={opened} onClick={toggle} />
          <Text style={textStyles}>Tarang 23</Text>
          <Text style={{ ...textStyles, ...homeTextStyles }}>Home</Text>
        </Stack>
      </AppShell.Navbar>

      {isMobileView && (
        <AppShell.Header
          style={styles.header}
          pos={"fixed"}
          top={48}
          left={16}
          zIndex={201}
          h={56}
          w={56}
          bg={opened ? "#FFF4E2" : "#FFF8DD"}
        >
          <Center w={"100%"} h={"100%"}>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" />
          </Center>
        </AppShell.Header>
      )}

      <AppShell.Main>
        <Drawer
          opened={opened}
          onClose={close}
          withCloseButton={false}
          size={isMobileView ? "100%" : "calc(100% - 96px)"}
          position="right"
          styles={{
            content: {
              backgroundColor: "#FFF4E2",
            },
          }}
          transitionProps={{
            transition: "scale-x",
            duration: 150,
            timingFunction: "linear",
          }}
          overlayProps={{ backgroundOpacity: 0 }}
        >
          <Stack
            align="flex-start"
            style={{
              padding: !isMobileView
                ? "2.5rem 6.5rem 5rem 2.5rem"
                : "4.5rem 1.0rem 0 1.0rem",
              marginTop: isMobileView ? "20px" : "0px",
            }}
          >
            {navItems.map((item, index) => (
              <Box style={{ width: "100%" }} key={item}>
                {createNavItem(isMobileView, item, hovered, sethovered)}
              </Box>
            ))}
          </Stack>
        </Drawer>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}

const styles = {
  header: {
    borderRadius: "50%",
    border: "2px solid #252525",
  },
};