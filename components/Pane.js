import { useContext } from "react";
import { View } from "react-native";
import themeContext from "../themeContext";
import NBAText from "./NBAText";

const Pane = ({ children, title, style }) => {
  const theme = useContext(themeContext);

  return (
    <View
      style={[
        {
          // flex: 1,
          flexDirection: "column",
          paddingVertical: 20,
          paddingHorizontal: 10,
          margin: 10,
          borderRadius: 4,
          // backgroundColor: `${theme.color}11`,
        },
        style,
      ]}
    >
      {title ? (
        <NBAText style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}>{title}</NBAText>
      ) : null}
      {children}
    </View>
  );
};

export default Pane;
