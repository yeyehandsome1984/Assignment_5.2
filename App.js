import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [likeCoffee, setLikeCoffee] = useState(null); 

  const handleSubmit = () => {
    if (!name || !age || likeCoffee === null) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }
    Alert.alert(
      'Summary',
      `My name is ${name}, I am ${age} years old. ${likeCoffee === 'yes' ? 'I like coffee' : 'I do not like coffee'}`
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.label}>Your Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Your Age:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your age"
          keyboardType="numeric"
          value={age}
          onChangeText={(text) => setAge(text)}
        />
      </View>
      <View style={styles.coffeeContainer}>
        <Text style={styles.label}>Like Coffee?</Text>
        <View style={styles.radioContainer}>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setLikeCoffee('yes')}
          >
            <View
              style={[
                styles.radioCircle,
                likeCoffee === 'yes' && styles.radioSelected,
              ]}
            />
            <Text style={styles.radioLabel}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setLikeCoffee('no')}
          >
            <View
              style={[
                styles.radioCircle,
                likeCoffee === 'no' && styles.radioSelected,
              ]}
            />
            <Text style={styles.radioLabel}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
      

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 20,
    backgroundColor: '#fff',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    flex: 1,
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  input: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  radioSelected: {
    backgroundColor: '#007AFF',
  },
  radioLabel: {
    fontSize: 16,
  },
  coffeeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
  },
  submitButton: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
