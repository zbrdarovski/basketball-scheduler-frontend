import { useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import themeContext from "../themeContext";

const NBACheckbox = ({value, onChange, style}) => {
    const theme = useContext(themeContext);
    

    return (
        <TouchableOpacity
            style={[
                {
                    width: 20,
                    height: 20,
                    padding: 4,
                    borderRadius: 4,
                    borderColor: theme.color,
                    borderWidth: 2,
                },
                style,
            ]}
            onPress={() => {onChange(value ? false : true)}}
        >
            <View
                style={{
                    flex: 1,
                    borderRadius: 2,
                    backgroundColor: (value ? theme.primary : null),
                }}
            ></View>
        </TouchableOpacity>
    );
}

export default NBACheckbox;
