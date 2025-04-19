import { Rover } from "./Rover";
import { RoverState } from "./types";

const start: RoverState = { position: { x: 0, y: 0 }, direction: "N" };

describe("Mars Rover", () => {
  it("rota correctamente", () => {
    const rover = new Rover(start, 200);
    const res = rover.execute(["L"]);
    expect(res.finalDirection).toBe("W");
  });

  it("avanza hacia el norte", () => {
    const rover = new Rover(start, 200);
    const res = rover.execute(["F", "F"]);
    expect(res.finalPosition).toEqual({ x: 0, y: 2 });
  });

  it("detecta un obstáculo y se detiene justo antes", () => {
    const rover = new Rover(start, 200, [{ x: 0, y: 1 }]);
    const res = rover.execute(["F", "F"]);
    expect(res.finalPosition).toEqual({ x: 0, y: 0 });
    expect(res.encounteredObstacle).toEqual({ x: 0, y: 1 });
  });

  it("envuelve el eje Y al moverse hacia el norte", () => {
    const rover = new Rover({ position: { x: 0, y: 199 }, direction: "N" }, 200);
    const res = rover.execute(["F"]);
    expect(res.finalPosition).toEqual({ x: 0, y: 0 });
  });

  it("envuelve el eje X al moverse hacia el oeste", () => {
    const rover = new Rover({ position: { x: 0, y: 0 }, direction: "W" }, 200);
    const res = rover.execute(["F"]);
    expect(res.finalPosition).toEqual({ x: 199, y: 0 });
  });

  it("realiza múltiples giros y sigue funcionando", () => {
    const rover = new Rover(start, 200);
    const res = rover.execute(["R", "R", "L", "F"]);
    expect(res.finalPosition).toEqual({ x: 1, y: 0 }); // terminó mirando E
    expect(res.finalDirection).toBe("E");
  });
  
  
});