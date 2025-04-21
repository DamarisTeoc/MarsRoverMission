# Mars Rover - TypeScript Core

This project contains the core logic for the Mars Rover Kata, implemented in TypeScript with full test coverage using Jest.

## What it does

This module simulates a Mars rover that:
- Navigates a 200x200 grid
- Accepts a sequence of commands (`F`, `L`, `R`)
- Wraps around the edges of the planet (like Pac-Man)
- Detects obstacles and stops before crashing

## Commands

- `F` — Move forward
- `L` — Turn left
- `R` — Turn right

Example command sequence: `FFRFFL`

## Running Tests

```bash
npm install
npm run test
