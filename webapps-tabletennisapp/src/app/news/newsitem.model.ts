export class NewsItem {
    private _id: String;
    private _title: String;
    private _description: String;
    private _text: String;

    static fromJSON(json): NewsItem {
        const rec = new NewsItem(json._id, json.title, json.description, json.text);
        rec._id = json._id;
        return rec;
    }
    constructor(id: String, title: String, description: String, text: String) {
        this._id = id;
        this._title = title;
        this._text = text;
        this._description = description;
    }

    get id(){
        return this._id;
    }


    get title() {
        return this._title;
    }

    get description(){
      return this._description;
    }
    get text() {
        return this._text;
    }

      toJSON() {
        return {
            _id: this._id,
            title: this._title,
            description: this._description,
            text: this._text
        };
    }
}
