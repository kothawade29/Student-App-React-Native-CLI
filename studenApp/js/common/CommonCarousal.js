import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Image , TouchableOpacity} from "react-native";
import React from "react";


function CommonCarousal(props) {
  const { data, heading , navigation , screenName } = props;
  
  const render = (data, index) => {
    const { image, subjectName } = data.item;
  
    return (
      <View style={{ marginLeft: 16  }}>
        <TouchableOpacity onPress={() => {navigation.navigate('ExamSection' , { screen: screenName  });
}}>
        <Image
          source={image}
          style={{ width: 302, height: 192 }}
          resizeMode="contain"
        />
        <Text style={{ fontSize: 13, top: -10 }}>{subjectName}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  





  return (
    <View style={{ marginTop:20 , marginBottom:20 }}>
      <Text style={{ top: 10, marginLeft: 16, fontSize: 22, lineHeight: 28 }}>
        {heading}
      </Text>
      <FlatList
        data={data}
        renderItem={render}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default CommonCarousal;
