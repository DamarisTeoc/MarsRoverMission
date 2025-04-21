
import { Rover } from "./domain/Rover";
import { RoverState, Command } from "./domain/types";

const initial: RoverState = { position: { x: 0, y: 0 }, direction: "N" };

const obstacles = [
    { x: 2, y: 2 },
    { x: 5, y: 5 },
    { x: 1, y: 0 }
];

const [, , cmdString = ""] = process.argv;
if (!cmdString) {
  console.error("Uso: node dist/index.js <comandos>");
  process.exit(1);
}

const commands = cmdString.toUpperCase().split("") as Command[];

const rover = new Rover(initial, 200, obstacles);
const result = rover.execute(commands);

console.log(JSON.stringify(result, null, 2));