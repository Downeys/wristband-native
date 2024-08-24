import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../components/buttons/BackButton';
import Player from '../components/Player/Player';
import Track from '../components/Track/Track';
import { colors } from '../constants';
import styles from '../styles/styles';
import PlayListProvider from '../context/PlayerContextProvider';
import tracks from '../mock-data/tracks';
import { TrackData } from '../types/types';
import { PlayerStatus } from '../types/PlayerStatus.enum';
import TrackList from '../components/TrackList/TrackList';

export const Home = () => {
    const data: TrackData[] = tracks;
    return (
        <SafeAreaView className='bg-slate-950 h-screen w-screen flex-1'>
            <PlayListProvider props={{ playList: data }}>
                <View className='mb-44 px-2'>
                    <TrackList />
                </View>
                <View className='absolute bottom-0'>
                    <Player />
                </View>
                <StatusBar backgroundColor={colors.wbSlate} style='light' />
            </PlayListProvider>
        </SafeAreaView>
    )
}

export default Home;
