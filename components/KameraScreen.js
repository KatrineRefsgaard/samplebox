import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Linking } from 'react-native';
import { Camera } from 'expo-camera';

// Dette viser kameraet, hvor adgang til brug af kameraet på Iphone bliver godkendt.
// Samt kan man vælge at tage et billede eller vende kameraet om.
// Denne funktion skal bruge til at skanne QR-koder på tøjet. 

function KameraScreen({ prop }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [scannedUrl, setScannedUrl] = useState(null);
  const [isUrlVisible, setIsUrlVisible] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleCameraType = () => {
    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScannedData(data);
    if (type == 'org.iso.QRCode') {
      setScannedData(data);
      setScannedUrl(data);
      setIsUrlVisible(true);
    } else {
      Alert.alert('Ikke en gyldig QR kode.')
    }
  };

  const FloatingURLBox = () => (
    <View style={styles.floatingBox}>
      <Text style={styles.urlText}>{scannedUrl}</Text>
      <TouchableOpacity
        style={styles.openButton}
        onPress={() => {
          openUrl(scannedUrl);
          setIsUrlVisible(false); // Skjul textboxen efter URL'en åbnes
        }}>
        <Text style={styles.buttonText}>Open Link</Text>
      </TouchableOpacity>
    </View>
  );

  const openUrl = () => {
    if (scannedUrl && Linking.canOpenURL(scannedUrl)) {
      Linking.openURL(scannedUrl)
    } else {
      Alert.alert("Ugyldig URL", scannedUrl)
    }
  };



  const cameraRef = React.useRef(null);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        type={cameraType}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleCameraType}
        >
          <Text style={styles.buttonText}>Skift kamera</Text>
        </TouchableOpacity>
        {scanned && <TouchableOpacity
          style={styles.button}
          onPress={() => setScanned(false)}
        >
          <Text style={styles.buttonText}>Scan igen</Text>
        </TouchableOpacity>}
      </View>
      {isUrlVisible && <FloatingURLBox />}
    </View>
  );
}

// Her kommer styling

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'pink',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  floatingBox: {
    position: 'absolute',
    bottom: 100,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  urlText: {
    color: 'black',
    marginBottom: 10,
  },
  openButton: {
    backgroundColor: 'pink',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});

export default KameraScreen;
