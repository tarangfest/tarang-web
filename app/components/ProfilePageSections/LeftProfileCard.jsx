import {
  Button,
  Card,
  Divider,
  Flex,
  Paper,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import { IconLogout, IconUserCircle } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import ProfileStar from "@/public/ProfileStar.svg";
import profileCSS from "@/app/styles/profile.module.css";
import { useMediaQuery } from "@mantine/hooks";

export default function LeftProfileCard() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  function StarPaper({ pc }) {
    return (
      <Paper
        p={15}
        bg={"transparent"}
        visibleFrom={pc ? "sm" : null}
        hiddenFrom={pc ? null : "sm"}
      >
        <Flex
          direction={"column"}
          className={profileCSS.paperCardFlex}
          align="center"
          gap={30}
          px={23}
          py={29}
          bg={"#ebff8a"}
        >
          <Image
            className={profileCSS.profileStar}
            src={ProfileStar}
            alt="Profile Star"
          />
          <Stack
            gap={30}
            align="center"
            className={profileCSS.profileCardFlexStack}
          >
            <Text fz={24}>Unlock Free Entry</Text>
            <Text className={profileCSS.text} fz={18} c={"#383F45"}>
              Enjoy complimentary entry by registering for any paid event!
            </Text>
          </Stack>
        </Flex>
      </Paper>
    );
  }

  return (
    <>
      <Card
        bg={"#D0EB4C"}
        miw={"18rem"}
        w={"18rem"}
        p={0}
        radius={0}
        className={profileCSS.leftCard}
      >
        <Stack
          align="flex-start"
          py={36}
          px={16}
          w={"100%"}
          h={"100%"}
          gap={32}
          justify="space-between"
        >
          <Flex
            w={"100%"}
            gap={24}
            direction={"column"}
            align="center"
            className={profileCSS.profileFlex}
          >
            <IconUserCircle color="#ED3C71" size={96} stroke={1} />
            <Stack gap={0}>
              <Text fz={32}>Hi Aditya !</Text>
              <Text fz={18} c={"#454C52"}>
                Tarang ID: xxx xxx
              </Text>
              {!isMobile && (
                <Divider
                  color="#9EA5AD"
                  size={"sm"}
                  w={"100%"}
                  orientation="horizontal"
                />
              )}
            </Stack>
          </Flex>
          <StarPaper pc={true} />

          <Button
            radius={0}
            fullWidth={!isMobile}
            size="xl"
            color="#F34141"
            fz={18}
            className={profileCSS.logoutButton}
            rightSection={<IconLogout size={25} stroke={1.5} />}
          >
            Log out
          </Button>
        </Stack>
      </Card>
      <StarPaper pc={false} />
    </>
  );
}
