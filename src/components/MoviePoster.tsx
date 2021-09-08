import { useNavigation } from '@react-navigation/core';
import { CommonActions } from '@react-navigation/native';
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/movie';

interface Props {
  movie: Movie
  height?: number
  width?: number
}

export const MoviePoster = ({movie, height = 420, width = 300}: Props) => {

  const navigation = useNavigation()

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  return (

    <TouchableOpacity 
      onPress={() => navigation.dispatch(CommonActions.navigate("DetailScreen", movie))}
      style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 10
      }} 
      activeOpacity={0.9}>

      <View style={styles.imageContainer}>

        <Image
          source={{ uri }}
          style={styles.image}
        />

      </View>

    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  
  image: {
    flex: 1,
    borderRadius: 18,
    
  },

  imageContainer: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 18,
  }

});