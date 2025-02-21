import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function AuthScreen() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{isLogin ? 'Login' : 'Register'}</Text>

      {!isLogin && (
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={{ borderWidth: 1, width: '100%', padding: 10, marginVertical: 5 }}
        />
      )}
      
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, width: '100%', padding: 10, marginVertical: 5 }}
      />
      
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ borderWidth: 1, width: '100%', padding: 10, marginVertical: 5 }}
      />

      <Button title={isLogin ? 'Login' : 'Register'} onPress={() => router.replace('/(tabs)')} />
      <Button title={isLogin ? 'Need an account? Register' : 'Already have an account? Login'} onPress={() => setIsLogin(!isLogin)} />
    </View>
  );
}
