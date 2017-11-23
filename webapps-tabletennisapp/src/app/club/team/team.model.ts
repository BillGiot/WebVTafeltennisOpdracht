import { Player } from '../player/player.model';
import { Club } from '../club.model';

export class Team {
    private _id: String;
    private name: String;
    private players: Player[];
    private club: Club;
    private points: Number;

}
