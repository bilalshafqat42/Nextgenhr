// Placeholders are written in [square brackets] in the data files.
// isReal() returns false for them, so unfinished details are hidden from visitors and from Google
// and appear automatically once the real value is typed in.

export const isReal = (value) => Boolean(value) && !String(value).includes("[");
