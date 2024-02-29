import React, { useEffect, useState } from "react";
import { View, SafeAreaView} from "react-native";
import Title from "../../components/Title";
import TitleClass from "../../components/Title/classComponent";
const Home=()=>{
    const[title,setTitle]=useState('My First Component')
    useEffect(()=>{
        setTimeout(()=>{
            setTitle('Updated Prop')
        },3000);
    },[]);
    return (
        <SafeAreaView>
            <View>
                <Title text={title}/>
                <TitleClass text='class component' />
            </View>
        </SafeAreaView>
    )
};

export default Home;