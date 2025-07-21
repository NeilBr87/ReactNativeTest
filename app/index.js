import { useEffect, useState } from 'react';
import { Text, View } from "react-native";

export default function Index() {
  const [cash, setCash] = useState(0);
  const [btc, setBTC] = useState(0);
  const [bitcoinPrice, setBitcoinPrice] = useState(87414.5)
  const [bitcoinValue, setBitcoinValue] = useState(0)
  const [openTab, setOpenTab] = useState("")


  
  useEffect(() => {
    const interval = setInterval(() => {
      // Random number between -0.5 and 0.5
      const change = (Math.random() - 0.5) * 2;
      setBitcoinPrice(prevPrice => parseFloat((prevPrice + change).toFixed(2)));
    }, 2000); // every 2 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

function sellBTC() {
  const newBitcoinValue = btc * bitcoinPrice;
  setBitcoinValue(newBitcoinValue);

  const updatedCash = parseFloat((cash + newBitcoinValue).toFixed(2));
  setCash(updatedCash);

  setBTC(0);
}


  function earnBTC() {
    setBTC(btc + 0.000011);
  }

  function openCrypto() {
    if (openTab === "crypto") {
      setOpenTab("")
    }
    else {
    setOpenTab("crypto")
    }
  }

  function openCommodities() {
    if (openTab === "commodities") {
      setOpenTab("")
    }
    else {
    setOpenTab("commodities")
    }
  }

  function openUpgrades() {
    setOpenTab("upgrades")
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F3EFEF"
      }}
    >
      <Text style={{
        color: "black",
        fontWeight: "bold",
        fontSize: 40,
        marginBottom: 20
      }}>Trading Day</Text>

      <Text>Current funds</Text>
      <Text style={{fontSize: 24, fontWeight: "bold", backgroundColor: "white", width: 100, textAlign: 'center', paddingTop: 10, paddingBottom: 10, borderRadius: 5}}>£{cash}</Text>

      <Text onPress={openCrypto}
        style={{ 
        marginTop: 20, 
        fontSize: 24, 
        fontWeight: "bold", 
        backgroundColor: "#004777", 
        color: 'white',
        width: 300, 
        textAlign: 'center', 
        paddingTop: 20, 
        paddingBottom: 20, 
        borderRadius: 5}}
        >Crypto Mining</Text>

      
        {openTab === "crypto" && (
  <View>
    <Text style={{
      fontSize: 20,
      marginTop: 10,
      fontWeight: 'bold',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      marginBottom: 20
    }}>
      Mine Bitcoin
    </Text>

    <View style={{ alignItems: 'center' }}>
  <Text
    onPress={earnBTC}
    style={{ 
      fontSize: 14, 
      fontWeight: "bold", 
      backgroundColor: "#497147ff",
      color:'white',
      width: 100, 
      textAlign: 'center', 
      paddingTop: 20, 
      paddingBottom: 20, 
      borderRadius: 5
    }}
  >
    Mine
  </Text>
</View>

        <Text style={{textAlign: 'center', fontWeight: 'bold', marginTop: 10}}>Current Bitcoin holdings</Text>
        
        <View style={{ alignItems: 'center' }}>
  <Text
    style={{ 
      marginTop: 10,
      fontSize: 12, 
      fontWeight: "bold", 
      backgroundColor: "white",
      width: 80, 
      textAlign: 'center', 
      paddingTop: 12, 
      paddingBottom: 12, 
      borderRadius: 5
    }}
  >
    {btc} BTC
  </Text>
  
</View>

        <Text style={{textAlign: 'center', fontWeight: 'bold', marginTop: 10}}>Current Bitcoin price</Text>

       <View style={{ alignItems: 'center' }}> 
  <Text
    style={{ 
      marginTop: 10,
      fontSize: 12, 
      fontWeight: "bold", 
      backgroundColor: "white",
      width: 80, 
      textAlign: 'center', 
      paddingTop: 12, 
      paddingBottom: 12, 
      borderRadius: 5
    }}
  >
    £{bitcoinPrice}
  </Text>
  
</View>
    <View style={{ alignItems: 'center' }}>
  <Text
    onPress={sellBTC}
    style={{ 
      marginTop: 20,
      fontSize: 14, 
      fontWeight: "bold", 
      backgroundColor: "#DB3A34",
      color:'white',
      width: 100, 
      textAlign: 'center', 
      paddingTop: 20, 
      paddingBottom: 20, 
      borderRadius: 5
    }}
  >
    Sell BTC
  </Text>
</View>

      </View>



)}

    
      <Text onPress={openCommodities}
        style={{ 
        marginTop: 20, 
        fontSize: 24, 
        fontWeight: "bold", 
        backgroundColor: "#004777",
        color: "white", 
        width: 300, 
        textAlign: 'center', 
        paddingTop: 20, 
        paddingBottom: 20, 
        borderRadius: 5}}
        >Stocks</Text>

        {openTab === "commodities" && (
  <View>
    <Text style={{
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20
    }}>
      Commodities exchange
    </Text>

    {/* Centered row of labeled items */}
    <View style={{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <View style={{ alignItems: 'center', marginHorizontal: 15 }}>
        <Text style={{ color: 'white', marginBottom: 4 }}>Commodity</Text>
        <Text style={{ color: 'white' }}>Gold</Text>
        <Text style={{ color: 'white' }}>Silver</Text>
        <Text style={{ color: 'white' }}>Leather</Text>
        <Text style={{ color: 'white' }}>Hops</Text>
        <Text style={{ color: 'white' }}>Wheat</Text>
      </View>

      {/* Silver */}
      <View style={{ alignItems: 'center', marginHorizontal: 15 }}>
        <Text style={{ color: 'gray', marginBottom: 4 }}>Label</Text>
        <Text style={{ color: 'white' }}>Silver</Text>
      </View>

      {/* Oil */}
      <View style={{ alignItems: 'center', marginHorizontal: 15 }}>
        <Text style={{ color: 'gray', marginBottom: 4 }}>Label</Text>
        <Text style={{ color: 'white' }}>Oil</Text>
      </View>
    </View>
  </View>
)}


        <Text  onPress={openUpgrades} style={{ 
        marginTop: 20, 
        fontSize: 24, 
        fontWeight: "bold", 
        backgroundColor: "#004777", 
        color: 'white',
        width: 300, 
        textAlign: 'center', 
        paddingTop: 20, 
        paddingBottom: 20, 
        borderRadius: 5}}>Upgrades</Text>

    </View>
  );
}
