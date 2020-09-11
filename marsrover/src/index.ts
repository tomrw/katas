export interface Position {
  x: number;
  y: number;
}

export enum Direction {
  N = "NORTH",
  E = "EAST",
  S = "SOUTH",
  W = "WEST",
}

export enum TurnDirection {
  L = "LEFT",
  R = "RIGHT",
}

export enum MoveDirection {
  F = "FORWARD",
  B = "BACKWARDS",
}

export class MarsRover {
  private position;
  private direction;

  constructor(position: Position, direction: Direction) {
    this.position = position;
    this.direction = direction;
  }

  getPosition() {
    return this.position;
  }

  getDirection() {
    return this.direction;
  }

  turn(direction: TurnDirection) {
    const directionArray = [Direction.N, Direction.E, Direction.S, Direction.W];
    const current = directionArray.indexOf(this.direction);
    let newDirection;
    if (direction === TurnDirection.R) {
      newDirection = current === 3 ? 0 : current + 1;
    }
    if (direction === TurnDirection.L) {
      newDirection = current === 0 ? 3 : current - 1;
    }
    this.direction = directionArray[newDirection];
  }

  move(direction: MoveDirection) {
    let newPosition = { ...this.position };
    // If facing N or S this affects the Y axis
    if (
      (this.direction === Direction.N && direction === MoveDirection.F) ||
      (this.direction === Direction.S && direction === MoveDirection.B)
    ) {
      newPosition.y++;
    }
    if (
      (this.direction === Direction.N && direction === MoveDirection.B) ||
      (this.direction === Direction.S && direction === MoveDirection.F)
    ) {
      newPosition.y--;
    }
    // If facing E or W this affects the X axis
    if (
      (this.direction === Direction.E && direction === MoveDirection.F) ||
      (this.direction === Direction.W && direction === MoveDirection.B)
    ) {
      newPosition.x++;
    }
    if (
      (this.direction === Direction.E && direction === MoveDirection.B) ||
      (this.direction === Direction.W && direction === MoveDirection.F)
    ) {
      newPosition.x--;
    }

    this.position = newPosition;
  }
}
