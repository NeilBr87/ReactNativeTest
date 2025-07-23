import { useState } from 'react';
import { Image, Pressable, Text, View } from "react-native";
import BuySubTab from './BuySubTab';
export default function Stocks(props) {

    const [buyExpand, setBuyExpand] = useState("")
    
function setStockBuy(stockItem) {
    setBuyExpand(prev => prev === stockItem ? "" : stockItem);
}

 return (
    <View style={{ marginTop: 20 }}>

    <Text style={{
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20
    }}>Stocks Menu</Text>

    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
            <Text style={{ width: 50, height: 50, marginBottom: 10, textAlign: 'center', lineHeight: 50, fontWeight: 'bold', fontSize: 15}}>Stock</Text>
        </View>
        <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
            <Text style={{ width: 50, height: 50, marginBottom: 10, textAlign: 'center', lineHeight: 50, fontWeight: 'bold', fontSize: 15 }}>Price</Text>
        </View>
        <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
        <Pressable onPress={() => console.log('Buy Google')}>
            <Text style={{ width: 50, height: 50, marginBottom: 10, textAlign: 'center', lineHeight: 50, fontWeight: 'bold', fontSize: 15 }}>Buy</Text>
        </Pressable>
        </View>
        <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
            <Pressable onPress={() => console.log('Sell Google')}>
            <Text style={{ width: 50, height: 50, marginBottom: 10, textAlign: 'center', lineHeight: 50, fontWeight: 'bold', fontSize: 15 }}>Sell</Text>
            </Pressable>
        </View>
    </View>


    {/* GOOGLE  */}
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png' }} style={{ width: 50, height: 50, marginBottom: 10, borderRadius: 4, borderWidth: 1, backgroundColor: 'white' }} />
        </View>
        <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
            <Text style={{ width: 50, height: 50, marginBottom: 10, textAlign: 'center', lineHeight: 50 }}>£{props.googleValue}</Text>
        </View>
        <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
        <Pressable  onPress={() => setStockBuy("google")}>
          <Text style={{ width: 50, height: 50, marginBottom: 10, backgroundColor: '#497147ff', color: 'white', textAlign: 'center', lineHeight: 50, borderRadius: 5}}>Buy</Text>
        </Pressable>
        </View>
        <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
            <Pressable onPress={() => console.log('Sell Google')}>
            <Text style={{ width: 50, height: 50, marginBottom: 10, backgroundColor: '#DB3A34', color: 'white', textAlign: 'center', lineHeight: 50, borderRadius: 5}}>Sell</Text>
            </Pressable>
        </View>
    </View>
    
    {buyExpand === "google" && <BuySubTab  googleHeld={props.googleHeld} setGoogleHeld={props.setGoogleHeld} googleValue={props.googleValue} setGoogleValue={props.setGoogleValue} cash={props.cash} setCash={props.setCash} />}

    {/* TESLA */}

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/1200px-Tesla_logo.png' }} style={{ width: 50, height: 50, marginBottom: 10, borderRadius: 4, borderWidth: 1, backgroundColor: 'white' }} />
        </View>
        <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
            <Text style={{ width: 50, height: 50, marginBottom: 10, textAlign: 'center', lineHeight: 50 }}>£{props.teslaValue}</Text>
        </View>
        <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
        <Pressable  onPress={() => setStockBuy("google")}>
          <Text style={{ width: 50, height: 50, marginBottom: 10, backgroundColor: '#497147ff', color: 'white', textAlign: 'center', lineHeight: 50, borderRadius: 5}}>Buy</Text>
        </Pressable>
        </View>
        <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
            <Pressable onPress={() => console.log('Sell Google')}>
            <Text style={{ width: 50, height: 50, marginBottom: 10, backgroundColor: '#DB3A34', color: 'white', textAlign: 'center', lineHeight: 50, borderRadius: 5}}>Sell</Text>
            </Pressable>
        </View>
    </View>

    {/* BH */}

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlFXu62z0NcJvVc9fSya3BTAOIvArBBGMLnw&s' }} style={{ width: 50, height: 50, marginBottom: 10, borderRadius: 4, borderWidth: 1, backgroundColor: 'white' }} />
        </View>
        <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
            <Text style={{ width: 50, height: 50, marginBottom: 10, textAlign: 'center', lineHeight: 50 }}>£{props.bhValue}</Text>
        </View>
        <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
        <Pressable  onPress={() => setStockBuy("google")}>
          <Text style={{ width: 50, height: 50, marginBottom: 10, backgroundColor: '#497147ff', color: 'white', textAlign: 'center', lineHeight: 50, borderRadius: 5}}>Buy</Text>
        </Pressable>
        </View>
        <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
            <Pressable onPress={() => console.log('Sell Google')}>
            <Text style={{ width: 50, height: 50, marginBottom: 10, backgroundColor: '#DB3A34', color: 'white', textAlign: 'center', lineHeight: 50, borderRadius: 5}}>Sell</Text>
            </Pressable>
        </View>
    </View>

    {/* APPLE */}

    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
            <Image source={{ uri: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.jpg' }} style={{ width: 50, height: 50, marginBottom: 10, borderRadius: 4, borderWidth: 1, backgroundColor: 'white' }} />
        </View>
        <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
            <Text style={{ width: 50, height: 50, marginBottom: 10, textAlign: 'center', lineHeight: 50 }}>£{props.appleValue}</Text>
        </View>
        <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
        <Pressable  onPress={() => setStockBuy("google")}>
          <Text style={{ width: 50, height: 50, marginBottom: 10, backgroundColor: '#497147ff', color: 'white', textAlign: 'center', lineHeight: 50, borderRadius: 5}}>Buy</Text>
        </Pressable>
        </View>
        <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
            <Pressable onPress={() => console.log('Sell Google')}>
            <Text style={{ width: 50, height: 50, marginBottom: 10, backgroundColor: '#DB3A34', color: 'white', textAlign: 'center', lineHeight: 50, borderRadius: 5}}>Sell</Text>
            </Pressable>
        </View>
    </View>


    {/* AMAZON */}

    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
            <Image source={{ uri: 'https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg' }} style={{ width: 50, height: 50, marginBottom: 10, borderRadius: 4, borderWidth: 1, backgroundColor: 'white' }} />
        </View>
        <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
            <Text style={{ width: 50, height: 50, marginBottom: 10, textAlign: 'center', lineHeight: 50 }}>£{props.amazonValue}</Text>
        </View>
        <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
        <Pressable  onPress={() => setStockBuy("google")}>
          <Text style={{ width: 50, height: 50, marginBottom: 10, backgroundColor: '#497147ff', color: 'white', textAlign: 'center', lineHeight: 50, borderRadius: 5}}>Buy</Text>
        </Pressable>
        </View>
        <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
            <Pressable onPress={() => console.log('Sell Google')}>
            <Text style={{ width: 50, height: 50, marginBottom: 10, backgroundColor: '#DB3A34', color: 'white', textAlign: 'center', lineHeight: 50, borderRadius: 5}}>Sell</Text>
            </Pressable>
        </View>
    </View>



  </View>


 )

}
