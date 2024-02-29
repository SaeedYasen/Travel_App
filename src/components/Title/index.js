import React,{useEffect, useState} from "react";
import { SafeAreaView, Text} from "react-native";
import styles  from "./styles";
import { StatusBar } from "expo-status-bar";
const Title=({text})=>{
    const [stateText,setText] =useState('');
    useEffect(()=>{
        console.log('HelloUser');
        setText(text);
    },[text])
    const onTextPress=()=>{
        setText('Updated text');
    }
    return (
        <SafeAreaView>
            <Text onPress={onTextPress} style ={styles.title}>{stateText}</Text>
           

        </SafeAreaView>
        
    )
};
Title.defaultProps={
    text:'Default text'
}
export default Title;