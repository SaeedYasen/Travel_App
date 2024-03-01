import React, { useEffect, useState } from "react";
import { View, SafeAreaView, FlatList, ScrollView} from "react-native";
import Title from "../../components/Title";
import styles from "./styles"
import Categories from "../../components/Categories";
import AttractionCard from "../../components/AttractionCard";
import jsonData from '../../data/attractions.json'
const Home=()=>{
    const [selectedCategory,setSelectedCategory]=useState('All')
    const [data,setData]= useState([]);
    useEffect(()=>{
        console.log('jsonData :>>',jsonData);
        setData(jsonData)
    })
    return (
        <SafeAreaView style={styles.container}>
                    <FlatList showsVerticalScrollIndicator={false}
                        data={data}
                        numColumns={2}
                        style={{flexGrow:1}}
                        ListHeaderComponent={(
                            <>
                            <View>
                                <Title text="where do" style={{fontWeight:"normal"}}/>
                                <Title text="you want to go"/>
                                <Title text="Explore Attractions" style={styles.subtitle}/>
                                <Categories 
                                    selectedCategory={selectedCategory}
                                    onCategoryPress={setSelectedCategory}
                                    categories={['All','Popular','Historical','Random','others','trending']}

                                    />
                                </View>
                                </>
                        )}
                        keyExtractor={item => String(item?.id)}
                        renderItem={({ item, index }) => (
                            <AttractionCard
                            key={item.id}
                            style={index % 2 === 0 ? { marginRight: 12, marginLeft:32}:{marginRight:32}  }
                            title={item.name}
                            subtitle={item.city}
                            imageSrc={item.images?.length ? item.images[0] : null}
                            />
                        )}
                />

                   
               
            
        </SafeAreaView>
    )
};

export default React.memo(Home);