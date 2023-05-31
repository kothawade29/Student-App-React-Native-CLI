import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

function TopperSection(props) {
  const { data, heading, navigation } = props;

  const render = ({ item, index }) => {
    const { image, studentName  , studentInfo} = item;
    return (
      <TouchableOpacity
        style={{ marginLeft: 12, alignItems: "center" }}
        onPress={() =>
          navigation.navigate("TopperDetails", studentInfo)
        }
      >
        <Image
          source={image}
          style={{ height: 80, width: 80, borderRadius: 100 }}
        />
        <Text> {studentName}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Text
        style={{
          marginHorizontal: 16,
          marginBottom: 8,
          fontSize: 22,
          lineHeight: 28,
        }}
      >
        {heading}
      </Text>
      <View
        style={{
          backgroundColor: "white",
          marginHorizontal: 16,
          borderRadius: 40,
          overflow: "hidden",
          padding: 16,
        }}
      >
        <FlatList
          data={data}
          renderItem={render}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );
}

export default TopperSection;
