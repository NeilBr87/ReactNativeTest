import { Text, View } from "react-native";


export default function Holdings(props) {

    return (
        <View style={{ alignItems: "center", padding: 20 }}>
        
            <Text>Google</Text>
            <Text>{props.googleHeld}</Text>
        </View>
    )
}