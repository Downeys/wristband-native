import React, { useContext } from 'react'
import { createContext, useState, useMemo, useCallback } from "react";
import { PlayerStatus } from "../types/PlayerStatus.enum";
import { TrackData } from "../types/types";
import { InitialPlayerState } from "./InitialPlayerState";
import { PlayerContextState } from "./PlayerContextState";

interface PlayListProviderProps {
    playList: TrackData[]
}

interface InternalState {
    playList: TrackData[];
    status: PlayerStatus;
    playingIndex: number;
    focusedIndex: number;
    trackInPlayer: TrackData | null;
}
 
export const PlayerContext = createContext<PlayerContextState>(InitialPlayerState)
 
export default function PlayListProvider({ children, props }: { children: React.ReactNode, props: PlayListProviderProps }) {

    const [state, setState] = useState<InternalState>({
        playList: props.playList ?? [],
        status: PlayerStatus.paused,
        playingIndex: 0,
        focusedIndex: 0,
        trackInPlayer: props.playList ? props.playList[0] : null,
    });

    const back = useCallback(() => {
        const newPlayingIndex = state.playingIndex === 0 ? state.playList.length - 1 : state.playingIndex - 1;
        setState({ ...state, playingIndex: newPlayingIndex, trackInPlayer: state.playList[newPlayingIndex] })
    }, [state])
    const next = useCallback(() => {
        const newPlayingIndex = state.playingIndex + 1 === state.playList.length ? 0 : state.playingIndex + 1;
        setState({ ...state, playingIndex: newPlayingIndex, trackInPlayer: state.playList[newPlayingIndex] })
    }, [state])
    const updateTrackInFocus = useCallback((index: number) => {
        setState({ ...state, focusedIndex: index })
    }, [state]);

    const value: PlayerContextState = useMemo(() => ({
        playlist: state.playList,
        trackInPlayer: state.trackInPlayer,
        playerStatus: state.status,
        playingIndex: state.playingIndex,
        focusedIndex: state.focusedIndex,
        back,
        next,
        updateTrackInFocus
    }), [state, back, next, updateTrackInFocus])

    return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
}

export const usePlayerContext = () => useContext(PlayerContext);
