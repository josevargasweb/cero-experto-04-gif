import { afterAll } from "vitest";
import { cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';

afterAll(() => {
  cleanup();
})