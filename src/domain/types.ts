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

/**
 * Secuencia ordenada de direcciones para facilitar los giros.
 * 0=N, 1=E, 2=S, 3=W
 */
export const directions: Direction[] = ["N", "E", "S", "W"];