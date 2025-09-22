/*
 * Pure logic functions for Ship 1 .
 *
 * Each function receives the current array of entries and returns a new
 * array.  Entries are plain objects of the form `{ t: string, v: string }`,
 * where `t` is a timestamp string (`YYYY‑MM‑DD HH:MM:SS`) and `v` is the
 * entry text.
 *
 * Your tasks:
 *   • Implement `addEntry()` for the baseline.
 *   • Implement `deleteEntry()` and `searchEntries()` for the hard mode.
 *
 * These functions are deliberately pure—no DOM or localStorage access—so
 * they can be tested in isolation.  See `tests/logic.test.js` for more.
 */

/**
 * Add a new entry at the beginning of the array.
 *
 * **TODO (baseline):**
 *   1. Trim the provided `text` argument; if it is empty after trimming,
 *      throw an error.
 *   2. Create a timestamp string formatted as `YYYY‑MM‑DD HH:MM:SS` using
 *      JavaScript’s `Date` API.  Hint: `toISOString()` returns
 *      `YYYY‑MM‑DDTHH:MM:SS.sssZ`—replace the `T` with a space and slice off
 *      the milliseconds and timezone.
 *   3. Construct a new entry object `{ t: timestamp, v: trimmedText }`.
 *   4. Return a new array with your entry inserted at the start and the
 *      existing entries following in their original order.
 *
 * @param {Array<{t: string, v: string}>} entries current entries
 * @param {string} text raw text from the input box
 * @returns {Array<{t: string, v: string}>} new entries array
 */
// eslint-disable-next-line no-unused-vars
export function addEntry(entries, text) {
  // TODO: remove the following line and write your implementation.
  throw new Error("addEntry() not implemented yet");
}

/**
 * Remove the entry at a given 1‑based index.
 *
 * **TODO (hard mode):**
 *   1. Validate that `index` is a positive integer between `1` and
 *      `entries.length`.  If not, return the original array unchanged.
 *   2. Return a new array with the element at position `index‑1` removed.
 *      Do **not** mutate the original array.
 *
 * @param {Array<{t: string, v: string}>} entries current entries
 * @param {number} index 1‑based index (1 = first/newest)
 * @returns {Array<{t: string, v: string}>} new entries array
 */
// eslint-disable-next-line no-unused-vars
export function deleteEntry(entries, index) {
  // TODO: remove the following line and write your implementation.
  throw new Error("deleteEntry() not implemented yet");
}

/**
 * Filter entries by a query string (case‑insensitive).
 *
 * **TODO (hard mode):**
 *   1. Convert both the `query` and each entry’s `v` to lower case before
 *      comparing.
 *   2. Return a new array containing only entries whose `v` includes the
 *      query substring.  Preserve the order of the original array.
 *   3. If `query` is falsy or empty, return the original entries array.
 *
 * @param {Array<{t: string, v: string}>} entries current entries
 * @param {string} query search string
 * @returns {Array<{t: string, v: string}>} filtered entries
 */
// eslint-disable-next-line no-unused-vars
export function searchEntries(entries, query) {
  // TODO: remove the following line and write your implementation.
  throw new Error("searchEntries() not implemented yet");
}
