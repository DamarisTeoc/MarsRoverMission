import { Direction, Command, Position, RoverState, Obstacle, directions, RoverResult, moveVectors } from "./types";



export class Rover {
    private position: Position;
    private direction: Direction;
    private readonly gridSize: number;
    private readonly obstacles: Obstacle[];

    constructor(
        initial: RoverState,
        gridSize: 200,
        obstacles: Obstacle[] = []
    ) {
        this.position = { ...initial.position };
        this.direction = initial.direction;
        this.gridSize = gridSize;
        this.obstacles = obstacles;
    }
    execute(commands: Command[]): RoverResult {
        for (const c of commands) {
            console.log(`Comando: ${c}`);

            if (c === "L" || c === "R") {
                this.turn(c);
                console.log(`Gira a ${this.direction}`);
            } else if (c === "F") {
                const nextPos = this.nextPosition();
                console.log(`Avanza hacia ${nextPos.x},${nextPos.y}`);
                if (this.hasObstacle(nextPos)) {
                    console.log(`Obstáculo en ${nextPos.x},${nextPos.y}! Abortando.`);
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
    const { dx, dy } = moveVectors[this.direction];
    
    const step = (value: number) => (value + this.gridSize) % this.gridSize;
    
    return {
        x: step(x + dx),
        y: step(y + dy)
    };
    }

    private hasObstacle(p: Position): boolean {
        return this.obstacles.some(o => o.x === p.x && o.y === p.y);
    }

}