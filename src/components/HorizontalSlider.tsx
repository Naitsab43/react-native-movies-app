import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { Movie } from '../interfaces/movie';
import { MoviePoster } from './MoviePoster';

interface Props {
  title?: string
  movies: Movie[]
}

export const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View style={{
      height: title ? 260 : 220,
    }}>

      { 
        title && <Text style={{fontSize: 30, fontWeight: "bold", marginVertical: 5, marginLeft: 8}}>{title}</Text> 
      }

      <FlatList 
        data={movies}
        renderItem={({ item }) => (

          <MoviePoster movie={ item } width={140} height={200} />

        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />

    </View>
  );
}