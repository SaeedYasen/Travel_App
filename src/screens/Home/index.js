import React, { useEffect, useState } from "react";
import { View, SafeAreaView, FlatList, Text} from "react-native";
import Title from "../../components/Title";
import styles from "./styles"
import Categories from "../../components/Categories";
import AttractionCard from "../../components/AttractionCard";
import jsonData from '../../data/attractions.json'
import category from '../../data/category.json'
const All="All";
const Home=()=>{
    const [selectedCategory,setSelectedCategory]=useState(All)
    const [data,setData]= useState([]);
    useEffect(()=>{
        setData(jsonData)
    },[])
    useEffect(()=>{
        if(selectedCategory===All){
            setData(jsonData)
        }else{
            const filteredData=jsonData?.filter(item=> item?.categories?.includes(selectedCategory));
            setData(filteredData);
        }
    },[selectedCategory])
    return (
        <SafeAreaView style={styles.container}>
                    <FlatList showsVerticalScrollIndicator={false}
                        data={data}
                        numColumns={2}
                        style={{flexGrow:1}}
                        ListEmptyComponent={(<Text style={styles.emptyText}>No items found.</Text>)}
                        ListHeaderComponent={(
                            <>
                            <View>
                                <Title text="where do" style={{fontWeight:"normal"}}/>
                                <Title text="you want to go"/>
                                <Title text="Explore Attractions" style={styles.subtitle}/>
                                <Categories 
                                    selectedCategory={selectedCategory}
                                    onCategoryPress={setSelectedCategory}
                                    categories={[All,...category]}

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