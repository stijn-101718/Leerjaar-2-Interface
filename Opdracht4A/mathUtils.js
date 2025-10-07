import { logMessage } from '../Opdracht4c/logger.js';

export function add(a, b) {
    logMessage(`Optellen: ${a} + ${b} = ${a + b}`);
    return a + b;
}

export function subtract(a, b) {
    logMessage(`Aftrekken: ${a} - ${b} = ${a - b}`);
    return a - b;
}