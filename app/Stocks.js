import { useEffect, useRef, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import BuySubTab from './BuySubTab'; // Make sure this path is correct

export default function Stocks(props) {
  const [buyExpand, setBuyExpand] = useState('');
  const [sellExpand, setSellExpand] = useState('');

  const [priceColor, setPriceColor] = useState({}); // key: stock.id, value: color
const prevValues = useRef({}); // keep previous values per stock.id

useEffect(() => {
  stocks.forEach(stock => {
    const prev = prevValues.current[stock.id];
    if (prev === undefined) {
      // first render, just set initial
      prevValues.current[stock.id] = stock.value;
      return;
    }
    if (prev !== stock.value) {
      // value changed
      setPriceColor(prevColors => ({
        ...prevColors,
        [stock.id]: stock.value > prev ? 'green' : 'red',
      }));

      // reset after 1 second
      setTimeout(() => {
        setPriceColor(prevColors => ({
          ...prevColors,
          [stock.id]: 'black',
        }));
      }, 1000);

      prevValues.current[stock.id] = stock.value;
    }
  });
}, [props.googleValue, props.teslaValue, props.bhValue, props.appleValue, props.amazonValue]);

  const handleBuyExpand = (stockId) => {
    setBuyExpand(prev => prev === stockId ? '' : stockId);
    setSellExpand('');
  };

  const handleSellExpand = (stockId) => {
    setSellExpand(prev => prev === stockId ? '' : stockId);
    setBuyExpand('');
  };

  const stocks = [
    {
      id: 'google',
      label: 'Google',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png',
      value: props.googleValue,
      setValue: props.setGoogleValue,
      held: props.googleHeld,
      setHeld: props.setGoogleHeld
    },
    {
      id: 'tesla',
      label: 'Tesla',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/1200px-Tesla_logo.png',
      value: props.teslaValue,
      setValue: props.setTeslaValue,
      held: props.teslaHeld,
      setHeld: props.setTeslaHeld
    },
    {
      id: 'bh',
      label: 'BH',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlFXu62z0NcJvVc9fSya3BTAOIvArBBGMLnw&s',
      value: props.bhValue,
      setValue: props.setBhValue,
      held: props.bhHeld,
      setHeld: props.setBhHeld
    },
    {
      id: 'apple',
      label: 'Apple',
      image: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.jpg',
      value: props.appleValue,
      setValue: props.setAppleValue,
      held: props.appleHeld,
      setHeld: props.setAppleHeld
    },
    {
      id: 'amazon',
      label: 'Amazon',
      image: 'https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg',
      value: props.amazonValue,
      setValue: props.setAmazonValue,
      held: props.amazonHeld,
      setHeld: props.setAmazonHeld
    }
  ];

  return (
    <View style={{ paddingBottom: 5, paddingTop: 25 }}>

      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18, marginBottom: 10}}>Buy and sell</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
            <Text style={{ width: 50, height: 50, marginBottom: 6, textAlign: 'center', lineHeight: 50, fontWeight: 'bold', fontSize: 15}}>Stock</Text>
        </View>
        <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
            <Text style={{ width: 50, height: 50, marginBottom: 6, textAlign: 'center', lineHeight: 50, fontWeight: 'bold', fontSize: 15 }}>Price</Text>
        </View>
        <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
        <Pressable onPress={() => console.log('Buy Google')}>
            <Text style={{ width: 50, height: 50, marginBottom: 6, textAlign: 'center', lineHeight: 50, fontWeight: 'bold', fontSize: 15 }}>Buy</Text>
        </Pressable>
        </View>
        <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
            <Pressable onPress={() => console.log('Sell Google')}>
            <Text style={{ width: 50, height: 50, marginBottom: 6, textAlign: 'center', lineHeight: 50, fontWeight: 'bold', fontSize: 15 }}>Sell</Text>
            </Pressable>
        </View>
    </View>


      {stocks.map(stock => (
        <View key={stock.id}>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
              <Image
                source={{ uri: stock.image }}
                style={{
                  width: 50,
                  height: 50,
                  marginBottom: 10,
                  borderRadius: 4,
                  borderWidth: 1,
                  backgroundColor: 'white',
                }}
              />
            </View>

        <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
        <Text
            style={{
            width: 50,
            height: 50,
            marginBottom: 10,
            textAlign: 'center',
            lineHeight: 50,
            color: priceColor[stock.id] || 'black',  // <-- add this
            }}
        >
            £{stock.value}
        </Text>
        </View>

            <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
              <Pressable onPress={() => handleBuyExpand(stock.id)}>
                <Text style={{ width: 50, height: 50, marginBottom: 10, backgroundColor: '#497147ff', color: 'white', textAlign: 'center', lineHeight: 50, borderRadius: 5 }}>
                  Buy
                </Text>
              </Pressable>
            </View>

            <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
              <Pressable onPress={() => handleSellExpand(stock.id)}>
                <Text style={{ width: 50, height: 50, marginBottom: 10, backgroundColor: '#DB3A34', color: 'white', textAlign: 'center', lineHeight: 50, borderRadius: 5 }}>
                  Sell
                </Text>
              </Pressable>
            </View>
          </View>

          {buyExpand === stock.id && (
            <BuySubTab
              mode="buy"
              stock={stock.label}
              value={stock.value}
              setValue={stock.setValue}
              held={stock.held}
              setHeld={stock.setHeld}
              cash={props.cash}
              setCash={props.setCash}
            />
          )}

          {sellExpand === stock.id && (
            <BuySubTab
              mode="sell"
              stock={stock.label}
              value={stock.value}
              setValue={stock.setValue}
              held={stock.held}
              setHeld={stock.setHeld}
              cash={props.cash}
              setCash={props.setCash}
            />
          )}
        </View>
      ))}
    </View>
  );
}
