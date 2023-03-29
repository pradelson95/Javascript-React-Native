import React from "react";
export default function App() {
  
    const [marca, setMarca] = useState("Hyundai Tucson");
    const [car, setCar] = useState({marca: "toyota", año: 2015});
    
    const btnHandler = () => {
      setMarca("Honda fit");
      setCar({marca: "ford", año: 2017});
    }
  
    return (
      <View style={styles.container}>
  
        <Text style={{color: "red"}}>My car model is {marca} </Text>
        <Text>My friend has a {car.marca} {car.año} </Text>
  
        <View style={styles.buttonContainer}>
        
          <Button title='update state' onPress={btnHandler}/>
        
        </View>
  
      </View>
    );  
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      marginTop: 20
    }
  });