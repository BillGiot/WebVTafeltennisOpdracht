import { Club } from '../club.model';
import { Team } from '../team/team.model';

export class Player {
    private _id;
    private firstname: String;
    private lastname: String;
    private club: Club;
    private personalRanking: String;
    private team: Team;

}
