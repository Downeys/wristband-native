import React from 'react';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from 'react-native';
import TrackList from './components/TrackList/TrackList';
import { useQuery } from '@realm/react';
import { Track } from '../../models/Track';
import Player from './components/Player/Player';
import PlayListProvider from './context/PlayerContextProvider';
import { TrackData } from './types/playerTypes';
import colors from '../common/constants/colors';

export const HomePage = () => {
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
                <TrackList />
                <View className='absolute bottom-0'>
                    <Player />
                </View>
                <StatusBar backgroundColor={colors.wbSlate} style='light' />
            </PlayListProvider>
        </SafeAreaView>
    )
}

export default HomePage;