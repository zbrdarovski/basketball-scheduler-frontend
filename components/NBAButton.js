import { StyleSheet, Text, TouchableOpacity } from "react-native";
import NBAText from "./NBAText";

export const ButtonTypes = {
    NORMAL: "normal",
    PRIMARY: "primary",
    DISABLED: "disabled",
};

const NBAButton = ({title, type, onPress, style}) => {
    let fg = "#000000";
    let bg = "#FFFFFF";

    switch(type) {
        case ButtonTypes.PRIMARY:
            fg = "#FFFFFF";
            bg = "#142FE4";
            break;
        case ButtonTypes.DISABLED:
            fg = "#000000";
            bg = "#BEBBBB";
            break;
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                {
                    borderWidth: 2,
                    borderColor: "#142FE4",
                    borderRadius: 4,
                    backgroundColor: bg,
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                },
                style,
            ]}
        >
            <NBAText style={{
                color: fg,
                fontSize: 20,
                textAlign: "center",
            }}>
                {title}
            </NBAText>
        </TouchableOpacity>
    );
}

export default NBAButton;
