import React from "react";
import { Text } from "react-native";
import styles from "./styles";

class Title extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text:'Default',
        }
    }
    componentDidMount(){

    }
    componentDidUpdate(){

    }
    componentWillUnmount(){
        
    }
    onTextPress=()=>{
        this.setState({
            text:'Updated'
        });
    }
    render(){
        const {text}=this.state;
        return(
            <Text onPress={this.onTextPress}style={styles.title}> {text}</Text>
        )
    }
}
export default Title;