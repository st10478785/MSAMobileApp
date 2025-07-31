// Application that toggles between two icons when a button is pressed
// Import necessary libraries and components
import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Icon changes between two icons
const App = () => {
  const [icon, setIcon] = useState('🌞');

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{icon}</Text>
      <Pressable
        style={styles.button}
        onPress={() => setIcon(icon === '🌞' ? '🌙' : '🌞')}
      >
        <Text style={styles.buttonText}>Change Icon</Text>
      </Pressable>
    </View>
  );
};

// Export the App Component
export default App;

//Style of the App Component
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  icon: { fontSize: 80, marginBottom: 20 },
  button: { backgroundColor: '#007AFF', padding: 16, borderRadius: 8 },
  buttonText: { color: 'white', fontSize: 18 },
});