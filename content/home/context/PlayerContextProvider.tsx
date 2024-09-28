import React, { useContext, useEffect } from 'react'
import { createContext, useState, useMemo, useCallback } from "react";
import { PlayerStatus } from "../constants/PlayerStatus.enum";
import { InitialPlayerState } from "./InitialPlayerState";
import { PlayerContextState } from "./PlayerContextState";
import { Audio } from 'expo-av';
import { TrackData } from '../types/playerTypes';
import { createAudioSound, togglePlayPause } from '../utils/helpers/AudioHelpers';

interface PlayListProviderProps {
    playList: TrackData[]
}

interface InternalState {
    playList: TrackData[];
    status: PlayerStatus;
    playingIndex: number;
    focusedIndex: number;
    trackInPlayer: TrackData | null;
    currentSong: Audio.Sound | null;
}
 
export const PlayerContext = createContext<PlayerContextState>(InitialPlayerState)
 
export default function PlayListProvider({ children, props }: { children: React.ReactNode, props: PlayListProviderProps }) {

    const [state, setState] = useState<InternalState>({
        playList: props.playList ?? [],
        status: PlayerStatus.paused,
        playingIndex: 0,
        focusedIndex: 0,
        trackInPlayer: props.playList ? props.playList[0] : null,
        currentSong: null
    });

    const back = useCallback(async () => {
        const newPlayingIndex = state.playingIndex === 0 ? state.playList.length - 1 : state.playingIndex - 1;
        const newTrackInPlayer = state.playList[newPlayingIndex];
        const newSong = await createAudioSound(newTrackInPlayer.audioSrc);
        if (state.status === PlayerStatus.playing) {
            await state.currentSong?.stopAsync()
            await newSong.playAsync();
        }
        setState({ ...state, playingIndex: newPlayingIndex, trackInPlayer: state.playList[newPlayingIndex], currentSong: newSong })
    }, [state])

    const next = useCallback(async () => {
        const newPlayingIndex = state.playingIndex + 1 === state.playList.length ? 0 : state.playingIndex + 1;
        const newTrackInPlayer = state.playList[newPlayingIndex];
        const newSong = await createAudioSound(newTrackInPlayer.audioSrc);
        if (state.status === PlayerStatus.playing) {
            await state.currentSong?.stopAsync()
            await newSong.playAsync();
        }
        setState({ ...state, playingIndex: newPlayingIndex, trackInPlayer: newTrackInPlayer, currentSong: newSong })
    }, [state])

    const updateTrackInFocus = useCallback((index: number) => {
        setState({ ...state, focusedIndex: index })
    }, [state]);

    const handlePlayClick = useCallback(async (index: number) => {
        if (index === state.playingIndex) {
            const newPlayerStatus = togglePlayPause(state.status);
            if (newPlayerStatus === PlayerStatus.playing) {
                await state.currentSong?.playAsync();
            }
            if (newPlayerStatus === PlayerStatus.paused) {
                await state.currentSong?.pauseAsync();
            }
            setState({ ...state, status: newPlayerStatus })
        } else {
            if (state.status === PlayerStatus.playing) await state.currentSong?.pauseAsync();
            const newTrackInPlayer = state.playList[index];
            const newSong = await createAudioSound(newTrackInPlayer.audioSrc);
            await newSong.playAsync();
            setState({ ...state, trackInPlayer: newTrackInPlayer, currentSong: newSong, status: PlayerStatus.playing, playingIndex: index })
        }
    }, [state])

    useEffect(() => {
        const initializeSong = async () => {
            if (state.trackInPlayer) {
                const newSong = await createAudioSound(state.trackInPlayer.audioSrc)
                setState({ ...state, currentSong: newSong });
            }
        }
        if (!state.currentSong) initializeSong();
    }, [])

    const value: PlayerContextState = useMemo(() => ({
        playlist: state.playList,
        trackInPlayer: state.trackInPlayer,
        playerStatus: state.status,
        playingIndex: state.playingIndex,
        focusedIndex: state.focusedIndex,
        back,
        next,
        updateTrackInFocus,
        handlePlayClick
    }), [state, back, next, updateTrackInFocus, handlePlayClick])

    return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
}

export const usePlayerContext = () => useContext(PlayerContext);
