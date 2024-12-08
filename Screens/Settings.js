import { View, Text, Switch, StyleSheet, Button } from "react-native";
import React, { useState, useContext } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import EventEmitter from "react-native-eventemitter";
import themeContext from "../themeContext";

import Hyperlink from "react-native-hyperlink";
import NBAButton, { ButtonTypes } from "../components/NBAButton";
import NBAText from "../components/NBAText";
import Pane from "../components/Pane";

const Settings = ({ navigation }) => {
  const theme = useContext(themeContext);
  const [mode, setMode] = useState(false);

  const [timeMode, setTimeMode] = useState("time");
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());

  const onChangeFrom = (event, selectedDate) => {
    setShow1(false);
    setDateFrom(selectedDate);
  };

  const onChangeTo = (event, selectedDate) => {
    setShow2(false);
    setDateTo(selectedDate);
  };
  const showMode1 = (currentMode) => {
    setShow1(true);
    setTimeMode(currentMode);
  };
  const showMode2 = (currentMode) => {
    setShow2(true);
    setTimeMode(currentMode);
  };
  const showTimepicker1 = () => {
    showMode1("time");
  };
  const showTimepicker2 = () => {
    showMode2("time");
  };

  return (
    <View style={{ backgroundColor: theme.background, flex: 1 }}>
      <Pane title="Set tracked time range:">
        <View style={{ flexDirection: "row"}}>
          <View style={{ flex: 1, flexDirection: "column", marginHorizontal: 20}}>
            <NBAText
              style={{
                padding: 15,
                fontSize: 25,
                textAlign: "center",
                width: "100%",
              }}
            >
              {dateFrom.getHours()}:{dateFrom.getMinutes()}
            </NBAText>
            <NBAButton
              title={"From"}
              type={ButtonTypes.PRIMARY}
              onPress={showTimepicker1}
            />
            {show1 && (
              <DateTimePicker
                value={dateFrom}
                mode={timeMode}
                is24Hour={true}
                onChange={onChangeFrom}
              />
            )}
          </View>
          <View style={{ flex: 1, flexDirection: "column", marginHorizontal: 20 }}>
            <NBAText
              style={{
                padding: 15,
                fontSize: 25,
                textAlign: "center",
                width: "100%",
                color: theme.color,
              }}
            >
              {dateTo.getHours()}:{dateTo.getMinutes()}
            </NBAText>
            <NBAButton
              title={"To"}
              type={ButtonTypes.PRIMARY}
              onPress={showTimepicker2}
            />
            {show2 && (
              <DateTimePicker
                value={dateTo}
                mode={timeMode}
                is24Hour={true}
                onChange={onChangeTo}
              />
            )}
          </View>
        </View>
      </Pane>

      <Pane title="Use Dark Theme:">
        <View styles={{flexDirection: "column"}}>
          <Switch
            value={mode}
            onValueChange={(value) => {
            setMode(value);
            EventEmitter.emit("changeTheme", value);
          }}
        />
        </View>
      </Pane>

      <Pane title="About Us:">
        <NBAText>
          Bascores v1.0, © 2022 8Studios
        </NBAText>
        <NBAText>
          David R., Kevin K., Milan. R., Niko G., Rok F., Tadej H., Tadej M. &
          Zdravko B.
        </NBAText>
      </Pane>
    </View>
  );
};

export default Settings;
