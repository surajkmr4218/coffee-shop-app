import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Platform } from 'react-native';

// Define API URL at the top level
const API_URL = 'http://127.0.0.1:8000/api';

// Component definition
const OrderScreen = () => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        order: ''
    });

    const handleSubmit = async () => {
      try {
          // Log the URL and data being sent
          console.log('Submitting to:', `${API_URL}/orders/`);
          console.log('Data being sent:', formData);
  
          // Make the request
          const response = await fetch(`${API_URL}/orders/`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
              },
              body: JSON.stringify(formData)
          });
  
          // Log the full response
          console.log('Response status:', response.status);
          console.log('Response headers:', response.headers);
  
          if (!response.ok) {
              const errorText = await response.text();
              console.error('Error response body:', errorText);
              throw new Error(`HTTP error! status: ${response.status}`);
          }
  
          const data = await response.json();
          console.log('Success response:', data);
          setFormData({ name: '', date: '', order: '' });
          alert('Order submitted successfully!');
      } catch (error) {
          console.error('Error type:', error.constructor.name);
          console.error('Error message:', error.message);
          console.error('Full error:', error);
          alert('Error submitting order. Check console for details.');
      }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Name:</Text>
                    <TextInput
                        style={styles.input}
                        value={formData.name}
                        onChangeText={(text) => setFormData({ ...formData, name: text })}
                        placeholder="Enter your name"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Date:</Text>
                    <TextInput
                        style={styles.input}
                        value={formData.date}
                        onChangeText={(text) => setFormData({ ...formData, date: text })}
                        placeholder="Enter date (MM/DD/YYYY)"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Order:</Text>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        value={formData.order}
                        onChangeText={(text) => setFormData({ ...formData, order: text })}
                        placeholder="Enter your coffee order here..."
                        multiline
                        numberOfLines={4}
                    />
                </View>
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Submit Order</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

// Styles definition
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    form: {
        padding: 20,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: '500',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
    },
    textArea: {
        height: 120,
        textAlignVertical: 'top',
    },
    submitButton: {
        backgroundColor: '#4A90E2',
        padding: 18,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 40,
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
            },
            android: {
                elevation: 5,
            },
            web: {
                boxShadow: '0px 2px 3.84px rgba(0, 0, 0, 0.25)',
            },
        }),
    },
    submitButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
});

// Export at the top level
export default OrderScreen;