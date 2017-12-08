export class Match {
    private _id: Number;
    private _date: Date;
    private _playerA: String;
    private _playerB: String;
    private _setsPlayerA: Number;
    private _setsPlayerB: Number;

    constructor(date: Date, playerA: String, playerB: String, setsPlayerA: Number, setsPlayerB: Number, id?: Number) {
        this._id = id;
        this._date = date;
        this._playerA = playerA;
        this._playerB = playerB;
        this._setsPlayerA = setsPlayerA;
        this._setsPlayerB = setsPlayerB;
    }

    get id(){
        return this._id;
    }

    get date() {
        return this._date;
    }

    get playerA() {
        return this._playerA;
    }

    get playerB(){
        return this._playerB;
    }

    get setsPlayerA(){
        return this._setsPlayerA;
    }

    get setsPlayerB(){
        return this._setsPlayerB;
    }

    static fromJSON(json): Match {
        const rec = new Match(json.date, json.playerA, json.playerB, json.setsPlayerA, json.setsPlayerB, json._id);
        return rec;
    }

    toJSON() {
        return {
            id : this._id,
            date: this._date,
            playerA: this._playerA,
            playerB: this._playerB,
            setsPlayerA: this._setsPlayerA,
            setsPlayerB: this._setsPlayerB
        };
    }


}
