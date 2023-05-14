import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const ProbaButon = () => (
  <>
    <View style={styles.container}>
      <Text>HOME</Text>
      <Button title='STISNi ME' onPress={() => {
        Alert.alert(
          "TITLE",
          "MESSAGE",
          [
            {
              text: 'Cancel',
              onPress: () => Alert.alert('Cancel Pressed'),
              style: 'cancel',
            },
          ],
          {
            cancelable: true,
            onDismiss: () =>
              Alert.alert(
                'This alert was dismissed by tapping outside of the alert dialog.',
              ),
          },
        )
      }} />
    </View>
    </>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ProbaButon