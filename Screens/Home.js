import { useContext, useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import NBAText from "../components/NBAText";
import Pane from "../components/Pane";
import themeContext from "../themeContext";
import Constants from "expo-constants";
import { getAllMatches } from "../api/match";

function convertSlugToTeam(slug) {
  let name = slug
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return { name, slug };
}

function isToday(someDate) {
  const today = new Date();
  return (
    someDate.getDate() == today.getDate() &&
    someDate.getMonth() == today.getMonth() &&
    someDate.getFullYear() == today.getFullYear()
  );
}

// const DATA = [
//   ["chicago_bulls", "toronto_raptors", "Fri, Oct 22, 2021", "7:30p"],
//   ["chicago_bulls", "new_york_knicks", "Wed, Oct 20, 2021", "7:30p"],
//   ["chicago_bulls", "houston_rockets", "Sun, Oct 24, 2021", "7:00p"],
//   ["chicago_bulls", "charlotte_hornets", "Mon, Oct 25, 2021", "7:00p"],
//   ["chicago_bulls", "washington_wizards", "Wed, Oct 27, 2021", "7:30p"],
// ];

const Item = ({ item }) => {
  return (
    <Pane
      style={{
        flexDirection: "row",
        backgroundColor: "#BEBBBB44",
        alignItems: "center",
        paddingHorizontal: 25,
      }}
    >
      <NBAText style={{ flex: 1 }}>
        {item.teams[0].name} - {item.teams[1].name}
      </NBAText>
      {!isToday(item.date) ? (
        <NBAText>{item.date.toLocaleDateString()} | </NBAText>
      ) : null}
      <NBAText>{item.time}</NBAText>
    </Pane>
  );
};

const Home = ({ navigation }) => {
  const theme = useContext(themeContext);
  const [games, setGames] = useState([]);

  const renderItem = ({ item }) => {
    // const backgroundColor = item.id === selectedId ? "#DC7626" : "#FFFFFF";
    // const color = item.id === selectedId ? 'black' : 'black';

    return (
      <Item
        item={item}
        // onPress={() => setSelectedId(item.id)}
      />
    );
  };

  useEffect(() => {
    getAllMatches().then((gg) => {
      setGames(gg);
    });
  }, [])

  console.log(games.map((match) => ({
    teams: [convertSlugToTeam(match[0]), convertSlugToTeam(match[1])],
    date: new Date(match[2]),
    time: match[3],
  }))
  .sort((a, b) => a.date - b.date))

  return (
    <View style={{ backgroundColor: theme.background, flex: 1 }}>
      <Pane title="Tracked matches:">
        <FlatList
          data={games
            .map((match) => ({
              teams: [convertSlugToTeam(match[0]), convertSlugToTeam(match[1])],
              date: new Date(match[2]),
              time: match[3],
            }))
            .sort((a, b) => b.date - a.date)
            .filter(a => (a.date.getFullYear() >= 2022) )
          }
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Pane>
    </View>
  );
};

export default Home;
