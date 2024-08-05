import { ListItem } from "@siteed/design-system";
import { getLogger } from "@siteed/react-native-logger";
import { useRouter } from "expo-router";
import React, { useEffect, useMemo } from "react";
import { FlatList, StyleSheet } from "react-native";

const getStyles = () => {
  return StyleSheet.create({
    container: {},
  });
};

const links = [
  {
    label: "Accordion",
    subLabel: "Explore Accordion Component",
    path: "/components/try-accordion",
  },
  {
    label: "DynInput",
    subLabel: "Dynamic Input Component",
    path: "/components/try-dyn-input",
  },
  {
    label: "RefreshControl",
    subLabel: "Explore RefreshControl Components",
    path: "/components/try-refresh-control",
  },
  {
    label: "Toasts",
    subLabel: "Explore Toast Components",
    path: "/components/try-toasts",
  },
];

const logger = getLogger("TryItScreen");

export const TryItScreen = () => {
  const _styles = useMemo(() => getStyles(), []);
  const router = useRouter();

  useEffect(() => {
    logger.info("TryItScreen mounted");
  }, []);

  return (
    <FlatList
      data={links}
      renderItem={({ item }) => (
        <ListItem
          label={item.label}
          subLabel={item.subLabel}
          labelStyle={{}}
          onPress={() => {
            router.navigate(`${item.path}`);
          }}
        />
      )}
    />
  );
};

export default TryItScreen;
