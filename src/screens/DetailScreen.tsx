import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Dimensions, View, Image, StyleSheet, ScrollView, Text, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';


const screenHeight = Dimensions.get("screen").height;

interface Props extends StackScreenProps<RootStackParams, "DetailScreen">{}

export const DetailScreen = ({route}: Props) => {

  const movie = route.params
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  
  const { movieFull, cast, isLoading } = useMovieDetails(movie.id)

  return (

    <ScrollView>

      <View style={styles.imageContainer}>

        <View style={styles.imageBorder}>
          <Image source={{uri}} style={styles.posterImage} />
        </View>

      </View>

      <View style={styles.marginContainer}>

        <Text style={styles.title}>{ movie.original_title }</Text>
        <Text style={styles.subtitle}>{ movie.title }</Text>

      </View>

      { 
        isLoading 
          ? <ActivityIndicator size={30} color="grey" style={{marginTop: 20}} /> 
          : <MovieDetails movieFull={movieFull!} cast={cast} />
      }

    </ScrollView>

  );
}

const styles = StyleSheet.create({
  
  imageBorder: {
    overflow: "hidden",
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
  },
  
  posterImage: {
    flex: 1
  },

  imageContainer: {
    width: "100%",
    height: screenHeight * 0.7,
  },

  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },

  subtitle: {
    fontSize: 16,
    opacity: 0.8
  },

  title: {
    fontSize: 20,
    fontWeight: "bold"
  },


});
