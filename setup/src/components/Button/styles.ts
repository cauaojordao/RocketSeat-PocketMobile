import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
  container: {
    height: 56,
    maxHeight: 56,
    borderRadius: 10,

    backgroundColor: colors.green.base,

    justifyContent: "center",
    alignItems: "center",
    gap: 14,
  },
  title: {
    color: colors.gray[100],
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
  },
});
