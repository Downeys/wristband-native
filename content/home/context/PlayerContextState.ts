import { PlayerStatus } from "../constants/PlayerStatus.enum";
import { TrackData } from "../types/playerTypes";

export interface PlayerContextState {
    playlist: TrackData[];
    trackInPlayer: TrackData | null;
    playerStatus: PlayerStatus;
    playingIndex: number;
    focusedIndex: number;
    back: () => void;
    next: () => void;
    updateTrackInFocus: (index: number) => void;
    handlePlayClick: (index: number) => void;
}