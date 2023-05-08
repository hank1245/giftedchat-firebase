import axios from 'axios';
import React, { useState } from 'react';
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { HOST } from '../../constants';

interface Props {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
  data: string[];
}

const BackgroundModal = ({ modalVisible, setModalVisible, data }: Props) => {
  const [checked, setChecked] = useState('first');
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>모드 선택</Text>
            <View style={{ marginBottom: 10 }}>
              <RadioButton.Group
                onValueChange={value => setChecked(value)}
                value={checked}
              >
                <RadioButton.Item
                  value="first"
                  label={`${data[0]}`}
                  labelVariant="bodySmall"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                />
                <RadioButton.Item
                  value="second"
                  label={`${data[1]}`}
                  labelVariant="bodySmall"
                  status={checked === 'second' ? 'checked' : 'unchecked'}
                />
                <RadioButton.Item
                  value="third"
                  label={`${data[2]}`}
                  status={checked === 'third' ? 'checked' : 'unchecked'}
                  labelVariant="bodySmall"
                />
              </RadioButton.Group>
            </View>
            <View style={styles.flexRow}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>취소</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>확인</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BackgroundModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(17, 17, 17, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    width: 200,
    height: 280,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    paddingHorizontal: 25,
    paddingVertical: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: 'black',
  },
  buttonClose: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTitle: {
    marginBottom: 15,
    fontWeight: '700',
    fontSize: 17,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
