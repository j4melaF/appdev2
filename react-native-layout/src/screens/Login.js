import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function Login() {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Image 
          style={styles.loginlogo} 
          source={require('../../assets/login.png')} 
        />
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.subtitle}>Login to continue</Text>
      </View>

      {/* Content */}
      <View style={styles.contentSection}>

        {/* Email */}
        <View style={styles.inputContainer}>
          <Ionicons style={styles.icon} name="mail-outline" size={22} />
          <TextInput 
            placeholder="Email"
            keyboardType="email-address"
            style={styles.input}
          />
        </View>

        {/* Password */}
        <View style={styles.inputContainer}>
          <Ionicons style={styles.icon} name="lock-closed-outline" size={22} />        
          <TextInput 
            placeholder="Password"
            secureTextEntry
            style={styles.input}
          />
        </View>

        {/* Forgot Password */}
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <View style={styles.signup}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.link}>Sign up</Text>
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

  loginlogo: {
    width: 100,
    height: 100,
    marginBottom: 10
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333'
  },

  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#777',
    marginTop: 5
  },

  contentSection: {
    flex: 1.5,
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

  forgot: {
    alignSelf: 'flex-end',
    marginTop: 5,
    marginRight: 10,
    color: 'blue',
    fontWeight: '600'
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
    fontSize: 20
  },

  signup: {
    flexDirection: 'row',
    marginTop: 15
  },

  link: {
    color: "blue",
    fontWeight: '600'
  }
});
