import React, { useState } from 'react';
import { Text, View, TextInput, Button, ScrollView, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { submitFormData } from './ApiCall'; // Import the API function

export default function App() {
  const [form, setForm] = useState({
    age: '',
    sex: '',
    cp: '',
    trestbps: '',
    chol: '',
    fbs: '',
    restecg: '',
    thalach: '',
    exang: '',
    oldpeak: '',
    slope: '',
    ca: '',
    thal: '',
 
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (key, value) => {
    setForm({
      ...form,
      [key]: value
    });
  };

  const validateForm = () => {
    for (const key in form) {
      if (form[key] === '') {
        return `Please fill the ${key} field.`;
      }
    }
    return null;
  };

  const handleSubmit = async () => {
    const validationError = validateForm();
    if (validationError) {
      Alert.alert("Validation Error", validationError);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await submitFormData(form);
      Alert.alert("Prediction Result", `Prediction: ${result.prediction}`);
    } catch (err) {
      setError(err.message);
      Alert.alert("Submission Error", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Health Input Form</Text>
      
      {/* Form Fields */}
      {Object.keys(form).map((field, index) => (
        <View key={index} style={styles.inputContainer}>
          <Text style={styles.label}>{field}</Text>
          <TextInput
            style={styles.input}
            placeholder={`Enter ${field}`}
            value={form[field]}
            onChangeText={(value) => handleChange(field, value)}
            keyboardType={field === 'age' || field === 'trestbps' || field === 'chol' || field === 'thalach' || field === 'oldpeak' || field === 'target' ? 'numeric' : 'default'}
          />
        </View>
      ))}

      {/* Submit Button */}
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} />
        {loading && <ActivityIndicator size="large" color="#0000ff" />}
        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  inputContainer: {
    marginBottom: 15
  },
  label: {
    fontSize: 16,
    marginBottom: 5
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  buttonContainer: {
    marginTop: 20
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10
  }
});
