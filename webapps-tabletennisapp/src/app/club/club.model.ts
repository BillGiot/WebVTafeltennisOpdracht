import { Player } from './player/player.model';
import { Team } from './team/team.model';

export class Club {
    private _id: String;
    private clubNumber: String;
    private street: String;
    private number: Number;
    private city: String;
    private telephone: number;
    private email: String;
    private series: String[];
    private players: Player[];
    private teams: Team[];

}
