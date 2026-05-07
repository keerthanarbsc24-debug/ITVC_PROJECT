import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <Text style={styles.appName}>Smart Study Planner with Performance Tracker </Text>
        <Text style={styles.version}>Version 1.0</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>About</Text>
        <Text style={styles.text}>
          Objective: To help students organize study tasks and improve productivity.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>👩‍💻Developed By</Text>
        
        <Text style={styles.text}>
           • Manasa S{"\n"}
           • Keerthana R{"\n"}
           • Anvitha K{"\n"}
           • Keerthana S{"\n"}
           • Bhumika R
        </Text>
      </View>

      <Text style={styles.footer}>Made with React Native 🚀 </Text>

    </View>
  );
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
    padding: 20
  },

  card: {
    backgroundColor: '#6200EE',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20
  },

  appName: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold'
  },

  version: {
    color: 'white',
    marginTop: 5
  },

  section: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15
  },

  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },

  objective: {
    marginTop: 10,
    color: '#6200EE',
    fontWeight: '600'
  },

  text: {
    fontSize: 14,
    color: '#555'
  },

  footer: {
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
    fontStyle: 'italic'
  },
});
