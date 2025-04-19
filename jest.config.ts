import type { Config } from "jest";

export default <Config>{
  roots: ["<rootDir>/src/domain"],
  preset: "ts-jest",
  testEnvironment: "node"
};