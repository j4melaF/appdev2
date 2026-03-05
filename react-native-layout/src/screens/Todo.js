import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  FlatList, // I use this to render the list of tasks and it provides better performance for long lists
  KeyboardAvoidingView, 
  Platform,
  Alert 
} from 'react-native';

export default function TodoScreen() {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

 
  const handleAddTask = () => {
    if (task.trim().length === 0) return;
    const newTodo = {
      id: Date.now().toString(),
      text: task,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
    setTask('');
  };

 
  const toggleTodo = (id) => {
    setTodoList(todoList.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

 
  const deleteTodo = (id) => {
    setTodoList(todoList.filter(item => item.id !== id));
  };


  const confirmDelete = (id) => {
    Alert.alert("Delete Task", "Are you sure you want to delete this task?", [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", style: "destructive", onPress: () => deleteTodo(id) }
    ]);
  };


  const filteredTodos = todoList.filter(item => 
    item.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

 
  const renderItem = ({ item }) => (
    <View style={[styles.item, item.completed && styles.itemCompleted]}>
      <TouchableOpacity 
        style={styles.itemTextContainer} 
        onPress={() => toggleTodo(item.id)}
        activeOpacity={0.7}
      >
        <Text style={[
          styles.itemText, 
          item.completed && styles.completedText
        ]}>
          {item.completed ? "✓ " : "○ "} {item.text}
        </Text>
      </TouchableOpacity>
      
      {/* Updated to call confirmDelete instead of deleteTodo directly */}
      <TouchableOpacity onPress={() => confirmDelete(item.id)}>
        <Text style={styles.deleteBtn}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header & Search */}
      <View style={styles.header}>
        <Text style={styles.title}>My Tasks</Text>
        <TextInput 
          style={styles.searchInput}
          placeholder="Search tasks..."
          placeholderTextColor="#8FA8B8"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Todo FlatList */}
      <FlatList 
        data={filteredTodos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContentContainer}
        style={styles.listContainer}
      />

      {/* Input Area */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.inputWrapper}
      >
        <TextInput 
          style={styles.input} 
          placeholder={'Write a new task...'} 
          placeholderTextColor="#8FA8B8"
          value={task} 
          onChangeText={text => setTask(text)} 
        />
        <TouchableOpacity onPress={handleAddTask} activeOpacity={0.8}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
  },
  header: {
    paddingTop: 70,
    paddingHorizontal: 25,
    backgroundColor: '#B0E0E6', 
    paddingBottom: 30,
    borderBottomLeftRadius: 30, 
    borderBottomRightRadius: 30,
    shadowColor: '#87CEEB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    zIndex: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 20,
    color: '#1C3F60', 
    letterSpacing: 0.5,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 12,
    fontSize: 16,
    color: '#1C3F60', 
  },
  listContainer: {
    flex: 1,
  },
  listContentContainer: {
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 130, 
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#87CEEB', 
    shadowColor: '#9CB4C4',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  itemCompleted: {
    borderLeftColor: '#D3E4EE', 
    opacity: 0.8,
  },
  itemTextContainer: {
    flex: 0.8,
  },
  itemText: {
    fontSize: 16,
    color: '#1C3F60', 
    fontWeight: '500',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#9CB4C4', 
  },
  deleteBtn: {
    color: '#E57373', 
    fontWeight: '600',
    fontSize: 14,
  },
  inputWrapper: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderColor: '#B0E0E6', 
    borderWidth: 1.5,
    width: '80%',
    fontSize: 16,
    color: '#1C3F60',
    shadowColor: '#9CB4C4',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#87CEEB', 
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#87CEEB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  addText: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: '500', 
  },
});