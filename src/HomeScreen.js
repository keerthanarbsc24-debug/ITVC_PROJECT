import React, { useState } from 'react';
import {
  View, Text, TextInput,
  TouchableOpacity, ScrollView,
  StyleSheet, Alert
} from 'react-native';

export default function HomeScreen({ navigation, route }) {

  const getToday = () => {
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return days[new Date().getDay()];
  };

  const selectedDay = route?.params?.selectedDay || getToday();

  const [task, setTask] = useState('');
  const [filter, setFilter] = useState('ALL');

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const [tasks, setTasks] = useState({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: []
  });

  // ADD TASK
  const addTask = () => {
    if (task.trim() === '') return;

    const newTask = {
      id: Date.now().toString(),
      text: task,
      completed: false
    };

    setTasks(prev => ({
      ...prev,
      [selectedDay]: [...prev[selectedDay], newTask]
    }));

    setTask('');
  };

  // COMPLETE
  const toggleComplete = (id) => {
    setTasks(prev => ({
      ...prev,
      [selectedDay]: prev[selectedDay].map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    }));
  };

  // DELETE WITH CONFIRMATION
  const deleteTask = (id) => {
    Alert.alert(
      "Delete Task",
      "Are you sure you want to delete this task?",
      [
        { text: "Cancel" },
        {
          text: "Delete",
          onPress: () => {
            setTasks(prev => ({
              ...prev,
              [selectedDay]: prev[selectedDay].filter(t => t.id !== id)
            }));
          },
          style: "destructive"
        }
      ]
    );
  };

  // EDIT
  const startEdit = (item) => {
    setEditingId(item.id);
    setEditText(item.text);
  };

  const saveEdit = (id) => {
    if (editText.trim() === '') return;

    setTasks(prev => ({
      ...prev,
      [selectedDay]: prev[selectedDay].map(t =>
        t.id === id ? { ...t, text: editText } : t
      )
    }));

    setEditingId(null);
    setEditText('');
  };

  // FILTER
  const filteredTasks = tasks[selectedDay].filter(t => {
    if (filter === 'COMPLETED') return t.completed;
    if (filter === 'PENDING') return !t.completed;
    return true;
  });

  return (
    <ScrollView style={styles.container}>

      {/* HEADER */}
      <Text style={styles.title}>{selectedDay}</Text>
      <Text style={styles.subtitle}>
        {tasks[selectedDay].length} Tasks
      </Text>

      {/* INPUT */}
      <View style={styles.inputBox}>
        <TextInput
          placeholder="Add new task..."
          placeholderTextColor="#aaa"
          value={task}
          onChangeText={setTask}
          style={styles.input}
        />
        <TouchableOpacity style={styles.addBtn} onPress={addTask}>
          <Text style={styles.btnText}>＋</Text>
        </TouchableOpacity>
      </View>

      {/* FILTER */}
      <View style={styles.filterRow}>
        {['ALL','COMPLETED','PENDING'].map(f => (
          <TouchableOpacity
            key={f}
            style={[
              styles.filterBtn,
              filter === f && styles.activeFilter
            ]}
            onPress={() => setFilter(f)}
          >
            <Text style={styles.filterText}>{f}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* TASKS */}
      {filteredTasks.map(item => (
        <View key={item.id} style={styles.card}>

          {editingId === item.id ? (
            <TextInput
              value={editText}
              onChangeText={setEditText}
              style={styles.editInput}
            />
          ) : (
            <Text style={[
              styles.taskText,
              item.completed && styles.completed
            ]}>
              {item.text}
            </Text>
          )}

          <View style={styles.row}>

            <TouchableOpacity onPress={() => toggleComplete(item.id)}>
              <Text style={styles.complete}>✔</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => startEdit(item)}>
              <Text style={styles.edit}>✏️</Text>
            </TouchableOpacity>

            {editingId === item.id && (
              <TouchableOpacity onPress={() => saveEdit(item.id)}>
                <Text style={styles.save}>💾</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity onPress={() => deleteTask(item.id)}>
              <Text style={styles.delete}>🗑</Text>
            </TouchableOpacity>

          </View>
        </View>
      ))}

      {filteredTasks.length === 0 && (
        <Text style={styles.empty}>No tasks yet 🚀</Text>
      )}

      {/* ABOUT */}
      <TouchableOpacity
        style={styles.aboutBtn}
        onPress={() => navigation.navigate('About')}
      >
        <Text style={styles.btnText}>About App</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },

  title: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  subtitle: {
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 20
  },

  inputBox: {
    flexDirection: 'row',
    marginBottom: 15
  },

  input: {
    flex: 1,
    backgroundColor: '#1e1e2f',
    color: 'white',
    padding: 12,
    borderRadius: 10
  },

  addBtn: {
    marginLeft: 10,
    backgroundColor: '#ff9800',
    padding: 12,
    borderRadius: 10,
    justifyContent: 'center'
  },

  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },

  filterBtn: {
    backgroundColor: '#2e2e40',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20
  },

  activeFilter: {
    backgroundColor: '#2196f3'
  },

  filterText: {
    color: 'white',
    fontSize: 12
  },

  card: {
    backgroundColor: '#1e1e2f',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12
  },

  taskText: { color: 'white', fontSize: 16 },

  completed: {
    textDecorationLine: 'line-through',
    color: 'gray'
  },

  editInput: {
    backgroundColor: '#2e2e40',
    color: 'white',
    padding: 10,
    borderRadius: 8
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10
  },

  complete: { marginRight: 15, color: '#4CAF50', fontSize: 18 },
  edit: { marginRight: 15, color: '#FFC107', fontSize: 18 },
  save: { marginRight: 15, color: '#00E676', fontSize: 18 },
  delete: { color: '#F44336', fontSize: 18 },

  empty: {
    color: '#777',
    textAlign: 'center',
    marginTop: 30
  },

  aboutBtn: {
    backgroundColor: '#2196f3',
    padding: 15,
    borderRadius: 12,
    marginTop: 25
  },

  btnText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
