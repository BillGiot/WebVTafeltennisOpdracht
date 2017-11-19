export class NewsItem {
    private _title: String;
    private _text: String;

    constructor(title: String, text: String) {
        this._title = title;
        this._text = text;
    }

    get title() {
        return this._title;
    }

    get text() {
        return this._text;
    }

    toJSON() {
        return {
            title: this._title,
            text: this._text
        };
    }
}