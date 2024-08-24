import React from "react"
import { FlatList } from "react-native";
import Track from "../Track/Track";
import { usePlayerContext } from "../../context/PlayerContextProvider";

export const TrackList = () => {
    const { playlist, playerStatus, playingIndex, focusedIndex } = usePlayerContext();
    return (
        <FlatList
            data={playlist}
            keyExtractor={(track) => `${track.id}`}
            renderItem={({ item, index: idx }) => <Track { ...item } playerStatus={playerStatus} trackIndex={idx} trackInPlayer={playingIndex} trackInFocus={focusedIndex} />}
        />
    )
}

export default TrackList;