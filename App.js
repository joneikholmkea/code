import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , Button} from 'react-native';

export default function App() {

  function pressMe(){
    alert("hej")
  }
  return (
    // <View style={styles.container}>
    //   <Text>Wow this is good again 2</Text>
    //   <Image style={styles.img} source={{uri:"https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg"}}></Image>
    //   <StatusBar style="auto" />
    // </View>
    <View
    style={{flex: 1.0, flexDirection: 'row'}}>
    <View style={{flex: 1, backgroundColor: 'red'}} />
    <View style={{flex: 2, backgroundColor: 'darkorange'}} />
    <View style={{flex: 3, backgroundColor: 'darkgreen', flexDirection: 'row', alignItems:'center', justifyContent:'center'}} >
    <Button title='Press Me' onPress={pressMe} />
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
  img:{
    width:150,
    height:150
  }
});
