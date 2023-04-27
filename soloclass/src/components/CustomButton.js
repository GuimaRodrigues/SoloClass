import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import ButtonStyles from "../styles/ButtonStyles";

export default function CustomButton(props) {

    const navigator = useNavigation();

    return (
        <TouchableOpacity
            style={ButtonStyles.botao}
            onPress={() => navigator.navigate(props.route)}
        >
            <Text style={ButtonStyles.btnText}>{props.title}</Text>
        </TouchableOpacity>
    );

}