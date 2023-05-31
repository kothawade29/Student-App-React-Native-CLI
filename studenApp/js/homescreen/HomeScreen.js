import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View , ScrollView } from "react-native";
import CommonCarousal from "../common/CommonCarousal";
import { examData } from "../data/examdata";
import TopperSection from "./TopperSection";
import { topperData } from "../data/topperdata";
import CollegeSection from "./CollegeSection";
import { collegeData } from "../data/collegeData";


function HomeScreen({ navigation }) {
  return (
    <ScrollView style={{flex:1 , backgroundColor:'white'}}>
      <CommonCarousal
        data={examData}
        heading={"Exam Series"}
        navigation={navigation}
        screenName={"Exam"}
      />
      <TopperSection data={topperData} heading={"Toppers"} navigation={navigation}/>
      <CollegeSection data={collegeData} heading={"Colleges"}/>
      <CommonCarousal
        data={examData}
        heading={"Events"}
        navigation={navigation}
      />
      
    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    height: 100,
  },
});
