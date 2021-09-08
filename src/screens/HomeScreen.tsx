import React, { useContext } from 'react';
import Carousel from 'react-native-snap-carousel';
import { ActivityIndicator, Dimensions, View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';
import { useEffect } from 'react';


const { width: windowWidth } = Dimensions.get("window")

export const HomeScreen = () => {

  const {top} = useSafeAreaInsets()

  const { movies, isLoading } = useMovies()

  const { setMainColors } = useContext(GradientContext)

  const getPosterColors = async (index: number) => {

    const movie = movies.nowPlaying[index]
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`


    const [primary = "green", secondary = "orange"] = await getImageColors(uri)

    setMainColors({primary, secondary})

  }

  useEffect(() => {

    if(movies.nowPlaying.length > 0){
      getPosterColors(0)
    }

  }, [movies.nowPlaying])

  if(isLoading){
    return (

      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <ActivityIndicator color="red" size={50} />
      </View>

    )
  }

  return (

    <GradientBackground>

      <ScrollView>

        <View style={{marginTop: top + 20}}>

          <View style={{ height: 440 }}> 

            <Carousel 
              data={movies.nowPlaying}
              renderItem={({ item }) => <MoviePoster movie={ item } /> }
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors(index)}
            />

          </View>

          <HorizontalSlider title="Populares" movies={movies.popular}/>

          <HorizontalSlider title="Mejores calificadas" movies={movies.topRated}/>

          <HorizontalSlider title="Proximamente" movies={movies.upcoming}/>

      
        </View>

      </ScrollView>

    </GradientBackground>
  );
}
