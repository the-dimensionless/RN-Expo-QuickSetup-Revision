import React from "react";
import { useEffect, useState } from "react";
import { Button, View, Text, StyleSheet, Image } from "react-native";
import xhrGetRequest from "../utils/xhrRequest";

const DetailsScreen = ({ navigation, route }) => {
  const movie = route.params.movie;

  const [movieData, setMovieData] = useState(null);

  const onLoadCallback = (xhr) => {
    if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        setMovieData(response);
      } else {
        console.log("HTTP Request Failed with code", xhr.status);
      }
  };

  useEffect(() => {
    xhrGetRequest(movie.url, onLoadCallback);
  }, []);

  const renderMovieData = () => (
    <>
      <Image source={{uri: movieData.Poster}} style={{height: 480, width: 720, resizeMode: 'contain'}} />
      <Text>{movieData.title}</Text>
      <Text>{movieData.Released}</Text>
      <Text>{movieData.Plot}</Text>
    </>
  );

  return <View style={styles.mainView}>{movieData && renderMovieData()}</View>;
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "4%",
  },
});

export default DetailsScreen;
