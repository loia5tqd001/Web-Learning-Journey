import React from "react"
import { View, StyleSheet } from "react-native"
import Constants from "expo-constants"

import CameraPage from "./src/components/camera"
import TimelineComponent from "./src/components/TimelineComponent"
import ImagePicker from "./src/components/ImagePicker"
import CameraToolbar from "./src/components/CameraToolbar"
import FrontIdCamera from "./src/components/FrontIdCamera"
import BackIdCamera from "./src/components/BackIdCamera"
import VerifyFrontId from "./src/components/VerifyFrontId"


function App(props) {

  return (
    <View style={styles.container}>
      {/* <ImagePicker/> */}
      <TimelineComponent />
      {/* <VerifyFrontId /> */}
      <FrontIdCamera />
      {/* <BackIdCamera /> */}
      <CameraToolbar />
      {/* <CameraPage /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  }
})
