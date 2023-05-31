import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import CommonCarousal from "../common/CommonCarousal";
import { examData } from "../data/examdata";

function ExamScreen({ navigation }) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <CommonCarousal
        data={examData}
        heading={"OOP Exams"}
        navigation={navigation}
        screenName={"ExamQuestion"}
      />
      <CommonCarousal
        data={examData}
        heading={"OOP Exams"}
        navigation={navigation}
        screenName={"ExamQuestion"}
      />
      <CommonCarousal
        data={examData}
        heading={"OOP Exams"}
        navigation={navigation}
        screenName={"ExamQuestion"}
      />
      <CommonCarousal
        data={examData}
        heading={"OOP Exams"}
        navigation={navigation}
        screenName={"WrittenExam"}
      />
      

    </ScrollView>
  );
}

export default ExamScreen;
