import React from "react"
import { FlatList, View } from "react-native";
import Track from "../Track/Track";
import { usePlayerContext } from "../../context/PlayerContextProvider";

export const TrackList = () => {
    const { playlist, playerStatus, playingIndex, focusedIndex } = usePlayerContext();
    return (
        <View className='mb-44 px-2'>
            <FlatList
                data={playlist}
                keyExtractor={(track) => `${track.id}`}
                renderItem={({ item, index: idx }) => <Track { ...item } playerStatus={playerStatus} trackIndex={idx} trackInPlayer={playingIndex} trackInFocus={focusedIndex} />}
            />
        </View>
    )
}

export default TrackList;