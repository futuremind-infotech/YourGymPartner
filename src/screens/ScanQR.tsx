import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function ScanQR({ navigation }: any) {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getCameraPermission = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getCameraPermission();
  }, []);

  const handleBarCodeScanned = ({ data }: any) => {
    setScanned(true);

    if (data === "GYM_ENTRY") {
      Alert.alert("Success", "Attendance Marked!");
      navigation.navigate("Attendance");
    } else {
      Alert.alert("Invalid QR", "This is not gym entry QR");
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <Text style={styles.text}>Scan Gym QR to Mark Attendance</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    fontSize: 18,
    color: '#fff',
    backgroundColor: '#000000aa',
    padding: 10,
    borderRadius: 8,
  },
});