import React, { useState } from 'react';
import { Pressable, Text, View } from "react-native";

export default function BuySubTab(props) {
  const [buyAmt, setBuyAmt] = useState(0);

  const totalCost = (buyAmt * props.googleValue).toFixed(2);
  const maxBuyable = Math.floor(props.cash / props.googleValue); // max whole shares

  function changeBuyAmt(action) {
    setBuyAmt(prev => {
      if (action === "zero") return 0;
      if (action === "plusone") {
        const newAmt = prev + 1;
        return newAmt <= maxBuyable ? newAmt : maxBuyable;
      }
      if (action === "plusten") {
        const newAmt = prev + 10;
        return newAmt <= maxBuyable ? newAmt : maxBuyable;
      }
      if (action === "max") {
        return maxBuyable;
      }
      return prev;
    });
  }

  function confirmBuy() {
    const totalCostNum = buyAmt * props.googleValue;

    // Prevent overspending or empty purchase
    if (buyAmt === 0 || totalCostNum > props.cash) return;

    props.setGoogleHeld(props.googleHeld + buyAmt);
    props.setCash(props.cash - totalCostNum);
    setBuyAmt(0); // Reset after purchase
  }

  return (
    <View style={{ marginTop: 10 }}>
      {/* Shares and Cost */}
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ alignItems: 'center', marginHorizontal: 5 }}>
          <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 6 }}>Shares to Buy</Text>
          <Text style={displayBox}>{buyAmt}</Text>
        </View>

        <View style={{ alignItems: 'center', marginHorizontal: 5 }}>
          <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 6 }}>Total Cost</Text>
          <Text style={displayBox}>£{totalCost}</Text>
        </View>
      </View>

    
      {props.cash < props.googleValue && <View>
        <Text style={{textAlign: 'center', marginTop: 10, marginBottom: 10, fontWeight: 'bold', color: 'red'}}>Mine more cryto to buy this!</Text>
      </View>}

      {/* Buy Buttons */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
        <Pressable onPress={() => changeBuyAmt("zero")}>
          <Text style={buttonStyle}>Clear</Text>
        </Pressable>
        <Pressable onPress={() => changeBuyAmt("plusone")}>
          <Text style={buttonStyle}>+1</Text>
        </Pressable>
        <Pressable onPress={() => changeBuyAmt("plusten")}>
          <Text style={buttonStyle}>+10</Text>
        </Pressable>
        <Pressable onPress={() => changeBuyAmt("max")}>
          <Text style={buttonStyle}>Max</Text>
        </Pressable>
      </View>

      {/* Confirm Button */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
        <Pressable onPress={confirmBuy} style={{ flex: 1 }}>
          <Text style={confirmButton}>Confirm</Text>
        </Pressable>
      </View>
    </View>
  );
}

const displayBox = {
  backgroundColor: 'white',
  width: 140,
  textAlign: 'center',
  paddingVertical: 6,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: 'black'
};

const buttonStyle = {
  width: 60,
  height: 50,
  marginHorizontal: 5,
  backgroundColor: '#497147ff',
  color: 'white',
  textAlign: 'center',
  lineHeight: 50,
  borderRadius: 5,
  fontWeight: 'bold'
};

const confirmButton = {
  flex: 1,
  height: 50,
  marginHorizontal: 15,
  backgroundColor: '#497147ff',
  color: 'white',
  textAlign: 'center',
  lineHeight: 50,
  borderRadius: 5,
  fontWeight: 'bold',
  marginBottom: 30
};
