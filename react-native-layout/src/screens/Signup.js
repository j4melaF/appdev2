import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SignupLayout() {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Sign up to get started</Text>
      </View>

      {/* Content */}
      <View style={styles.contentSection}>

        {/* Name */}
        <View style={styles.inputContainer}>
          <Ionicons style={styles.icon} name="person-outline" size={22} />
          <TextInput 
            placeholder="Enter your name"
            style={styles.input}
          />
        </View>

        {/* Email */}
        <View style={styles.inputContainer}>
          <Ionicons style={styles.icon} name="mail-outline" size={22} />
          <TextInput 
            placeholder="Enter your email"
            keyboardType="email-address"
            style={styles.input}
          />
        </View>

        {/* Password */}
        <View style={styles.inputContainer}>
          <Ionicons style={styles.icon} name="lock-closed-outline" size={22} />
          <TextInput 
            placeholder="Enter your password"
            secureTextEntry
            style={styles.input}
          />
        </View>

        {/* Confirm Password */}
        <View style={styles.inputContainer}>
          <Ionicons style={styles.icon} name="lock-closed-outline" size={22} />
          <TextInput 
            placeholder="Confirm your password"
            secureTextEntry
            style={styles.input}
          />
        </View>

      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>

        <View style={styles.login}>
          <Text>Already have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF2EF',
    paddingHorizontal: 20
  },

  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  logo: {
    width: 100,
    height: 100,
    marginBottom: 10
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333'
  },

  subtitle: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
    fontWeight: '600'
  },

  contentSection: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },

  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
    marginBottom: 15,
    width: '100%',
    paddingHorizontal: 15,
    backgroundColor: 'white',
    alignItems: 'center'
  },

  icon: {
    color: "#555",
    marginRight: 10
  },

  input: {
    height: 50,
    fontWeight: '500',
    flex: 1
  },

  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  buttonContainer: {
    width: '100%',
    height: 50,
    backgroundColor: '#5D688A',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },

  login: {
    flexDirection: 'row',
    marginTop: 15
  },

  link: {
    color: "blue",
    fontWeight: 'bold'
  }
});
