import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
  logo: {
    height: 48,
    width: 48,

    marginBottom: 28,
    marginTop: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: fontFamily.bold,

    color: colors.gray[600],
  }, subtitle: {
    fontSize: 16,
    fontFamily: fontFamily.regular,

    color: colors.gray[500],
    marginTop: 12,
  }
});