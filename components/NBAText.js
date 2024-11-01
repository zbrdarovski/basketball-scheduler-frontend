import { useContext } from "react";
import { Text } from "react-native";
import themeContext from "../themeContext";

const NBAText = ({children, style}) => {
    const theme = useContext(themeContext);

    return (
        <Text style={[
            {
                color: theme.color,
            },
            style,
        ]}>
            {children}
        </Text>
    );
}

export default NBAText;
