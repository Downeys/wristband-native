import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../components/buttons/BackButton';
import Player from '../components/Player/Player';
import Track from '../components/Track/Track';
import { colors } from '../constants';
import styles from '../styles/styles';

export const Home = () => {
    return (
        <SafeAreaView className='bg-slate-950 h-screen w-screen flex-1'>
            <View className='mb-44 px-2'>
                <FlatList
                    data={[{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }, { id: '6' }, { id: '7' }, { id: '8' }, { id: '9' }, { id: '10' }, { id: '11' }, { id: '12' } ]}
                    keyExtractor={(track) => `${track.id}`}
                    renderItem={({ item }) => <Track />}
                />
            </View>
            <View className='absolute bottom-0'>
                <Player />
            </View>
            <StatusBar backgroundColor={colors.wbSlate} style='light' />
        </SafeAreaView>
    )
}

export default Home;
