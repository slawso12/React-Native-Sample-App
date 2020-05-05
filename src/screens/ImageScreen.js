import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../screens/components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail 
            title="Forest" 
            imageSource={require('../../assets/forest.jpg')}/>
            
            <ImageDetail 
            title="Mountain" 
            imageSource={require('../../assets/mountain.jpg')}/>
            
            <ImageDetail 
            title="Beach"
            imageSource={require('../../assets/beach.jpg')}/>

        </View>
    );
};

const styles = StyleSheet.create({

});

export default ImageScreen;