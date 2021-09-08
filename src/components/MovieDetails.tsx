import React from 'react';
import currencyFormatter from 'currency-formatter'
import { FlatList, Text, View } from 'react-native';
import { MovieFull } from '../interfaces/movie';
import { Cast } from '../interfaces/cast';
import Icon from 'react-native-vector-icons/Ionicons';
import { CastItem } from './CastItem';

interface Props {
  movieFull: MovieFull
  cast: Cast[]
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (

    <>

      <View style={{marginHorizontal: 20}}>

        <View style={{flexDirection: "row"}}>

          <Icon 
            name="star"
            color="grey"
            size={16}
          />

          <Text style={{marginLeft: 3}}>{ movieFull.vote_average }</Text>

          <Text style={{marginLeft: 5}}>
            - { movieFull.genres.map(genere => genere.name).join(", ") }
          </Text>

        </View>

        <Text style={{fontSize: 23, marginTop: 10, fontWeight: "bold"}}>
          Historia
        </Text>


        <Text style={{fontSize: 15}}>
          {movieFull.overview}
        </Text>

        <Text style={{fontSize: 23, marginTop: 10, fontWeight: "bold"}}>
          Presupuesto
        </Text>
        
        <Text>
          { currencyFormatter.format(movieFull.budget, {code: "USD"}) }
        </Text>

      </View>

      <View style={{marginTop: 10, marginBottom: 100}}>

        <Text style={{fontSize: 23, marginTop: 10, fontWeight: "bold", marginHorizontal: 20}}>
          Actores
        </Text>

        <FlatList 
          data={cast}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{marginTop: 10, height: 70}}
        />

      </View>
      

    </>

  );
}