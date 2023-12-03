import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native';

const PaymentScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handlePayment = (paymentMethod) => {
    console.log(`Pagamento com ${paymentMethod} processado com sucesso!`);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

return (
    <View style={styles.container}>
      <Text style={styles.header}>Formas de Pagamento</Text>
      <Text>Escolha o seu método de pagamento:</Text>

      <TouchableOpacity style={styles.paymentButton} onPress={() => handlePayment('Cartão de Crédito')}>
        <Text style={styles.buttonText}>Pagar com Cartão de Crédito</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.paymentButton} onPress={() => handlePayment('PayPal')}>
        <Text style={styles.buttonText}>Pagar com PayPal</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.paymentButton} onPress={() => handlePayment('Transferência Bancária')}>
        <Text style={styles.buttonText}>Transferência Bancária</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.paymentButton} onPress={() => handlePayment('Pix')}>
        <Text style={styles.buttonText}>Pagar com Pix</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Pagamento efetuado com sucesso!</Text>
            <Button title="Fechar" onPress={closeModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#da5632'

  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  
  },
  paymentButton: {
    backgroundColor: 'rgb(160,82,45)',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default PaymentScreen;