export class Post {
 private _id: String;
private _date: Date;
private _user: String;
private _text: String;

static fromJSON(json): Post {
    const rec = new Post(json.date, json.user, json.text);
    rec._id = json._id;
    return rec;
}
constructor(date: Date, user: String, text: String) {
    this._date = date;
    this._user = user;
    this._text = text;
}

get date() {
    return this._date;
}

get user(){
    return this._user;
}

get text(){
    return this._text;
}

toJSON() {
    return {
        id : this._id,
        date: this._date,
        user: this._user,
        text: this._text
    };
}
}
