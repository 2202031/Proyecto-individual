import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import FirebaseConfig from '../../FirebaseConfig';
import {getDatabase,ref,get,update,child,set} from "firebase/database";

const Puertas = () => {

  const [datos, setDatos]= React.useState(null)
  const [  setStatusInicial]

  const obtenerdatos =async()=>{
    const db = getDatabase(FirebaseConfig.app);
      const dbRef = ref(db);
  
      try {
        const snapshot = await get(child(dbRef, "Casa"));
        if (snapshot.exists()) {
          const datosObtenidos = snapshot.val();
          console.log("Datos obtenidos:", datosObtenidos);
          setDatos(datosObtenidos); // Actualiza el estado con los datos obtenidos
        } else {
          console.log("No se encontraron datos");
        }
      } catch (error) {
        console.error("Error obteniendo datos:", error);
      }
  }


  React.useEffect(() => {
    obtenerdatos()
  },[]);

  const cambiarestadopuerta = async(lugar,nuevoestado) =>{
    await modificarDatospuerta("Puerta/Sala", 1);
    setStatusInicial(1);
   
    
    setTimeout(async () => {
      await modificarDatospuerta("Puerta/Sala", 0);
      setStatusInicial(0);
    }, 2000);
  }
  
  const cambiarstatuscocina =async(lugar, status)=>{
    const db = getDatabase(FirebaseConfig.app);
    const referencia = ref(db, Casa/${lugar});

    try {
      await update(referencia, { status: nuevoStatus });
      console.log("Datos actualizados correctamente");
      obtenerdatos(); // Vuelve a obtener los datos para reflejar los cambios
    } catch (error) {
      console.error("Error actualizando datos:", error);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Luz cocina:{datos.Luz.Cocina.status}</Text>
      {datos ? (<>
        <Button
        contentStyle={{
        paddingVertical: 50,
      }}
      style={styles.container} 
        icon={datos.Luz.Cocina.status === 1? 'lighthulb-on': 'lightbullb-off'}
        mode={datos.Luz.Cocina.status === 1? 'contained': 'outlined'}
        onPress={() => cambiarstatuscocina('Luz/Cocina',datos.Luz.Cocina.status === 1? 0:1)}>
        Luz Cocina
      </Button>

      <Text>Puerta Sala:</Text>
      <Button
      contentStyle={{
        paddingVertical: 50,
      }}
      style={styles.container} 
        icon={datos.Puerta.Sala.status === 1? 'door-open': 'door-clossed'} 
        mode={datos.Puerta.Sala.status === 1? 'contained': 'outlined'}
        onPress={() => console.log('Pressed')}>
        Puerta Sala: {datos.Puerta.Sala.status}
      </Button>
      </>):(<>
      <Text>Datos cargando UwU...</Text>
      </>)}
    </View>
  )
}

export default Puertas

const styles = StyleSheet.create({
  containerbuton:{
    marginTop:15,
  },
  container:{
    flex:1,
    justifyContent:'center',
    padding:10
  }
})