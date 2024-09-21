import React from 'react';
import { View } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from 'react-native-safe-area-context';
import Player from '../components/Player/Player';
import { colors } from '../constants';
import PlayListProvider from '../context/PlayerContext/PlayerContextProvider';
import { TrackData } from '../types/types';
import TrackList from '../components/TrackList/TrackList';
import { Track } from '../models/Track';
import { useQuery } from '@realm/react';


export const Home = () => {
    const data = useQuery<Track>('track');
    const tracks: TrackData[] = data.map(record => ({
        id: `${record._id}`,
        trackName: record.trackName,
        bandName: record.bandName,
        audioSrc: record.audioSrc,
        picSrc: record.picSrc,
        buyLink:  record.buyLink
    }))
    return (
        <SafeAreaView className='bg-slate-950 h-screen w-screen flex-1'>
            <PlayListProvider props={{ playList: tracks }}>
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
