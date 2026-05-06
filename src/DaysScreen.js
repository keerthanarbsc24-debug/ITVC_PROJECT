import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function DaysScreen({ navigation }) {

  const days = [
    'Monday','Tuesday','Wednesday',
    'Thursday','Friday','Saturday','Sunday'
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Day</Text>

      {days.map((day, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => navigation.navigate('Home', { selectedDay: day })}
        >
          <Text style={styles.dayText}>{day}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2f',
    padding: 20
  },
  title: {
    fontSize: 26,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center'
  },
  card: {
    backgroundColor: '#2e2e40',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10
  },
  dayText: {
    color: 'white',
    fontSize: 18
  }
});
