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

function QuestionCard(props) {
  const { item, index, setUserScore, userScore, setQueSelected, queSelected } =
    props;
  const { question, option, correctOption } = item;
  const [ansSelected, setAnsSelected] = useState(-1);
  return (
    <View
      style={{
        margin: 16,
        //   alignItems: "center",
        //   justifyContent: "center",
        backgroundColor: "white",
        padding: 16,
        borderRadius: 20,
      }}
    >
      <Text style={{ fontSize: 20, marginBottom: 8 }}>{question} ?</Text>
      {option.map((e, index) => {
        return (
          <TouchableOpacity
            onPress={() => {
              if (ansSelected === -1) {
                index + 1 === correctOption && setUserScore(userScore + 10);
                setAnsSelected(index);
                setQueSelected(queSelected + 1);
              }
            }}
            style={{ margin: 8 }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  backgroundColor: ansSelected === index ? "green" : "grey",
                  padding: 4,
                }}
              >
                Select
              </Text>
              <Text style={{ marginLeft: 16 }}>{e.option}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default QuestionCard;
