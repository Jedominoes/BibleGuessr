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
let bookList = Object.keys(bible);

function pickRandomVerse() {
  let book = bookList[Math.floor(Math.random() * bookList.length)];
  let chapters = Object.keys(bible[book]);
  let chapter = chapters[Math.floor(Math.random() * chapters.length)];
  let verses = Object.keys(bible[book][chapter]);
  let verse = verses[Math.floor(Math.random() * verses.length)];

  currentVerse = {
    book: book,
    chapter: parseInt(chapter),
    verse: parseInt(verse),
    text: bible[book][chapter][verse]
  };

  document.getElementById("verse").innerText = `"${currentVerse.text}"`;
}

function checkGuess() {
  let bookGuess = document.getElementById("bookInput").value.trim();
  let chapterGuess = parseInt(document.getElementById("chapterInput").value.trim());
  let verseGuess = parseInt(document.getElementById("verseInput").value.trim());

  if (
    bookGuess.toLowerCase() === currentVerse.book.toLowerCase() &&
    chapterGuess === currentVerse.chapter &&
    verseGuess === currentVerse.verse
  ) {
    document.getElementById("result").innerText = "Correct! Well done.";
  } else {
    document.getElementById("result").innerText = `Wrong! It was ${currentVerse.book} ${currentVerse.chapter}:${currentVerse.verse}`;
  }

  setTimeout(() => {
    document.getElementById("bookInput").value = "";
    document.getElementById("chapterInput").value = "";
    document.getElementById("verseInput").value = "";
    document.getElementById("result").innerText = "";
    pickRandomVerse();
  }, 3000);
}
pickRandomVerse();
