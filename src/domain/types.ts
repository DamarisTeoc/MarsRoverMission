export type Direction = "N" | "E" | "S" | "W";
export type Command    = "F" | "L" | "R";

export interface Position { x: number; y: number; }

export interface RoverState {
  position: Position;
  direction: Direction;
}

export interface Obstacle extends Position {}

export interface RoverResult {
  finalPosition: Position;
  finalDirection: Direction;
  encounteredObstacle?: Position;
}


export const directions: Direction[] = ["N", "E", "S", "W"];

export const moveVectors: Record<Direction, { dx: number; dy: number }> = {
  N: { dx: 0, dy: -1 },
  E: { dx: 1, dy: 0 },
  S: { dx: 0, dy: 1 },
  W: { dx: -1, dy: 0 }
};