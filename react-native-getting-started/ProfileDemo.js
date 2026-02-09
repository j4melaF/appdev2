import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Grouped Content */}
      <View style={styles.profile}>
        <Text style={styles.heading}>Student Information</Text>

        <Text style={styles.label}>Course & Section:</Text>
        <Text style={styles.info}>BSIS 3-B</Text>

        <Text style={styles.label}>Name:</Text>
        <Text style={styles.info}>Jamela Fernandez</Text>

        <Text style={styles.label}>Age:</Text>
        <Text style={styles.info}>21</Text>

        <Text style={styles.label}>Favorite Hobby:</Text>
        <Text style={styles.info}>Dancing</Text>

        <Text style={styles.label}>Pet Peeves:</Text>
        <Text style={styles.info}>1. People who don't have respect for others.</Text>
        <Text style={styles.info}>2. Those who take a long time to reply, even in group chats.</Text>
        <Text style={styles.info}>3. When the class gets too loud.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2954a5',
    justifyContent: 'center',
  },
  profile: {
    padding: 15,
    backgroundColor: '#fffefe',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3, 
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000000',
  },
  info: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#000',
    marginTop: 2,
  },
});
