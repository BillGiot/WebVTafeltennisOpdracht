var Request = require("request");

describe("Server", () => {
    let server;
    let firstSerieId;
    beforeAll(() => {
        server = require("../app");
    });
    afterAll(() => {
    });
    describe("POST /API/series", () => {
        let data = {};
        beforeAll((done) => {
            Request(
                { method: 'POST'
                , uri: 'http://localhost:3000/API/series'
                , json: true
                , body: {name:"third devision"}
                }, (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            }).auth(null, null, true, process.env.TEST_VALID_TOKEN);
        });
        it("status 200", () => {
            expect(data.status).toBe(200);
        });
        it("check body", () => {
            expect(data.body.name).toBe("third devision");
            expect(data.body.matches.length).toBe(0);
            expect(data.body._id).toBeDefined();
            firstSerieId = data.body._id;
        });
    });
    describe("POST /API/series/matches", () => {
        let data = {};
        beforeAll((done) => {
            Request(
                { method: 'POST'
                , uri: `http://localhost:3000/API/series/${firstSerieId}/matches`
                , json: true
                , body: {
                    date: "2017-11-27",
                    playerA: "Dimi Ovtcharov",
                    playerB: "Timo Boll",
                    setsPlayerA: "4",
                    setsPlayerB :"3"
                }
                }, (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            }).auth(null, null, true, process.env.TEST_VALID_TOKEN);
        });
        it("status 200", () => {
            expect(data.status).toBe(200);
        });
        it("check body", () => {
            expect(data.body.date).toBe("2017-11-27");
            expect(data.body.playerA).toBe("Dimi Ovtcharov");
            expect(data.body.playerB).toBe("Timo Boll");
            expect(data.body.setsPlayerA).toBe("4");
            expect(data.body.setsPlayerB).toBe("3");
            expect(data.body._id).toBeDefined();
        });
    });
    describe("GET /API/series", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/API/series", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            }).auth(null, null, true, process.env.TEST_VALID_TOKEN);
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body.length).toBe(1);
            let serie = data.body[0];
            expect(serie.name).toBe("third devision");
            expect(serie.matches.length).toBe(1);
            expect(serie.matches[0].date).toBe("2017-11-27");
            expect(serie.matches[0].playerA).toBe("Dimi Ovtcharov");
            expect(serie.matches[0].playerB).toBe("Timo Boll");
            expect(serie.matches[0].setsPlayerA).toBe("4");
            expect(serie.matches[0].setsPlayerB).toBe("3");
        });
    });
});