/**
 * @file Test Setup - window
 * @module tests/setup/window
 */

// `window.chrome` is not set when using headless chromium browser mode,
// so it is stubbed here. note that is actually an object when using a
// non-headless chromium browser (@vitest/browser x playwright).
window.chrome = true
