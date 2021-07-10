import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const DetailsScreen = ({navigation, route}) => {
    console.log('----route', route);
    const {params = {}} = route; // destructure params object out of route Object (=== route.params)
    const {screenNumber} = params;
    console.log('---screen Number is ', screenNumber);
    return (
      <View style={styles.mainView}>
        <Text>Details Screen</Text>
        <Text style={{fontSize: 100}}>{screenNumber}</Text>
          <Button
            title="Go to Image"
            onPress={() => {navigation.navigate("BigImageView")}}/>
            <Button
            title="More Details"
            onPress={() => {navigation.push("Details_to_Details", {
                screenNumber: screenNumber + 1
            })}}/>
            <Button
            title="Go Back"
            onPress={() => {navigation.goBack()}}/>
            <Button
            title="Go To Home"
            onPress={() => {navigation.popToTop()}}/>
      </View>
    )
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default DetailsScreen;