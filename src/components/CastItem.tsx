import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/cast';

interface Props {
  actor: Cast
}

export const CastItem = ({actor}: Props) => {

  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`

  return (
    <View style={styles.container}>

      {

        actor.profile_path && 
          <Image
            source={{uri}}
            style={styles.image}
          />

      }

      <View style={styles.actorInfo}>

        <Text style={{fontSize: 17, fontWeight: "bold"}}>
          { actor.name }
        </Text>

        <Text style={{fontSize: 15, opacity: 0.7}}>
          { actor.character }
        </Text>

      </View>

    </View>
  );

}

const styles = StyleSheet.create({
  
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
    marginLeft: 20,
    paddingRight: 10,
    paddingTop: 6

  },

  image: {
    width: 50, 
    height: 50, 
    borderRadius: 10,
    marginLeft: 5
  },

  actorInfo: {
    marginLeft: 10,
  }

});