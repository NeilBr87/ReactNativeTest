import { StyleSheet, Text, View } from "react-native";

export default function Holdings(props) {
  const holdings = [
    { name: "Google", value: props.googleHeld },
    { name: "Tesla", value: props.teslaHeld },
    { name: "Berkshire Hathaway", value: props.bhHeld },
    { name: "Apple", value: props.appleHeld },
    { name: "Amazon", value: props.amazonHeld },
  ];

  return (
    <View style={styles.container}>
      {holdings.map((stock, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.stockName}>{stock.name}</Text>
          <Text style={styles.stockValue}>{stock.value}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginVertical: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 50,
    elevation: 2, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  stockName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  stockValue: {
    fontSize: 16,
    fontWeight: "500",
    backgroundColor: "#1a73e8",
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10
  },
});
