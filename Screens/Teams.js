import React, { useContext, useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { getAllTeams } from "../api/team";
import NBACheckbox from "../components/NBACheckbox";
import NBAText from "../components/NBAText";
import Pane from "../components/Pane";
import themeContext from "../themeContext";

// const DATA = [
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     title: "Team 1",
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//     title: "Team 2",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72",
//     title: "Team 3",
//   },
// ];

function convertSlugToTeam(slug) {
  return slug
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const Item = ({ item, teams, setTeams }) => {
  return (
    <Pane
      style={{
        flexDirection: "row",
        backgroundColor: "#BEBBBB44",
        alignItems: "center",
        paddingHorizontal: 25,
      }}
    >
      <NBAText style={{ fontSize: 32, flex: 1 }}>{item.name}</NBAText>
      <NBACheckbox
        value={item.favorited}
        onChange={(val) => {
          setTeams(
            teams.map((tt) => {
              if (tt.slug === item.slug)
                return {
                  ...item,
                  favorited: !item.favorited,
                };

              return tt;
            })
          );
        }}
      />
    </Pane>
  );
};

const Teams = () => {
  const theme = useContext(themeContext);
  const [teams, setTeams] = useState([]);

  const renderItem = ({ item }) => {
    // const backgroundColor = item.id === selectedId ? "#DC7626" : "#FFFFFF";
    // const color = item.id === selectedId ? 'black' : 'black';

    return <Item item={item} teams={teams} setTeams={setTeams} />;
  };

  useEffect(() => {
    getAllTeams().then((tt) => {
      setTeams(
        tt.map((team) => ({
          name: convertSlugToTeam(team[0]),
          slug: team[0],
          url: team[1],
          favorited: true,
        }))
      );
    });
  }, []);

  return (
    <View style={{ backgroundColor: theme.background, flex: 1 }}>
      <Pane title="Tracked teams:">
        <FlatList
          data={teams}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Pane>
    </View>
  );
};

export default Teams;
