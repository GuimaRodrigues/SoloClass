import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import ButtonStyles from "../styles/ButtonStyles";

export default function TextButton(props) {

    const navigator = useNavigation();

    return (
        <TouchableOpacity
            style={ButtonStyles.tButton}
            onPress={() => navigator.navigate(props.route)}
        >
            <Text style={ButtonStyles.tButtonText}>{props.title}</Text>
        </TouchableOpacity>
    );

}