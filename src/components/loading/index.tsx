import { ActivityIndicator } from "react-native";
import { styles } from "./styles";

export function Loading(){
    return(
        <ActivityIndicator style={styles.container} color={"#0046B3"} size={40}/>
    )
}