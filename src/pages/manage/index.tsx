import { Box, Center, Flex, HStack, useColorModeValue } from "@hope-ui/solid";
import { SwitchColorMode } from "~/components/SwitchColorMode";
import { SwitchLnaguage } from "~/components/SwitchLanguage";
import { useT } from "~/hooks/useT";
import { useTitle } from "~/hooks/useTitle";
import { user } from "~/store/user";
import { Header } from "./Header";
import { SideMenu } from "./SideMenu";
import { side_menu_items } from "./sidemenu_items";
import { UserMethods } from "~/types/user";
import { useRouter } from "~/hooks/useRouter";

const Manage = () => {
  const t = useT();
  useTitle(() => t("manage.title"));
  const { to } = useRouter();
  if (UserMethods.is_guest(user()!)) {
    to("/@login");
  }
  return (
    <Box>
      <Header />
      <Flex h="calc(100vh - 64px)">
        <Box
          display={{ "@initial": "none", "@sm": "block" }}
          w="$56"
          h="$full"
          shadow="$md"
          bgColor={useColorModeValue("", "$whiteAlpha3")()}
        >
          <SideMenu items={side_menu_items} />
          <Center>
            <HStack spacing="$4" p="$2" color="$neutral11">
              <SwitchLnaguage />
              <SwitchColorMode />
            </HStack>
          </Center>
        </Box>
      </Flex>
    </Box>
  );
};

export default Manage;
