// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { configure } from "@testing-library/react";
import "jest-canvas-mock";

import mocksServer from "./tests/mocks/server";

// Set custom test id attribute
configure({ testIdAttribute: "data-test-id" });

/**
 * Establish API mocking before all tests
 * onUnhandledRequest: "bypass" - hide Mocking Server Worker console.warning about not handled/mocked request
 * */ 
beforeAll(() => mocksServer.listen({ onUnhandledRequest: "bypass" }));

// Reset any request handlers that we may add during the tests, so they don't affect other tests
afterEach(() => mocksServer.resetHandlers());

// Clean up after the tests are finished
afterAll(() => mocksServer.close());
