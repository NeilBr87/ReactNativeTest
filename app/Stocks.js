import { Image, Pressable, Text, View } from "react-native";

export default function Stocks() {

 return (
    <View style={{ marginTop: 20 }}>
    <Text style={{
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20
    }}>Stocks Menu</Text>

    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      {/* Logos */}
      <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
        <Text style={{ marginBottom: 8, fontWeight: 'bold' }}>Stock</Text>
        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png' }} style={{ width: 50, height: 50, marginBottom: 10, borderRadius: 4, borderWidth: 1, backgroundColor: 'white' }} />
        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/1200px-Tesla_logo.png' }} style={{ width: 50, height: 50, marginBottom: 10, borderRadius: 4, borderWidth: 1, backgroundColor: 'white' }} />
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlFXu62z0NcJvVc9fSya3BTAOIvArBBGMLnw&s' }} style={{ width: 50, height: 50, marginBottom: 10, borderRadius: 4, borderWidth: 1, backgroundColor: 'white' }} />
        <Image source={{ uri: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.jpg' }} style={{ width: 50, height: 50, marginBottom: 10, borderRadius: 4, borderWidth: 1, backgroundColor: 'white' }} />
        <Image source={{ uri: 'https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg' }} style={{ width: 50, height: 50, marginBottom: 10, borderRadius: 4, borderWidth: 1, backgroundColor: 'white' }} />
      </View>

      {/* Prices */}
      <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
        <Text style={{ marginBottom: 8, fontWeight: 'bold' }}>Price</Text>
        <Text style={{ width: 50, height: 50, marginBottom: 10, textAlign: 'center', lineHeight: 50 }}>£5</Text>
        <Text style={{ width: 50, height: 50, marginBottom: 10, textAlign: 'center', lineHeight: 50 }}>£5</Text>
        <Text style={{ width: 50, height: 50, marginBottom: 10, textAlign: 'center', lineHeight: 50 }}>£5</Text>
        <Text style={{ width: 50, height: 50, marginBottom: 10, textAlign: 'center', lineHeight: 50 }}>£5</Text>
        <Text style={{ width: 50, height: 50, marginBottom: 10, textAlign: 'center', lineHeight: 50 }}>£5</Text>
      </View>

      {/* Buy Buttons */}
      <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
        <Text style={{ marginBottom: 8, fontWeight: 'bold' }}>Buy</Text>
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
        <Pressable onPress={() => console.log('Buy Amazon')}>
          <Text style={{ width: 50, height: 50, marginBottom: 10, backgroundColor: '#497147ff', color: 'white', textAlign: 'center', lineHeight: 50, borderRadius: 5}}>Buy</Text>
        </Pressable>
      </View>

      {/* Sell Buttons */}
      <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
        <Text style={{ marginBottom: 8, fontWeight: 'bold' }}>Sell</Text>
        <Pressable onPress={() => console.log('Sell Google')}>
          <Text style={{ width: 50, height: 50, marginBottom: 10, backgroundColor: '#DB3A34', color: 'white', textAlign: 'center', lineHeight: 50, borderRadius: 5}}>Sell</Text>
        </Pressable>
        <Pressable onPress={() => console.log('Sell Tesla')}>
          <Text style={{ width: 50, height: 50, marginBottom: 10, backgroundColor: '#DB3A34', color: 'white', textAlign: 'center', lineHeight: 50, borderRadius: 5}}>Sell</Text>
        </Pressable>
        <Pressable onPress={() => console.log('Sell Netflix')}>
          <Text style={{ width: 50, height: 50, marginBottom: 10, backgroundColor: '#DB3A34', color: 'white', textAlign: 'center', lineHeight: 50, borderRadius: 5}}>Sell</Text>
        </Pressable>
        <Pressable onPress={() => console.log('Sell Apple')}>
          <Text style={{ width: 50, height: 50, marginBottom: 10, backgroundColor: '#DB3A34', color: 'white', textAlign: 'center', lineHeight: 50, borderRadius: 5}}>Sell</Text>
        </Pressable>
        <Pressable onPress={() => console.log('Sell Amazon')}>
          <Text style={{ width: 50, height: 50, marginBottom: 10, backgroundColor: '#DB3A34', color: 'white', textAlign: 'center', lineHeight: 50, borderRadius: 5}}>Sell</Text>
        </Pressable>
      </View>
    </View>
  </View>


 )

}
