import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../config/Config'
import { ref, set , onValue} from "firebase/database";

export default function UsuarioScreen() {
    const[cedula, setcedula]= useState('')
    const[nombre, setnombre]= useState('')
    const[correo, setcorreo]= useState('')
    const[comentario, setcomentario]= useState('')

    const[usuarios, setUsuarios]= useState([])
    // guardar informacion
    function guardarUsuario(cedula: string, nombre: string, correo: string, comentario: string) {
       
        set(ref(db, 'usuarios/' + cedula), {
          name: nombre,
          email: correo,
          coment : comentario
        });
        Alert.alert("Mensaje", "Informacion Guardada")
        setcedula('')
        setnombre('')
        setcorreo('')
        setcomentario('')
      }
      
      // Leer información
      useEffect(()=>{
        const starCountRef = ref(db, 'usuarios/' );
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  //console.log(data);
  
  const dataTemp:any = Object.keys(data).map((key)=> ({
    key, ...data[key]
  }))
   console.log(dataTemp);
   setUsuarios(dataTemp);
}); 
      }, [])
      type Usuario={
        name: string
      }
  
  return (
    <View style={styles.container}>
      <Text>USUARIOS</Text>
      <TextInput placeholder='Ingresar CI' style={styles.txt} onChangeText={(texto)=> setcedula(texto)}
        keyboardType='numeric' value={cedula}/>
      <TextInput placeholder='Ingresar Nombre' style={styles.txt} onChangeText={(texto)=> setnombre(texto)} value={nombre}/>
      <TextInput placeholder='Ingresar Correo' style={styles.txt} onChangeText={(texto)=> setcorreo(texto)}
        keyboardType='email-address' value={correo}/>
      <TextInput placeholder='Ingresar Comentario' style={styles.txt} multiline onChangeText={(text)=> setcomentario(text)} value={comentario}/>
      <Button title='Guardar' onPress={()=>guardarUsuario (cedula,nombre,correo,comentario)}/>
        <FlatList
       data={usuarios}
       renderItem={({item} : {item:Usuario})=><Text>{item.name}</Text>}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{ 
        flex: 1,
        backgroundColor: '#BED7DC',
        alignItems: 'center',
        justifyContent: 'center'
  },
  txt:{
    backgroundColor:'#37B7C3',
    height: 50,
    width:"80%",
    margin:2,
    fontSize:20,
    borderRadius:13
  }
})