import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles";

export default function Punchline({punchline}){
    const [showPunchline, setShowPunchline] = useState(false)
 

    useEffect (() => {
        setShowPunchline(false)
    }, [punchline])


    return(
        <TouchableOpacity onPress={() => setShowPunchline(!showPunchline)}>
        <View style={showPunchline ? styles.punchlineBox : styles.punchlineBoxHidden}>
            <Text style={showPunchline ? styles.punchlineText : styles.punchlineTextHidden}>
            {showPunchline ? punchline : "Show Punchline"}
            </Text>
        </View>
        </TouchableOpacity>
    )

}
