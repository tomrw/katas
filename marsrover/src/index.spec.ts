const {
  MarsRover,
  Direction,
  TurnDirection,
  MoveDirection,
} = require("./index.ts");

describe("marsrover", () => {
  it("should be given a starting x and y coordinates and direction", () => {
    const mr = new MarsRover({ x: 5, y: 10 }, Direction.N);
    expect(mr.getPosition()).toEqual({ x: 5, y: 10 });
  });

  it("should be able to turn right", () => {
    const mr = new MarsRover({ x: 5, y: 10 }, Direction.N);
    mr.turn(TurnDirection.R);
    expect(mr.getDirection()).toEqual(Direction.E);
  });

  it("should be able to turn left", () => {
    const mr = new MarsRover({ x: 5, y: 10 }, Direction.N);
    mr.turn(TurnDirection.L);
    expect(mr.getDirection()).toEqual(Direction.W);
  });

  describe("it should be able to move forwards in any direction", () => {
    it("should move forward one step at a time when facing North", () => {
      const mr = new MarsRover({ x: 5, y: 10 }, Direction.N);
      mr.move(MoveDirection.F);
      expect(mr.getPosition()).toEqual({ x: 5, y: 11 });
    });
    it("should move forward one step at a time when facing South", () => {
      const mr = new MarsRover({ x: 5, y: 10 }, Direction.S);
      mr.move(MoveDirection.F);
      expect(mr.getPosition()).toEqual({ x: 5, y: 9 });
    });
    it("should move forward one step at a time when facing East", () => {
      const mr = new MarsRover({ x: 5, y: 10 }, Direction.E);
      mr.move(MoveDirection.F);
      expect(mr.getPosition()).toEqual({ x: 6, y: 10 });
    });
    it("should move forward one step at a time when facing West", () => {
      const mr = new MarsRover({ x: 5, y: 10 }, Direction.W);
      mr.move(MoveDirection.F);
      expect(mr.getPosition()).toEqual({ x: 4, y: 10 });
    });
  });

  describe("it should be able to move backwards in any direction", () => {
    it("should move back one step at a time when facing North", () => {
      const mr = new MarsRover({ x: 5, y: 10 }, Direction.N);
      mr.move(MoveDirection.B);
      expect(mr.getPosition()).toEqual({ x: 5, y: 9 });
    });
    it("should move back one step at a time when facing South", () => {
      const mr = new MarsRover({ x: 5, y: 10 }, Direction.S);
      mr.move(MoveDirection.B);
      expect(mr.getPosition()).toEqual({ x: 5, y: 11 });
    });
    it("should move back one step at a time when facing East", () => {
      const mr = new MarsRover({ x: 5, y: 10 }, Direction.E);
      mr.move(MoveDirection.B);
      expect(mr.getPosition()).toEqual({ x: 4, y: 10 });
    });
    it("should move back one step at a time when facing West", () => {
      const mr = new MarsRover({ x: 5, y: 10 }, Direction.W);
      mr.move(MoveDirection.B);
      expect(mr.getPosition()).toEqual({ x: 6, y: 10 });
    });
  });
});
