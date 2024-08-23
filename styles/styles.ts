import { StyleSheet } from "react-native";
import { colors } from "../constants";

const styles = StyleSheet.create({
    shadowPink: {
        shadowColor: colors.wbPink,
        shadowOffset: {
            width: 3,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 23,
    },
    shadowBlue: {
        shadowColor: colors.wbBlue,
        shadowOffset: {
            width: 3,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 23,
    },
    shadowHeader: {
        shadowColor: colors.wbWhite,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
    },
    shadowFooter: {
        shadowColor: colors.wbWhite,
        shadowOffset: {
            width: 0,
            height: -4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 11,
    }
})
export default styles