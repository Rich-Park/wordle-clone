import words from "./words.txt";

export const EmptyGrid = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
  let wordSet;

  await fetch(words)
    .then((response) => response.text())
    .then((result) => {
      const wordArray = result.split("\n");
      wordSet = new Set(wordArray);
    });

  return { wordSet };
};
