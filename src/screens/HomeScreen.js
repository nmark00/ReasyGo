import React, {useContext, useEffect, useState} from 'react';
import {Center} from '../components/Center';
import {Text, FlatList, View} from 'react-native';
import {AuthContext} from '../authentication/AuthProvider';
import {streamPostsByCreatorUID} from '../firebase/PostsFirestore';

export const HomeScreen = () => {
  const [posts, setPosts] = useState([]);

  const {user} = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      // If compound like this, then need to create composite index in firestore
      const unsubscribe = streamPostsByCreatorUID({
        creatorUID: user.uid,
        callback: querySnapshot => {
          const updatedPostItems = querySnapshot.docs.map(docSnapshot => {
            return {
              key: docSnapshot.id,
              ...docSnapshot.data(),
            };
          });
          setPosts(updatedPostItems);
        },
      });
      return unsubscribe;
    }
    return () => {};
  }, [user]);

  return (
    <Center>
      <Text>Home Screen</Text>
      <FlatList
        data={posts}
        renderItem={({item}) => (
          <View key={item.key}>
            <Text>Key: {item.key}</Text>
            <Text>Creator UID: {item.creatorUID}</Text>
            <Text>
              Time:{' '}
              {item.createdAt
                ? item.createdAt.toDate().toString()
                : 'Timestamp not yet set'}
            </Text>
            <Text>Title: {item.title}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Price: {item.price}</Text>
            <Text>----------------</Text>
          </View>
        )}
      />
    </Center>
  );
};
