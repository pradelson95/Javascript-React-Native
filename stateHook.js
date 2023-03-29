import React, {useState} from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button} from "react-native";
  

const App = () => {

  const [age, setAge] = useState(17);
  const [car, setCar] = useState({marca: "toyota", año: 2022})
  
  const handlerState = () => {
    setAge(age + 1);
    setCar({marca: "Honda", año: 2017})
  }

  return (
    
    <View style={styles.container}>

      <TouchableOpacity >
      <Text style={styles.text}>l am {age} years old</Text>
      <Text style={styles.text}> My {car.marca} was released in {car.año}</Text>
      </TouchableOpacity>
      <Button title="update state hook" onPress={handlerState}/>
    
    </View>

  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: "black",
    fontStyle: "italic",
    fontWeight:"bold",
    lineHeight: 60,
  },

});

export default App;