import React, { useState } from 'react';
import { Pressable, Text, View } from "react-native";

export default function BuySubTab(props) {
  const [buyAmt, setBuyAmt] = useState(0);
  const totalCost = (buyAmt * props.googleValue).toFixed(2);

  function changeBuyAmt(val) {
    const googleValue = props.googleValue;
    const cash = props.cash;

    if (googleValue <= 0) return;

    const sharesPerPound = 1 / googleValue;
    const sharesPerTen = 10 / googleValue;
    const maxBuyable = cash / googleValue;

    setBuyAmt(prev => {
      if (val === "zero") return 0;

      if (val === "plusone") {
        const newAmt = prev + sharesPerPound;
        return newAmt <= maxBuyable ? +newAmt.toFixed(4) : +maxBuyable.toFixed(4);
      }

      if (val === "plusten") {
        const newAmt = prev + sharesPerTen;
        return newAmt <= maxBuyable ? +newAmt.toFixed(4) : +maxBuyable.toFixed(4);
      }

      if (val === "max") {
        return +maxBuyable.toFixed(4);
      }

      return prev;
    });
  }

function confirmBuy() {
  const totalCostNum = buyAmt * props.googleValue;

  // Prevent going into negative cash
  if (totalCostNum > props.cash || buyAmt === 0) return;

  props.setGoogleHeld(props.googleHeld + buyAmt);
  props.setCash(props.cash - totalCostNum);
}

  return (
  <View style={{ marginTop: 10 }}>
    {/* Row with buyAmt and totalCost */}
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginHorizontal: 5 }}>
        <Text style={{fontSize: 12, fontWeight: 'bold', marginBottom: 6}}>Buying shares</Text>
        <Text style={{ backgroundColor: 'white', width: 140, textAlign: 'center', paddingVertical: 6, borderRadius: 10, borderWidth: 1, borderColor: 'black' }}>
          {buyAmt}
        </Text>
      </View>

      <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginHorizontal: 5 }}>
                <Text style={{fontSize: 12, fontWeight: 'bold', marginBottom: 6}}>Total Cost</Text>

        <Text style={{ backgroundColor: 'white', width: 140, textAlign: 'center', paddingVertical: 6, borderRadius: 10, borderWidth: 1, borderColor: 'black' }}>
          £{totalCost}
        </Text>
      </View>
    </View>

    {/* Row with buttons */}
    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
      <Pressable onPress={() => changeBuyAmt("zero")}>
        <Text style={buttonStyle}>£0</Text>
      </Pressable>

      <Pressable onPress={() => changeBuyAmt("plusone")}>
        <Text style={buttonStyle}>+ £1</Text>
      </Pressable>

      <Pressable onPress={() => changeBuyAmt("plusten")}>
        <Text style={buttonStyle}>+ £10</Text>
      </Pressable>

      <Pressable onPress={() => changeBuyAmt("max")}>
        <Text style={buttonStyle}>Max</Text>
      </Pressable>
    </View>

    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
        <Pressable onPress={confirmBuy} style={{flex: 1}}>
        <Text style={{
            flex: 1,
            height: 50,
            marginHorizontal: 5,
            backgroundColor: '#497147ff',
            color: 'white',
            textAlign: 'center',
            lineHeight: 50,
            borderRadius: 5,
            fontWeight: 'bold',
            marginBottom: 30
        }}>Confirm</Text>
        </Pressable>
    </View>
  </View>
);
}

const buttonStyle = {
  width: 70,
  height: 50,
  marginHorizontal: 5,
  backgroundColor: '#497147ff',
  color: 'white',
  textAlign: 'center',
  lineHeight: 50,
  borderRadius: 5,
  fontWeight: 'bold'
};
