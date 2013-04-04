describe("Game", function () {
    var game;

    beforeEach(function () {
        game = new Game();
    });

    it("should be create a Game", function () {
        expect(game).not.toBeNull();
    });

    it("should be a looser", function () {
        var result = 0;
        for (var i = 0; i <= 10; i++) {
            result += game.roll(0);
        }
        expect(result).toEqual(0);
    })

    it("should be a basic player", function () {
        var result = 0;
        for (var i = 0; i < 10; i++) {
            result += game.roll(1);
        }
        expect(result).toEqual(10);
    })


})