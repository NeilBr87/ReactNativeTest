import { useState } from 'react';
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [cash, setCash] = useState(0);

  function onPressLearnMore() {
    setCash(cash + 1);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={onPressLearnMore}
        style={{
          backgroundColor: "goldenrod",

          width: "100px",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",   // Rounded corners here
        }}
        accessibilityLabel="Learn more about this purple button"
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Click</Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 20, fontSize: 20 }}>{cash}</Text>
    </View>
  );
}
