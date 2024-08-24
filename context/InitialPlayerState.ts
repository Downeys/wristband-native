import { PlayerStatus } from "../types/PlayerStatus.enum";
import { TrackData } from "../types/types";
import { PlayerContextState } from "./PlayerContextState";

export const InitialPlayerState: PlayerContextState = {
    playlist: [],
    trackInPlayer: {} as TrackData,
    playerStatus: PlayerStatus.uninitiated,
    playingIndex: 0,
    focusedIndex: 0,
    back: () => {},
    next: () => {},
    updateTrackInFocus: (index: number) => {}
}