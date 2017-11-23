import { Team } from '../club/team/team.model';

export class Match {
    private _id: String;
    private serie: String;
    private week: Number;
    private date: Date;
    private home: Team;
    private visitor: Team;
    private pointsHome: Number;
    private pointsVisitor: Number;

    constructor(id: String, serie: String, week: Number, date: Date, home: Team, visitor: Team, pointsHome: Number, pointsVisitor: Number) {
        this._id = id;
        this.serie = serie;
        this.date = date;
        this.home = home;
        this.visitor = visitor;
        this.pointsHome = pointsHome;
        this.pointsVisitor = pointsVisitor;
    }

}
