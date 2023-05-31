import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { examQuestion } from "../data/examquestion";
import { useState, useRef } from "react";
import QuestionCard from "./QuestionCard";

function ExamQuestion() {
  const [userScore, setUserScore] = useState(0);
  const [queSelected , setQueSelected] = useState(0);
  const [showText , setShowText] = useState("Show my score")

  const render = ({ item, index }) => {
    return (
      <QuestionCard
        item={item}
        index={index}
        setUserScore={setUserScore}
        userScore={userScore}
        setQueSelected={setQueSelected}
        queSelected={queSelected}
      />
    );
  };

  return (
    <>
      <FlatList renderItem={render} data={examQuestion} />
      <Text style={{alignSelf:'center', backgroundColor:'skyblue' , padding:10}} onPress={() => {
         queSelected === 10 && setShowText(`Your score is ${userScore}` )
      }}>{queSelected === 10 ? showText :'Please select all question to see score'}</Text>
    </>
  );
}

export default ExamQuestion;
