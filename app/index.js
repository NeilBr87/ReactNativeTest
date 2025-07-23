import { useEffect, useState } from 'react';
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Holdings from './Holdings';
import Mining from './Mining';
import Stocks from './Stocks';
import Upgrades from './Upgrades';
export default function Index() {
  const [cash, setCash] = useState(0);
  const [btc, setBTC] = useState(0);
  const [bitcoinPrice, setBitcoinPrice] = useState(87414.5);
  const [openTab, setOpenTab] = useState("");
  const [googleValue, setGoogleValue] = useState(70)
  const [googleHeld, setGoogleHeld] = useState(0)
  const [teslaValue, setTeslaValue] = useState(50)
  const [teslaHeld, setTeslaHeld] = useState(0)
  const [bhValue, setBhValue] = useState(40)
  const [bhHeld, setBhHeld] = useState(0)
  const [appleValue, setAppleValue] = useState(90)
  const [appleHeld, setAppleHeld] = useState(0)
  const [amazonValue, setAmazonValue] = useState(60)
  const [amazonHeld, setAmazonHeld] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    const getChange = () => Math.floor((Math.random() - 0.5) * 11); // roughly -5 to +5

    setGoogleValue(prev => Math.max(0, prev + getChange()));
    setTeslaValue(prev => Math.max(0, prev + getChange()));
    setBhValue(prev => Math.max(0, prev + getChange()));
    setAppleValue(prev => Math.max(0, prev + getChange()));
    setAmazonValue(prev => Math.max(0, prev + getChange()));
  }, 3000);

  return () => clearInterval(interval);
}, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const change = (Math.random() - 0.5) * 2;
      setBitcoinPrice(prev => parseFloat((prev + change).toFixed(2)));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // const sellBTC = () => {
  //   const btcValue = btc * bitcoinPrice;
  //   setCash(parseFloat((cash + btcValue).toFixed(2)));
  //   setBTC(0);
  // };

  // const earnBTC = () => {
  //   setBTC(prev => prev + 0.000011);
  // };

  const toggleTab = (tabName) => {
    setOpenTab(prev => (prev === tabName ? "" : tabName));
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ backgroundColor: '#F3EFEF' }}>
          <View style={{ alignItems: "center", padding: 20 }}>
            <Text style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 40,
              marginBottom: 20
            }}>Trading Day</Text>

            <Text>Current funds</Text>
            <Text style={{
              fontSize: 24,
              fontWeight: "bold",
              backgroundColor: "white",
              width: 100,
              textAlign: 'center',
              paddingVertical: 10,
              borderRadius: 5
            }}>
              £{Math.floor(cash * 100) / 100}
            </Text>

            {/* Crypto Button */}
            <Pressable onPress={() => toggleTab("crypto")}>
              <Text style={{
                marginTop: 20,
                fontSize: 24,
                fontWeight: "bold",
                backgroundColor: "#004777",
                color: 'white',
                width: 300,
                textAlign: 'center',
                paddingVertical: 20,
                borderRadius: 5
              }}>Crypto Mining</Text>
            </Pressable>

            {/* Crypto Tab */}
            {openTab === "crypto" && (
              <Mining btc={btc} setBTC={setBTC} bitcoinPrice={bitcoinPrice} setBitcoinPrice={setBitcoinPrice} cash={cash} setCash={setCash} />
            )}

            {/* Stocks Button */}
            <Pressable onPress={() => toggleTab("commodities")}>
              <Text style={{
                marginTop: 20,
                fontSize: 24,
                fontWeight: "bold",
                backgroundColor: "#004777",
                color: "white",
                width: 300,
                textAlign: 'center',
                paddingVertical: 20,
                borderRadius: 5
              }}>Stocks</Text>
            </Pressable>

        {openTab === "commodities" && (
          <Stocks
            googleHeld={googleHeld}
            setGoogleHeld={setGoogleHeld}
            googleValue={googleValue}
            setGoogleValue={setGoogleValue}
            cash={cash}
            setCash={setCash}
            teslaValue={teslaValue}
            setTeslaValue={setTeslaValue}
            teslaHeld={teslaHeld}
            setTeslaHeld={setTeslaHeld}
            bhValue={bhValue}
            setBhValue={setBhValue}
            bhHeld={bhHeld}
            setBhHeld={setBhHeld}
            appleValue={appleValue}
            setAppleValue={setAppleValue}
            appleHeld={appleHeld}
            setAppleHeld={setAppleHeld}
            amazonValue={amazonValue}
            setAmazonValue={setAmazonValue}
            amazonHeld={amazonHeld}
            setAmazonHeld={setAmazonHeld}
          />
        )}


        <Pressable onPress={() => toggleTab("holdings")}>
              <Text style={{
                marginTop: 20,
                fontSize: 24,
                fontWeight: "bold",
                backgroundColor: "#004777",
                color: 'white',
                width: 300,
                textAlign: 'center',
                paddingVertical: 20,
                borderRadius: 5
              }}>Holdings</Text>
            </Pressable>

            {openTab === "holdings" && (
              <Holdings
                googleHeld={googleHeld}
                setGoogleHeld={setGoogleHeld}
                teslaHeld={teslaHeld}
                setTeslaHeld={setTeslaHeld}
                bhHeld={bhHeld}
                setBhHeld={setBhHeld}
                appleHeld={appleHeld}
                setAppleHeld={setAppleHeld}
                amazonHeld={amazonHeld}
                setAmazonHeld={setAmazonHeld}
              />
            )}

            {/* Upgrades Button */}
            <Pressable onPress={() => toggleTab("upgrades")}>
              <Text style={{
                marginTop: 20,
                fontSize: 24,
                fontWeight: "bold",
                backgroundColor: "#004777",
                color: 'white',
                width: 300,
                textAlign: 'center',
                paddingVertical: 20,
                borderRadius: 5
              }}>Upgrades</Text>
            </Pressable>

            {openTab === "upgrades" && <Upgrades />}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
