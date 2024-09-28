import { Audio } from "expo-av";
import { PlayerStatus } from "../../constants/PlayerStatus.enum";

export const createAudioSound = async (source: string): Promise<Audio.Sound> => {
    const { sound } = await Audio.Sound.createAsync({ uri: source });
    return sound;
}

export const togglePlayPause = (status: PlayerStatus): PlayerStatus => {
    if (status === PlayerStatus.playing) return PlayerStatus.paused;
    return PlayerStatus.playing;
}