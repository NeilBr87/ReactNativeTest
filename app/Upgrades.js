import { Pressable, Text, View } from "react-native";
export default function Upgrades() {

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
        <Pressable onPress={() => console.log('Buy Google')}>
          <Text style={{ width: 50, height: 50, marginBottom: 10, backgroundColor: '#497147ff', color: 'white', textAlign: 'center', lineHeight: 50, borderRadius: 5}}>Buy</Text>
        </Pressable>
        <Pressable onPress={() => console.log('Buy Tesla')}>
          <Text style={{ width: 50, height: 50, marginBottom: 10, backgroundColor: '#497147ff', color: 'white', textAlign: 'center', lineHeight: 50, borderRadius: 5}}>Buy</Text>
        </Pressable>
        <Pressable onPress={() => console.log('Buy Netflix')}>
          <Text style={{ width: 50, height: 50, marginBottom: 10, backgroundColor: '#497147ff', color: 'white', textAlign: 'center', lineHeight: 50, borderRadius: 5}}>Buy</Text>
        </Pressable>
        <Pressable onPress={() => console.log('Buy Apple')}>
          <Text style={{ width: 50, height: 50, marginBottom: 10, backgroundColor: '#497147ff', color: 'white', textAlign: 'center', lineHeight: 50, borderRadius: 5}}>Buy</Text>
        </Pressable>
      </View>
       </View>
        </View>
    )
}