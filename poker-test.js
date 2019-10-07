const poker = require("./poker");

describe("poker", function () {
  describe("is flush", function () {
    it("is flush true", function () {
      var result  = poker.isflush("1H 7H 3H 4H 5H")
      expect(result).toBe(true);
    });

    it("is flush true2", function () {
      var result  = poker.isflush("1S 7S 3S 4S 5S")
      expect(result).toBe(true);
    });


    it("is not flush", function() {
      var result  = poker.isflush("1S 7H 3H 4H 5H")
      expect(result).toBe(false);
    })
  })


  describe("get cards", function () {
    it("get cards", function () {
      var result  = poker.getCards("1H 7H 3H 4H 5H")
      expect(result).toEqual(["1H", "7H", "3H", "4H", "5H"]);
    });
  })

  describe("get suit", function () {
    it("get suit H", function () {
      var result  = poker.getSuit("1H")
      expect(result).toEqual("H");
    });

    it("get suit S", function () {
      var result  = poker.getSuit("1S")
      expect(result).toEqual("S");
    });
  })
  describe("compare hands", function(){
    it("left should be winner", function() {
      var result = poker.compare("1H 7H 3H 4H 5H","1H 7H 3H 4H 5C");
      expect(result).toBe("win");
    });

    it("left should be lost", function() {
      var result = poker.compare("1H 7H 3H 4H 5C","1H 7H 3H 4H 5H");
      expect(result).toBe("lost");
    });

    it("if both is flush, then we should get draw", function() {
      var result = poker.compare("1H 7H 3H 4H 5H","1H 8H 3H 4H 5H");
      expect(result).toBe("draw");
    });

    it("if both is not flush, then we should get draw", function() {
      var result = poker.compare("1H 7H 3C 4H 5H","1C 8H 3H 4H 5H");
      expect(result).toBe("draw");
    });
  });

});
