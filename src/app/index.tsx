import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.screen,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <View style={[styles.header, styles.inset]}>
        <View style={styles.headerLeft}>
          <Image
            source={{
              uri: "https://images.chesscomfiles.com/uploads/v1/user/279806493.53f4c4e2.200x200o.7a09133998d7.jpg",
            }}
            style={styles.avatarSmall}
          />
          <Image
            source={{
              uri: "https://static.wikia.nocookie.net/chess/images/3/32/LightKnight.png/revision/latest?cb=20230320152142",
            }}
            style={styles.iconSmall}
          />
          <Image
            source={require("../../assets/images/fire.png")}
            style={styles.iconSmall}
          />
          <Text style={styles.mainText}>355</Text>
        </View>
        <View style={styles.headerRight}>
          <Image
            source={require("../../assets/images/diamond.png")}
            style={styles.iconSmall}
          />
          <Image
            source={require("../../assets/images/group.png")}
            style={styles.iconSmall}
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[styles.scrollbar, styles.inset]}
        >
          <View style={[styles.card, styles.cardLarge]}>
            <Image
              source={{
                uri: "https://images.chesscomfiles.com/uploads/v1/user/596498884.29b3ac57.384x384o.38afbf9fb911.png",
              }}
              style={styles.iconStandard}
            />
            <Text style={styles.mainText}>Play Bots</Text>
            <Text style={styles.subText}>Count Morphy</Text>
          </View>
          <View style={[styles.card, styles.cardLarge]}>
            <Image
              source={{
                uri: "https://assets-coaches.chess.com/image/coachlevy.png?v=9f98615d",
              }}
              style={styles.iconStandard}
            />
            <Text style={styles.mainText}>Play Coach</Text>
            <Text style={styles.subText}>Levy</Text>
          </View>
          <View style={[styles.card, styles.cardWide]} />
          <View style={[styles.card, styles.cardLarge]}>
            <Image
              source={require("../../assets/images/calendar-dailypuzzle.png")}
              style={styles.iconStandard}
            />
            <Text style={styles.mainText}>Play Coach</Text>
            <Text style={styles.subText}>Levy</Text>
          </View>
          <View style={[styles.card, styles.cardWide]} />
        </ScrollView>

        <View style={[styles.section, styles.inset]}>
          <Text style={styles.sectionHeading}>Recommended Match</Text>
          <View style={styles.recommendedCard}>
            <Image
              source={{
                uri: "https://images.chesscomfiles.com/uploads/v1/user/279806493.53f4c4e2.200x200o.7a09133998d7.jpg",
              }}
              style={styles.avatarLarge}
            />
            <View style={styles.recommendedBody}>
              <View>
                <Text style={styles.mainText}>⭐the_hamelon🇭🇺⭐</Text>
                <Text style={styles.subText}>677 ◌3 days</Text>
                <Text style={styles.tagText}>SIMILAR SKILL</Text>
              </View>
              <View>
                <Image
                  source={require("../../assets/images/chessboard.png")}
                  style={styles.iconStandard}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.section]}>
          <Text style={[styles.sectionHeading, styles.inset]}>Stats</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={[styles.scrollbar, styles.inset]}
          >
            <View style={[styles.card, styles.cardSmall]}>
              <Image />
              <Text style={styles.mainText}>151</Text>
              <Text style={styles.subText}>Rapid</Text>
            </View>
            <View style={[styles.card, styles.cardSmall]}>
              <Image />
              <Text style={styles.mainText}>Daily</Text>
              <Text style={styles.subText}>Play 2 Games</Text>
            </View>
            <View style={[styles.card, styles.cardSmall]}>
              <Image />
              <Text style={styles.mainText}>204</Text>
              <Text style={styles.subText}>Bullet</Text>
            </View>
            <View style={[styles.card, styles.cardSmall]}>
              <Image />
              <Text style={styles.mainText}>Blitz</Text>
              <Text style={styles.subText}>Play 5 Games</Text>
            </View>
            <View style={[styles.card, styles.cardSmall]}>
              <Image />
              <Text style={styles.mainText}>982</Text>
              <Text style={styles.subText}>Puzzles</Text>
            </View>
            <View style={[styles.card, styles.cardSmall]}>
              <Image />
              <Text style={styles.mainText}>All Stats</Text>
            </View>
          </ScrollView>
        </View>

        <View style={[styles.section]}>
          <Text style={[styles.sectionHeading, styles.inset]}>Friends</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={[styles.scrollbar, styles.inset]}
          >
            <View style={[styles.card, styles.cardLarge]}>
              <Image />
              <Text>Name</Text>
              <Text>Online 1 month ago</Text>
              <View>
                <Text>Challenge</Text>
              </View>
            </View>
            <View style={[styles.card, styles.cardLarge]}>
              <Image />
              <Text>Name</Text>
              <Text>Online 1 month ago</Text>
              <View>
                <Text>Challenge</Text>
              </View>
            </View>
            <View style={[styles.card, styles.cardLarge]}>
              <Image />
              <Text>Name</Text>
              <Text>Online 1 month ago</Text>
              <View>
                <Text>Challenge</Text>
              </View>
            </View>
            <View style={[styles.card, styles.cardLarge]}>
              <Image />
              <Text>Name</Text>
              <Text>Online 1 month ago</Text>
              <View>
                <Text>Challenge</Text>
              </View>
            </View>
            <View style={[styles.card, styles.cardLarge]}>
              <Image />
              <Text>Name</Text>
              <Text>Online 1 month ago</Text>
              <View>
                <Text>Challenge</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={[styles.section, styles.inset]}>
          <Text style={styles.sectionHeading}>Game History</Text>
          <View>
            <View style={[styles.historyRow, styles.divider]}>
              <View style={styles.historyInfo}>
                <Image
                  source={require("../../assets/images/robot.png")}
                  style={styles.avatarSmall}
                />
                <Image
                  source={{
                    uri: "https://images.chesscomfiles.com/uploads/v1/user/66746128.1e61845f.384x384o.8eb9b93553c3.png",
                  }}
                  style={styles.avatarSmall}
                />
                <Text style={styles.mainText}>Janjay</Text>
                <Text style={styles.secondaryText}>(700)</Text>
              </View>
              <View style={styles.historyActions}>
                <Image
                  source={require("../../assets/images/plus.png")}
                  style={styles.iconXSmall}
                />
                <View style={[styles.primaryButton, styles.historyButton]}>
                  <Image
                    source={require("../../assets/images/star.png")}
                    style={styles.iconXSmall}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.historyRow, styles.divider]}>
              <View style={styles.historyInfo}>
                <Image
                  source={require("../../assets/images/robot.png")}
                  style={styles.avatarSmall}
                />
                <Image
                  source={{
                    uri: "https://images.chesscomfiles.com/uploads/v1/user/66746068.bb225d6f.384x384o.647464762a5d.png",
                  }}
                  style={styles.avatarSmall}
                />
                <Text style={styles.mainText}>Nelson</Text>
                <Text style={styles.secondaryText}>(1300)</Text>
              </View>
              <View style={styles.historyActions}>
                <Image
                  source={require("../../assets/images/plus.png")}
                  style={styles.iconXSmall}
                />
                <View style={[styles.primaryButton, styles.historyButton]}>
                  <Image
                    source={require("../../assets/images/star.png")}
                    style={styles.iconXSmall}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.historyRow, styles.divider]}>
              <View style={styles.historyInfo}>
                <Image
                  source={require("../../assets/images/robot.png")}
                  style={styles.avatarSmall}
                />
                <Image
                  source={{
                    uri: "https://images.chesscomfiles.com/uploads/v1/user/66746128.1e61845f.384x384o.8eb9b93553c3.png",
                  }}
                  style={styles.avatarSmall}
                />
                <Text style={styles.mainText}>Janjay</Text>
                <Text style={styles.secondaryText}>(700)</Text>
              </View>
              <View style={styles.historyActions}>
                <Image
                  source={require("../../assets/images/plus.png")}
                  style={styles.iconXSmall}
                />
                <View style={[styles.primaryButton, styles.historyButton]}>
                  <Image
                    source={require("../../assets/images/star.png")}
                    style={styles.iconXSmall}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.historyRow, styles.divider]}>
              <View style={styles.historyInfo}>
                <Image
                  source={require("../../assets/images/robot.png")}
                  style={styles.avatarSmall}
                />
                <Image
                  source={{
                    uri: "https://images.chesscomfiles.com/uploads/v1/user/66746152.91c8d55b.384x384o.e1c49c12bfb3.png",
                  }}
                  style={styles.avatarSmall}
                />
                <Text style={styles.mainText}>Elani</Text>
                <Text style={styles.secondaryText}>(400)</Text>
              </View>
              <View style={styles.historyActions}>
                <Image
                  source={require("../../assets/images/plus.png")}
                  style={styles.iconXSmall}
                />
                <View style={[styles.primaryButton, styles.historyButton]}>
                  <Image
                    source={require("../../assets/images/star.png")}
                    style={styles.iconXSmall}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.historyRow, styles.divider]}>
              <View style={styles.historyInfo}>
                <Image
                  source={require("../../assets/images/robot.png")}
                  style={styles.avatarSmall}
                />
                <Image
                  source={{
                    uri: "https://assets-coaches.chess.com/image/coachlevy.png?v=9f98615d",
                  }}
                  style={styles.avatarSmall}
                />
                <Text style={styles.mainText}>Levy</Text>
                <Text style={styles.secondaryText}>(1600)</Text>
              </View>
              <View style={styles.historyActions}>
                <Image
                  source={require("../../assets/images/minus.png")}
                  style={styles.iconXSmall}
                />
                <View style={[styles.primaryButton, styles.historyButton]}>
                  <Image
                    source={require("../../assets/images/star.png")}
                    style={styles.iconXSmall}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.historyRow, styles.divider]}>
              <View style={styles.historyInfo}>
                <Image
                  source={require("../../assets/images/robot.png")}
                  style={styles.avatarSmall}
                />
                <Image
                  source={{
                    uri: "https://images.chesscomfiles.com/uploads/v1/user/595311444.b579a591.384x384o.81a9fc9a9349.png",
                  }}
                  style={styles.avatarSmall}
                />
                <Text style={styles.mainText}>Mack Hollins</Text>
                <Text style={styles.secondaryText}>(1400)</Text>
              </View>
              <View style={styles.historyActions}>
                <Image
                  source={require("../../assets/images/plus.png")}
                  style={styles.iconXSmall}
                />
                <View style={[styles.primaryButton, styles.historyButton]}>
                  <Image
                    source={require("../../assets/images/star.png")}
                    style={styles.iconXSmall}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.historyRow, styles.divider]}>
              <View style={styles.historyInfo}>
                <Image
                  source={require("../../assets/images/robot.png")}
                  style={styles.avatarSmall}
                />
                <Image
                  source={{
                    uri: "https://images.chesscomfiles.com/uploads/v1/user/595311444.b579a591.384x384o.81a9fc9a9349.png",
                  }}
                  style={styles.avatarSmall}
                />
                <Text style={styles.mainText}>Mack Hollins</Text>
                <Text style={styles.secondaryText}>(1400)</Text>
              </View>
              <View style={styles.historyActions}>
                <Image
                  source={require("../../assets/images/plus.png")}
                  style={styles.iconXSmall}
                />
                <View style={[styles.primaryButton, styles.historyButton]}>
                  <Image
                    source={require("../../assets/images/star.png")}
                    style={styles.iconXSmall}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.historyRow, styles.divider]}>
              <View style={styles.historyInfo}>
                <Image
                  source={require("../../assets/images/robot.png")}
                  style={styles.avatarSmall}
                />
                <Image
                  source={{
                    uri: "https://images.chesscomfiles.com/uploads/v1/user/595311444.b579a591.384x384o.81a9fc9a9349.png",
                  }}
                  style={styles.avatarSmall}
                />
                <Text style={styles.mainText}>Mack Hollins</Text>
                <Text style={styles.secondaryText}>(1400)</Text>
              </View>
              <View style={styles.historyActions}>
                <Image
                  source={require("../../assets/images/plus.png")}
                  style={styles.iconXSmall}
                />
                <View style={[styles.primaryButton, styles.historyButton]}>
                  <Image
                    source={require("../../assets/images/star.png")}
                    style={styles.iconXSmall}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.historyRow, styles.divider]}>
              <View style={styles.historyInfo}>
                <Image
                  source={require("../../assets/images/robot.png")}
                  style={styles.avatarSmall}
                />
                <Image
                  source={{
                    uri: "https://assets-coaches.chess.com/image/coachlevy.png?v=9f98615d",
                  }}
                  style={styles.avatarSmall}
                />
                <Text style={styles.mainText}>Levy</Text>
                <Text style={styles.secondaryText}>(1600)</Text>
              </View>
              <View style={styles.historyActions}>
                <Image
                  source={require("../../assets/images/minus.png")}
                  style={styles.iconXSmall}
                />
                <View style={[styles.primaryButton, styles.historyButton]}>
                  <Image
                    source={require("../../assets/images/star.png")}
                    style={styles.iconXSmall}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.historyRow, styles.divider]}>
              <View style={styles.historyInfo}>
                <Image
                  source={require("../../assets/images/robot.png")}
                  style={styles.avatarSmall}
                />
                <Image
                  source={{
                    uri: "https://images.chesscomfiles.com/uploads/v1/user/596498326.b2c9b107.384x384o.0d2a8b90d856.png",
                  }}
                  style={styles.avatarSmall}
                />
                <Text style={styles.mainText}>Checkacabra</Text>
                <Text style={styles.secondaryText}>(1250)</Text>
              </View>
              <View style={styles.historyActions}>
                <Image
                  source={require("../../assets/images/plus.png")}
                  style={styles.iconXSmall}
                />
                <View style={[styles.primaryButton, styles.historyButton]}>
                  <Image
                    source={require("../../assets/images/star.png")}
                    style={styles.iconXSmall}
                  />
                </View>
              </View>
            </View>

            <View style={styles.secondaryButton}>
              <Text style={styles.tertiaryText}>View All Games</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Alert</Text>
        </View>
        <View style={styles.navRow}>
          <View>
            <Image />
            <Text style={styles.mainText}>Home</Text>
          </View>
          <View>
            <Image />
            <Text style={styles.mainText}>Puzzles</Text>
          </View>
          <View>
            <Image />
            <Text style={styles.mainText}>Learn</Text>
          </View>
          <View>
            <Image />
            <Text style={styles.mainText}>Watch</Text>
          </View>
          <View>
            <Image />
            <Text style={styles.mainText}>More</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const colors = {
  background: "#1E1E1E",
  bar: "#000000",
  surface: "#272727",
  divider: "#5F5F5F",
  textPrimary: "#FFFFFF",
  textSecondary: "#929292",
  green: "#6DA54A",
  grey: "#3E3E3F",
  tagText: "rgba(61, 175, 82, 0.9)",
  tagBackground: "rgba(34, 77, 42, 0.35)",
};

