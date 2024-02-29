import React,{useEffect, useState} from "react";
import { SafeAreaView, Text} from "react-native";
import styles  from "./styles";
const Title=({text})=>{
    return (
        <SafeAreaView>
            <Text style ={styles.title}>{text}</Text>
           

        </SafeAreaView>
        
    )
};
Title.defaultProps={
    text:'Default text'
}
export default Title;