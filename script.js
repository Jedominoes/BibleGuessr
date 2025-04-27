const bibleData = {
    "Genesis": {
        "1": {
            "1": "In the beginning God created the heavens and the earth."
        },
        "2": {
            "1": "Thus the heavens and the earth were finished, and all the host of them."
        }
    },
    "Exodus": {
        "1": {
            "1": "Now these are the names of the children of Israel, who came into Egypt..."
        },
        "2": {
            "1": "And there went a man of the house of Levi, and took to wife a daughter of Levi."
        }
    },
    "Tobit": {
        "1": {
            "1": "This is the book of the acts of Tobit son of Tobiel..."
        }
    }
};

let currentVerse = {};
let scoreCorrect = 0;
let scoreWrong = 0;

function getRandomVerse() {
    const books = Object.keys(bibleData);
    const randomBook = books[Math.floor(Math.random() * books.length)];
    const chapters = Object.keys(bibleData[randomBook]);
    const randomChapter = chapters[Math.floor(Math.random() * chapters.length)];
    const verses = Object.keys(bibleData[randomBook][randomChapter]);
    const randomVerse = verses[Math.floor(Math.random() * verses.length)];

    return {
        text: bibleData[randomBook][randomChapter][randomVerse],
        book: randomBook,
        chapter: randomChapter,
        verse: randomVerse
    };
}

function updateUI() {
    const verseText = getRandomVerse();
    currentVerse = verseText;
    document.getElementById('verse').innerText = `"${verseText.text}"`;
    document.getElementById('result').innerText = '';
    document.getElementById('answer').value = '';
}

function submitAnswer() {
    const playerAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const correctAnswer = currentVerse.text.toLowerCase();

    if (playerAnswer === correctAnswer) {
        scoreCorrect++;
        document.getElementById('result').innerText = 'Correct!';
    } else {
        scoreWrong++;
        document.getElementById('result').innerText = `Wrong! The correct verse was: "${currentVerse.text}"`;
    }

    document.getElementById('score').innerText = `Correct: ${scoreCorrect} | Wrong: ${scoreWrong}`;
}

function nextVerse() {
    updateUI();
}

updateUI();
