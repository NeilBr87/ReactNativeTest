import { Pressable, Text, View } from "react-native";

export default function Mining(props) {

    
  const sellBTC = () => {
    const btcValue = props.btc * props.bitcoinPrice;
    props.setCash(parseFloat((props.cash + btcValue).toFixed(2)));
    props.setBTC(0);
  };

  const earnBTC = () => {
    props.setBTC(prev => prev + props.mineRate);
  };



    return (
    <View style={{ marginTop: 20, alignItems: 'center' }}>
                <Text style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginBottom: 20,
                  textAlign: 'center'
                }}>Mine Bitcoin</Text>

                <Pressable onPress={earnBTC}>
                  <Text style={{
                    fontSize: 14,
                    fontWeight: "bold",
                    backgroundColor: "#497147ff",
                    color: 'white',
                    width: 100,
                    textAlign: 'center',
                    paddingVertical: 20,
                    borderRadius: 5
                  }}>Mine</Text>
                </Pressable>

                <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 20 }}>Current Bitcoin holdings</Text>
                <Text style={{
                  marginTop: 10,
                  fontSize: 12,
                  fontWeight: "bold",
                  backgroundColor: "white",
                  width: 80,
                  textAlign: 'center',
                  paddingVertical: 12,
                  borderRadius: 5
                }}>{props.btc.toFixed(6)} BTC</Text>

                <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 10 }}>Current Bitcoin price</Text>
                <Text style={{
                  marginTop: 10,
                  fontSize: 12,
                  fontWeight: "bold",
                  backgroundColor: "white",
                  width: 80,
                  textAlign: 'center',
                  paddingVertical: 12,
                  borderRadius: 5
                }}>£{props.bitcoinPrice}</Text>

                <Pressable onPress={sellBTC}>
                  <Text style={{
                    marginTop: 20,
                    fontSize: 14,
                    fontWeight: "bold",
                    backgroundColor: "#DB3A34",
                    color: 'white',
                    width: 100,
                    textAlign: 'center',
                    paddingVertical: 20,
                    borderRadius: 5
                  }}>Sell BTC</Text>
                </Pressable>
              </View>
    )
}