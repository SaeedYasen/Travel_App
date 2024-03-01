import React,{useEffect, useState} from "react";
import { SafeAreaView, Text} from "react-native";
import styles  from "./styles";
const Title=({text,style})=>{
    return (
        <SafeAreaView>
            <Text style ={[styles.title,style]}>{text}</Text>
           

        </SafeAreaView>
        
    )
};
Title.defaultProps={
    text:'Default text'
}
export default Title;