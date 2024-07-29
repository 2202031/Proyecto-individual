import { StyleSheet } from 'react-native'
import React from 'react'
import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';

const ModalUser = (props) => {
    const nombre = props.nombre;
    const password = props.pw;
    const persona = props.persona;
  
    const [visible, setVisible] = React.useState(false);
    const [user, SetUser] = React.useState(props.nombre)
  
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};
    
    return (
      <>
        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <Text>Bievenido: {persona.nombre} </Text>
          </Modal>
        </Portal>
        <Button style={{marginTop: 30}} onPress={showModal}>
          Show
        </Button>
        </>
    );
  };

export default ModalUser

const styles = StyleSheet.create({})