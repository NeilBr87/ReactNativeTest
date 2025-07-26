import { Pressable, Text, View } from "react-native";
export default function Upgrades(props) {

    function buyUpgrade1() {
        if (props.cash > 1000) {
            props.setUpgrade1Purchased(true)
            props.setMineRate(props.mineRate * 5)
            props.setCash(props.cash - 1000)
        };
    }

    function buyUpgrade2() {
        if (props.cash > 5000) {
            props.setUpgrade2Purchased(true)
            props.setMineRate(props.mineRate * 5)
            props.setCash(props.cash - 5000)
        };
    }

    return (
        <View style={{ marginTop: 20 }}>
            <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 20
            }}>Upgrades Menu</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

      <View style={{ marginHorizontal: 10 }}>
        <View style={{ height: 50, marginBottom: 10 }}>
            <Text style={{ textAlign: 'left', fontWeight: 'bold'}}>CPU upgrade - Level 1</Text>
            <Text style={{ textAlign: 'left', marginBottom: 20}}>2x mining speed</Text>
        </View>
        <View style={{ height: 50, marginBottom: 10 }}>
            <Text style={{ textAlign: 'left', fontWeight: 'bold'}}>CPU upgrade - Level 2</Text>
            <Text style={{ textAlign: 'left', marginBottom: 20}}>5x mining speed</Text>
        </View>

        <View style={{ height: 50, marginBottom: 10 }}>
            <Text style={{ textAlign: 'left', fontWeight: 'bold'}}>Remote desktop</Text>
            <Text style={{ textAlign: 'left', marginBottom: 20}}>Passive mining</Text>
        </View>

        <View style={{ height: 50, marginBottom: 10 }}>
            <Text style={{ textAlign: 'left', fontWeight: 'bold'}}>Casino membership</Text>
            <Text style={{ textAlign: 'left', marginBottom: 20}}>Unlocks gambling</Text>
        </View>

      </View>

      {/* Buy Buttons */}
      <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
                    {!props.upgrade1purchased ? (
            <Pressable onPress={buyUpgrade1}>
                <Text style={{
                width: 50,
                height: 50,
                marginBottom: 10,
                backgroundColor: '#497147ff',
                color: 'white',
                textAlign: 'center',
                lineHeight: 50,
                borderRadius: 5
                }}>
                £1K
                </Text>
            </Pressable>
            ) : <Pressable onPress={buyUpgrade1}>
                <Text style={{
                width: 50,
                height: 50,
                marginBottom: 10,
                backgroundColor: '#a32927ff',
                color: 'white',
                textAlign: 'center',
                lineHeight: 50,
                borderRadius: 5
                }}>
                Active
                </Text>
            </Pressable>}
         {!props.upgrade2purchased ? (
            <Pressable onPress={buyUpgrade2}>
                <Text style={{
                width: 50,
                height: 50,
                marginBottom: 10,
                backgroundColor: '#497147ff',
                color: 'white',
                textAlign: 'center',
                lineHeight: 50,
                borderRadius: 5
                }}>
                £5K
                </Text>
            </Pressable>
            ) : <Pressable onPress={buyUpgrade1}>
                <Text style={{
                width: 50,
                height: 50,
                marginBottom: 10,
                backgroundColor: '#a32927ff',
                color: 'white',
                textAlign: 'center',
                lineHeight: 50,
                borderRadius: 5
                }}>
                Active
                </Text>
            </Pressable>}
        <Pressable onPress={() => console.log('Buy Netflix')}>
          <Text style={{ width: 50, height: 50, marginBottom: 10, backgroundColor: '#497147ff', color: 'white', textAlign: 'center', lineHeight: 50, borderRadius: 5}}>£10K</Text>
        </Pressable>
        <Pressable onPress={() => console.log('Buy Apple')}>
          <Text style={{ width: 50, height: 50, marginBottom: 10, backgroundColor: '#497147ff', color: 'white', textAlign: 'center', lineHeight: 50, borderRadius: 5}}>£20K</Text>
        </Pressable>
      </View>
       </View>
        </View>
    )
}