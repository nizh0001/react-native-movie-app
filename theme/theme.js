import { createTheme } from "@rneui/themed";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const theme = createTheme({
  components: {
    Card: {
      containerStyle: {
        backgroundColor: "#F7F7F7",
        width: 250,
        height: 430,
        borderWidth: 0,
        borderColor: "transparent",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 6,
        marginBottom: 32,
        borderRadius: 16,
      },
    },
    CardImage: {
      style: {
        width: "100%",
        height: 300,
        borderRadius: 8,
        resizeMode: "cover",
        aspectRatio: 3 / 4,
      },
    },

    CardTitle: {
      style: {
        fontFamily: "fontBold",
        fontSize: 16,
        marginTop: 8,
        marginBottom: 4,
        textAlign: "left",
      },
    },

    Text: {
      style: {
        fontFamily: "fontRegular",
        fontSize: 14,
        color: "grey",
        marginBottom: 8,
      },
    },

    Button: {
      buttonStyle: {
        borderRadius: 8,
      },
      titleStyle: {
        fontFamily: "fontRegular",
        fontSize: 18,
      },
      ViewComponent: LinearGradient,
      linearGradientProps: {
        colors: ["#5C258D", "#4389A2"],
        start: { x: 0, y: 0.5 },
        end: { x: 1, y: 0.5 },
      },
    },

    Icon: {
      iconStyle: {
        color: "white",
        marginRight: 10,
      },
    },

    DialogTitle: {
      titleStyle: {
        textAlign: "center",
        fontFamily: "fontBold",
        fontSize: 18,
        padding: 8,
      },
    },

    DialogButton: {
      titleStyle: {
        fontFamily: "fontRegular",
        fontSize: 18,
      },
    },
  },
  darkColors: {
    background: "#2A004E",
    primary: "#D2E0FB",
    secondary: "#F95454",
  },
  lightColors: {
    background: "#D2E0FB",
    primary: "#4F1787",
    secondary: "#F95454",
  },
});

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: theme.lightColors.background,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  watchScreenContainer: {
    flex: 1,
    backgroundColor: theme.lightColors.background,
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  fab: {
    position: "absolute",
    bottom: 40,
    right: 30,
    backgroundColor: theme.lightColors.primary,
    borderRadius: 50,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    fontFamily: "fontRegular",
    fontSize: 20,
    textAlign: "center",
    padding: 24,
  },
  topText: {
    fontFamily: "fontRegular",
    fontSize: 18,
    padding: 16,
  },
  boldTopText: {
    fontSize: 24,
    fontFamily: "fontBold",
    color: theme.lightColors.secondary,
  },
  nameTopText: {
    fontFamily: "fontRegular",
    fontSize: 16,
    textAlign: "left",
    marginTop: 16,
  },
  nameBoldTopText: {
    fontFamily: "fontBold",
    fontSize: 18,
  },
  video: {
    width: 350,
    height: 250,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#000",
  },

  videoContainer: {
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#000",
    marginVertical: 24,
  },
  textDialog: {
    fontSize: 16,
    textAlign: "left",
    marginBottom: 10,
  },
  buttonContainerDialog: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  inputDialog: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
    fontFamily: "fontRegular",
  },
  buttonCancelStyle: {
    color: "#F95454",
    fontFamily: "fontRegular",
    fontSize: 18,
  },
  buttonOkStyle: {
    color: "#4F1787",
    fontFamily: "fontRegular",
    fontSize: 18,
  },
});
