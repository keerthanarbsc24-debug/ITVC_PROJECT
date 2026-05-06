import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TaskDetailScreen({ route, navigation }) {

  const { task, markComplete, deleteTask } = route.params;

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Task Details</Text>

      <View style={styles.card}>
        <Text style={styles.taskText}>{task.text}</Text>
      </View>

      <TouchableOpacity
        style={styles.doneBtn}
        onPress={() => {
          markComplete(task.id);
          navigation.goBack();
        }}
      >
        <Text style={styles.btnText}>Mark as Completed</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.deleteBtn}
        onPress={() => {
          deleteTask(task.id);
          navigation.goBack();
        }}
      >
        <Text style={styles.btnText}>Delete Task</Text>
      </TouchableOpacity>

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
    marginBottom: 20
  },

  taskText: {
    color: 'white',
    fontSize: 18
  },

  doneBtn: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },

  deleteBtn: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10
  },

  btnText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  }

});
