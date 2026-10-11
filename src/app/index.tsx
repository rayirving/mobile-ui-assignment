import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.screen,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <View style={styles.header}></View>
      <ScrollView contentContainerStyle={{ gap: 30 }}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={[
            styles.horizontalScrollBar,
            styles.bodySection,
            styles.topBodySection,
          ]}
        >
          <View style={[styles.body_container_large, styles.body_box]}>
            <Image
              source={{
                uri: "https://images.chesscomfiles.com/uploads/v1/user/596498884.29b3ac57.384x384o.38afbf9fb911.png",
              }}
              style={[styles.networkImageIcon]}
            />
            <Text>Play Bots</Text>
            <Text>Count Morphy</Text>
          </View>
          <View style={[styles.body_container_large, styles.body_box]}>
            <Image
              source={{
                uri: "https://assets-coaches.chess.com/image/coachlevy.png?v=9f98615d",
              }}
              style={[styles.networkImageIcon]}
            />
            <Text>Play Coach</Text>
            <Text>Levy</Text>
          </View>
          <View style={[styles.body_container_long, styles.body_box]}></View>
          <View style={[styles.body_container_large, styles.body_box]}>
            <Image
              source={require("../../assets/images/calendar-dailypuzzle.png")}
              style={[styles.networkImageIcon]}
            />
            <Text>Play Coach</Text>
            <Text>Levy</Text>
          </View>
          <View style={[styles.body_container_long, styles.body_box]}></View>
        </ScrollView>

        <View style={[styles.namedSection, styles.bodySection]}>
          <Text style={styles.body_heading_text}>Recommended Match</Text>
          <View style={[styles.recommended_section, styles.staticBar]}>
            <Image
              source={{
                uri: "https://images.chesscomfiles.com/uploads/v1/user/279806493.53f4c4e2.200x200o.7a09133998d7.jpg",
              }}
              style={[styles.networkImageLarge]}
            />
            <View style={styles.recommended_section_body}>
              <View>
                <Text>⭐the_hamelon🇭🇺⭐</Text>
                <Text>677 ◌3 days</Text>
                <Text>SIMILAR SKILL</Text>
              </View>
              <View>
                
                <Image
                  source={{
                    uri: "https://banner2.cleanpng.com/20240122/qkb/transparent-chessboard-icon-black-cat-close-up-shot-white-patc-close-up-shot-of-white-patched-black-1710911149988.webp",
                  }}
                  style={[styles.networkImageLarge]}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.namedSection, styles.bodySection]}>
          <Text style={styles.body_heading_text}>Stats</Text>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.horizontalScrollBar}
          >
            <View style={[styles.body_container_small, styles.body_box]}></View>
            <View style={[styles.body_container_small, styles.body_box]}></View>
            <View style={[styles.body_container_small, styles.body_box]}></View>
            <View style={[styles.body_container_small, styles.body_box]}></View>
            <View style={[styles.body_container_small, styles.body_box]}></View>
          </ScrollView>
        </View>

        <View style={[styles.namedSection, styles.bodySection]}>
          <Text style={styles.body_heading_text}>Friends</Text>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.horizontalScrollBar}
          >
            <View style={[styles.body_container_large, styles.body_box]}></View>
            <View style={[styles.body_container_large, styles.body_box]}></View>
            <View style={[styles.body_container_large, styles.body_box]}></View>
            <View style={[styles.body_container_large, styles.body_box]}></View>
            <View style={[styles.body_container_large, styles.body_box]}></View>
          </ScrollView>
        </View>

        <View
          style={[
            styles.namedSection,
            styles.bodySection,
            styles.bottomBodySection,
          ]}
        >
          <Text style={styles.body_heading_text}>Game History</Text>
          <View>
            <View
              style={[styles.game_history_log, styles.separation_line]}
            ></View>
            <View
              style={[styles.game_history_log, styles.separation_line]}
            ></View>
            <View
              style={[styles.game_history_log, styles.separation_line]}
            ></View>
            <View
              style={[styles.game_history_log, styles.separation_line]}
            ></View>
            <View
              style={[styles.game_history_log, styles.separation_line]}
            ></View>
            <View
              style={[styles.game_history_log, styles.separation_line]}
            ></View>
            <View
              style={[styles.game_history_log, styles.separation_line]}
            ></View>
            <View
              style={[styles.game_history_log, styles.separation_line]}
            ></View>
            <View
              style={[styles.game_history_log, styles.separation_line]}
            ></View>
            <View style={styles.game_history_log}></View>
            <View style={styles.grey_button}></View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View></View>
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 55,
    width: "100%",
    backgroundColor: "#000000",
  },
  footer: {
    marginBottom: "auto",
    height: 140,
    width: "100%",
    backgroundColor: "#000000",
  },

  topBodySection: {
    paddingTop: 25,
  },

  bottomBodySection: {
    paddingBottom: 10,
  },

  bodySection: {
    paddingLeft: 10,
    paddingRight: 10,
  },

  horizontalScrollBar: {
    gap: 10,
  },
  staticBar: {
    backgroundColor: "#272727",
    borderRadius: 10,
  },

  namedSection: {
    flexDirection: "column",
    gap: 8,
  },

  networkImageIcon: {
    width: 50,
    height: 50,
  },
  networkImageLarge: {
    width: 75,
    height: 75,
    borderRadius: 10,
  },

  body_box: {
    backgroundColor: "#272727",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  body_container_large: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  body_container_long: {
    width: 300,
    height: 150,
    borderRadius: 10,
  },
  body_container_small: {
    width: 110,
    height: 110,
    borderRadius: 8,
  },
  recommended_section: {
    width: "100%",
    height: 75,
    flexDirection: "row",
  },
  recommended_section_body: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },

  separation_line: {
    borderBottomWidth: 1,
    borderBottomColor: "#5f5f5f",
  },
  game_history_log: {
    height: 50,
    width: "100%",
  },
  grey_button: {
    color: "#FFFFFF",
    backgroundColor: "#3E3E3F",
    width: "100%",
    height: 45,
    borderRadius: 10,
  },

  screen: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  body_heading_text: {
    color: "#FFFFFF",
  },
});
