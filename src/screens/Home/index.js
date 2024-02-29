import React from "react";
import { View, SafeAreaView} from "react-native";
import Title from "../../components/Title";
import TitleClass from "../../components/Title/classComponent";
const Home=()=>{
    return (
        <SafeAreaView>
            <View>
                <Title />
                <TitleClass text='class component' />
            </View>
        </SafeAreaView>
    )
};

export default Home;