import React from 'react';
import {
  Image, Pressable, ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Button = ({ title}) => {
  return (
    <Pressable
      style={{ backgroundColor: "red", alignItems: "center", marginTop: 20 }}
      onPress={() => {
        alert("yes i am moga sammi");
      }}
    >
      <Text style={{ color: "white" }}>{title}</Text>
    </Pressable>
  );
};

 
export default function App() {
  return (
    <>
      <SafeAreaView style={[styles.container]}>
        <ScrollView>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View>
              <Text
                style={{ fontSize: 20, color: "black", fontWeight: "bold" }}
              >
                company
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 19,
                  fontWeight: "bold",
                  color: "black",
                  marginLeft: 30,
                }}
              >
                Home
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 19,
                  fontWeight: "bold",
                  color: "black",
                  marginLeft: 30,
                }}
              >
                service
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 19,
                  fontWeight: "bold",
                  color: "black",
                  marginLeft: 30,
                }}
              >
                cats
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 40 }}>
            <Image
              resizeMode="contain"
              style={{ width: 400, height: 300 }}
              source={{
                uri: "data:image/jpeg;base64,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",
              }}
            />
          </View>
          <View style={{ marginTop: 40 }}>
            <Image
              resizeMode="cover"
              style={{ width: 200, height: 180 }}
              source={{
                uri: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              }}
            />
          </View>
         
          <View>
            <Button style={{backgroundColor:"red"}} title="press"/>
            <Button title="second"/>
          </View>
         
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});