import { Match } from './matches/match.model';

export class Serie {
    private _id: String;
    private _name: String;
    private _matches: Match[];

    static fromJSON(json): Serie {
        const rec = new Serie(json._id, json.name, json.matches);
        rec._id = json._id;
        return rec;
    }
    constructor(id: String, name: String, matches: Match[]) {
       this._id = id;
       this._name = name;
       this._matches = matches;
    }

    get id() {
        return this._id;
    }

    get name(){
        return this._name;
    }

    get matches(){
        return this._matches;
    }
    toJSON() {
        return {
            _id: this._id,
            name: this._name,
            matches: this._matches,
        };
    }


}