const radius = {
  sm: 8,
  md: 10,
};

const styles = StyleSheet.create({
  // Screen structure
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    height: 55,
    backgroundColor: colors.background,
    flexDirection: "row",
    marginVertical: 4,
  },
  headerLeft: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 3,
  },
  headerRight: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 3,
  },
  scrollContent: {
    gap: 30,
    paddingTop: 20,
    paddingBottom: 15,
  },
  footer: {
    height: 140,
    backgroundColor: colors.background,
    paddingHorizontal: 10,
    paddingTop: 14,
    paddingBottom: 8,
    justifyContent: "space-between",
  },

  // Sections
  section: {
    gap: 8,
  },
  inset: {
    paddingHorizontal: 10,
  },
  sectionHeading: {
    fontWeight: "700",
    color: colors.textPrimary,
  },
  scrollbar: {
    gap: 10,
  },

  // Cards
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    justifyContent: "center",
    alignItems: "center",
  },
  cardSmall: {
    width: 110,
    height: 110,
    borderRadius: radius.sm,
  },
  cardLarge: {
    width: 150,
    height: 150,
  },
  cardWide: {
    width: 300,
    height: 150,
  },
  cardLog: {},
  recommendedCard: {
    height: 75,
    flexDirection: "row",
    backgroundColor: colors.surface,
    borderRadius: radius.md,
  },
  recommendedBody: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },

  // Game history
  historyRow: {
    height: 60,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  historyInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 5,
  },

  historyActions: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
  },
  historyButton: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },

  // Footer nav
  navRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  // Buttons
  primaryButton: {
    height: 55,
    backgroundColor: colors.green,
    borderRadius: radius.md,
    justifyContent: "center",
  },
  primaryButtonText: {
    color: colors.textPrimary,
    fontSize: 22,
    fontWeight: "900",
    alignSelf: "center",
  },
  secondaryButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    marginTop: 10,
    backgroundColor: colors.grey,
    borderRadius: radius.sm,
  },

  // Text
  mainText: {
    fontWeight: "700",
    color: colors.textPrimary,
    fontSize: 14,
  },
  secondaryText: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  tertiaryText: {
    fontWeight: "500",
    color: colors.textPrimary,
    fontSize: 14,
  },
  subText: {
    color: colors.textSecondary,
    fontSize: 12,
  },

  tagText: {
    fontSize: 12,
    color: colors.tagText,
    backgroundColor: colors.tagBackground,
    padding: 1,
    alignSelf: "flex-start",
  },

  // Images
  iconStandard: {
    width: 50,
    height: 50,
  },
  iconSmall: {
    width: 30,
    height: 30,
  },
  iconXSmall: {
    width: 20,
    height: 20,
  },
  avatarLarge: {
    width: 75,
    height: 75,
    borderRadius: radius.md,
  },
  avatarSmall: {
    width: 35,
    height: 35,
    borderRadius: radius.sm,
  },
});
