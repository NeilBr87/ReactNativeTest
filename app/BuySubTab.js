import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

export default function BuySubTab(props) {
  const [buyAmt, setBuyAmt] = useState(0);

  const isBuying = props.mode === 'buy';
  const maxAffordable = isBuying
    ? Math.floor(props.cash / props.value)
    : props.held;

  const confirmTransaction = () => {
    const total = buyAmt * props.value;

    if (buyAmt === 0) return;

    if (isBuying) {
      if (total > props.cash) return;
      props.setHeld(props.held + buyAmt);
      props.setCash(props.cash - total);
    } else {
      if (buyAmt > props.held) return;
      props.setHeld(props.held - buyAmt);
      props.setCash(props.cash + total);
    }

    setBuyAmt(0);
  };

  const addAmount = (amt) => {
    setBuyAmt((prev) => {
      const newAmt = prev + amt;
      return newAmt > maxAffordable ? maxAffordable : newAmt;
    });
  };

  return (
    <View style={{ alignItems: 'center', marginBottom: 20 }}>
      <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 6 }}>
        {isBuying ? 'Shares to Buy' : 'Shares to Sell'}
      </Text>

      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        {[
          { label: '0', value: 0 },
          { label: '+1', value: 1 },
          { label: '+10', value: 10 },
          { label: '+100', value: 100 },
          { label: 'MAX', value: maxAffordable - buyAmt }
        ].map((btn, i) => (
          <Pressable
            key={i}
            onPress={() => {
              if (btn.label === '0') setBuyAmt(0);
              else if (btn.label === 'MAX') setBuyAmt(maxAffordable);
              else addAmount(btn.value);
            }}
            style={{
              backgroundColor: '#ccc',
              padding: 6,
              marginHorizontal: 4,
              borderRadius: 4,
              minWidth: 45,
              alignItems: 'center',
            }}
          >
            <Text>{btn.label}</Text>
          </Pressable>
        ))}
      </View>

      <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 6 }}>
        {isBuying ? 'Total Cost' : 'Total Value'}: £{(buyAmt * props.value).toFixed(2)}
      </Text>

      {isBuying && props.cash < props.value && (
        <Text style={{ color: 'red', fontWeight: 'bold', marginBottom: 10 }}>
          Mine more crypto to buy this!
        </Text>
      )}

      {!isBuying && props.held === 0 && (
        <Text style={{ color: 'red', fontWeight: 'bold', marginBottom: 10 }}>
          You don’t have any to sell!
        </Text>
      )}

      <Pressable onPress={confirmTransaction}>
        <Text style={{
          backgroundColor: isBuying ? '#497147ff' : '#DB3A34',
          color: 'white',
          padding: 10,
          borderRadius: 5,
          textAlign: 'center',
          fontWeight: 'bold',
          minWidth: 120
        }}>
          Confirm {isBuying ? 'Buy' : 'Sell'}
        </Text>
      </Pressable>
    </View>
  );
}
