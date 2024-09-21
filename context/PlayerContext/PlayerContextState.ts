import { PlayerStatus } from "../../types/PlayerStatus.enum";
import { TrackData } from "../../types/types";

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