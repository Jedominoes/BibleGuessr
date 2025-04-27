const bible = {
  "Genesis": {
    "1": {
      "1": "In the beginning God created the heavens and the earth.",
      "2": "The earth was without form and void, and darkness was over the face of the deep."
    },
    "2": {
      "7": "Then the Lord God formed the man of dust from the ground and breathed into his nostrils the breath of life."
    }
  },
  "Exodus": {
    "3": {
      "14": "God said to Moses, 'I AM WHO I AM.'"
    }
  },
  "Tobit": {
    "5": {
      "22": "Be of good cheer, for your journey will be safe."
    }
  },
  "Psalms": {
    "23": {
      "1": "The Lord is my shepherd; I shall not want."
    }
  },
  "Matthew": {
    "5": {
      "9": "Blessed are the peacemakers, for they shall be called sons of God."
    }
  }
};

let currentVerse = {};

function pickRandomVerse() {
  const books = Object.keys(bible);
  const book = books[Math.floor(Math.random() * books.length)];
  const chapters = Object.keys(bible[book]);
  const chapter = chapters[Math.floor(Math.random() * chapters.length)];
  const verses = Object.keys(bible[book][chapter]);
  const verse = verses[Math.floor(Math.random() * verses.length)];

  currentVerse = {
    book: book,
    chapter: parseInt(chapter),
    verse: parseInt(verse),
    text: bible[book][chapter][verse]
  };

  document.getElementById("verse").innerText = `"${currentVerse.text}"`;
}

function checkGuess() {
  const guess = document.getElementById("guessInput").value.trim();
  const correctAnswer = `${currentVerse.book} ${currentVerse.chapter}:${currentVerse.verse}`;

  if (guess.toLowerCase() === correctAnswer.toLowerCase()) {
    document.getElementById("result").innerText = "Correct! Well done.";
  } else {
    document.getElementById("result").innerText = `Wrong! Correct answer: ${correctAnswer}`;
  }

  setTimeout(() => {
    document.getElementById("guessInput").value = "";
    document.getElementById("result").innerText = "";
    pickRandomVerse();
  }, 3000);
}

pickRandomVerse();
