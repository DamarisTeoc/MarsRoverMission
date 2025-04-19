import { Direction, Command, Position, RoverState, Obstacle, directions, RoverResult } from "./types";

export class Rover {
    private position: Position;
    private direction: Direction;
    private readonly gridSize: number;
    private readonly obstacles: Obstacle[];

    constructor(
        initial: RoverState,
        gridSize: 200,
        obstacles: Obstacle[] = []
    ){
        this.position = {...initial.position};
        this.direction = initial.direction;
        this.gridSize = gridSize;
        this.obstacles = obstacles;
    }
    execute(commands: Command[]): RoverResult {
        for (const c of commands) {
          if (c === "L" || c === "R") {
            this.turn(c);
          } else {
            const nextPos = this.nextPosition();
            if (this.hasObstacle(nextPos)) {
              return {
                finalPosition: this.position,
                finalDirection: this.direction,
                encounteredObstacle: nextPos
              };
            }
            this.position = nextPos;
          }
        }
        return {
          finalPosition: this.position,
          finalDirection: this.direction
        };
      }

      /** Helpers */
      private turn(turn: "L" | "R") {
        let idx = directions.indexOf(this.direction);
        idx = (turn === "L") ? (idx + 3) % 4   // -1 mod 4
                             : (idx + 1) % 4;  // +1 mod 4
        this.direction = directions[idx];
      }
    
      private nextPosition(): Position {
        const { x, y } = this.position;
        const step = (value: number) =>
          (value + this.gridSize) % this.gridSize; // wrap‑around
    
        switch (this.direction) {
          case "N": return { x,y: step(y + 1) };
          case "S": return { x,y: step(y - 1) };
          case "E": return { x: step(x + 1), y };
          case "W": return { x: step(x - 1), y };
        }
      }
    
      private hasObstacle(p: Position): boolean {
        return this.obstacles.some(o => o.x === p.x && o.y === p.y);
      }

}