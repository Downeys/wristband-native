import { Object, BSON } from "realm";

export class Track extends Object<Track> {
    _id = new BSON.ObjectId();
    albumName!: string;
    trackName!: string;
    bandName!: string;
    audioSrc!: string;
    picSrc!: string;
    buyLink!: string;
    position!: Realm.Types.Int;
    static name = 'track';
    static primaryKey = '_id';
}
