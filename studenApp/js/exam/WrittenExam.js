import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet , Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
// import TextDetector from 'react-native-text-detector';

const WrittenExam = () => {
  const [capturedImage, setCapturedImage] = useState(null);
  const [extractedText, setExtractedText] = useState('');

  const handleCapture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      setCapturedImage(data);
      extractTextFromImage(data);
    }
  };

  // const extractTextFromImage = async (imageData) => {
  //   try {
  //     const visionResp = await TextDetector.detectFromUri(imageData.uri);
  //     const text = visionResp.reduce((prev, curr) => prev + ' ' + curr.text, '');
  //     setExtractedText(text);
  //   } catch (error) {
  //     console.log('Error while extracting text:', error);
  //   }
  // };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={(ref) => {
          this.camera = ref;
        }}
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
      />
      <TouchableOpacity style={styles.captureButton} onPress={handleCapture}>
        <Text style={styles.captureButtonText}>Capture</Text>
      </TouchableOpacity>
      {capturedImage && (
        <View style={styles.previewContainer}>
          <Text style={styles.previewText}>Captured Image:</Text>
          <Image source={{ uri: capturedImage.uri }} style={styles.previewImage} />
          <Text style={styles.previewText}>Extracted Text:</Text>
          <Text style={styles.extractedText}>{extractedText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  captureButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    padding: 20,
    borderRadius: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  captureButtonText: {
    fontSize: 20,
    color: '#fff',
  },
  previewContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  previewText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  previewImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  extractedText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default WrittenExam;
