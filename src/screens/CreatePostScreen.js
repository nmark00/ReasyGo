import React, {useState, useContext} from 'react';
import {Center} from '../components/Center';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import {AuthContext} from '../authentication/AuthProvider';
import {addPost} from '../firebase/PostsFirestore';

export const CreatePostScreen = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const {user} = useContext(AuthContext);

  const submitPost = () => {
    if (user) {
      addPost({title, description, price, creatorUID: user.uid});
      navigation.goBack();
    }
  };

  return (
    <Center>
      <Text>Create Post Screen</Text>
      <TextInput value={title} onChangeText={setTitle} placeholder="title" />
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="description"
      />
      <TextInput
        value={price}
        onChangeText={setPrice}
        placeholder="price"
        keyboardType="numeric"
      />
      <TouchableOpacity onPress={submitPost}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </Center>
  );
};
