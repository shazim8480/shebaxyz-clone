import React from "react";
import { Input, Icon, Stack } from "native-base";

import { AntDesign } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <Stack space={4} w="100%" alignItems="center">
      <Input
        w={{
          base: "100%",
        }}
        variant="outline"
        height="55%"
        size="xl"
        rounded="md"
        InputLeftElement={
          <Icon
            as={<AntDesign name="search1" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
        placeholder="Search Services"
      />
    </Stack>
  );
};
export default SearchBar;
