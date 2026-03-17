import React, { useState, useEffect } from "react";
import { View, Text, Alert } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ScanQR() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getPermissions();
  }, []);

  const handleScan = async ({ data }) => {
    setScanned(true);

    if (data !== "GYM_ENTRY") {
      Alert.alert("Invalid QR Code");
      return;
    }

    const today = new Date().toISOString().split("T")[0];

    const storedData = await AsyncStorage.getItem("attendance");

    let attendance = storedData ? JSON.parse(storedData) : [];

    const alreadyMarked = attendance.find(a => a.date === today);

    if (alreadyMarked) {
      Alert.alert("Attendance already marked today");
      return;
    }

    const newEntry = {
      date: today,
      minutes: 60
    };

    attendance.push(newEntry);

    await AsyncStorage.setItem("attendance", JSON.stringify(attendance));

    Alert.alert("Success", "Attendance marked successfully");
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }

  if (hasPermission === false) {
    return <Text>No camera access</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleScan}
        style={{ flex: 1 }}
      />
    </View>
  );
}