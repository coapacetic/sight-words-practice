// Sight words data - common words for early readers
const sightWords = [
    'the', 'and', 'is', 'it', 'in', 'to', 'of', 'a', 'I', 'you',
    'that', 'he', 'was', 'for', 'on', 'are', 'as', 'with', 'his', 'they',
    'at', 'be', 'this', 'have', 'from', 'or', 'one', 'had', 'by', 'words',
    'but', 'not', 'what', 'all', 'were', 'we', 'when', 'your', 'can', 'said',
    'there', 'each', 'which', 'she', 'do', 'how', 'their', 'if', 'will', 'up',
    'other', 'about', 'out', 'many', 'then', 'them', 'these', 'so', 'some', 'her',
    'would', 'make', 'like', 'into', 'him', 'has', 'two', 'more', 'go', 'see',
    'no', 'way', 'could', 'my', 'than', 'call', 'first', 'who', 'oil', 'sit',
    'now', 'find', 'long', 'down', 'day', 'did', 'get', 'come', 'made', 'may',
    'part', 'over', 'new', 'sound', 'take', 'only', 'little', 'work', 'know', 'place',
    'year', 'live', 'me', 'back', 'give', 'most', 'very', 'after', 'thing', 'our',
    'just', 'name', 'good', 'sentence', 'man', 'think', 'say', 'great', 'where', 'help',
    'through', 'much', 'before', 'line', 'right', 'too', 'mean', 'old', 'any', 'same',
    'tell', 'boy', 'follow', 'came', 'want', 'show', 'also', 'around', 'form', 'three',
    'small', 'set', 'put', 'end', 'does', 'another', 'well', 'large', 'must', 'big',
    'even', 'such', 'because', 'turn', 'here', 'why', 'ask', 'went', 'men', 'read',
    'need', 'land', 'different', 'home', 'us', 'move', 'try', 'kind', 'hand', 'picture',
    'again', 'change', 'off', 'play', 'spell', 'air', 'away', 'animal', 'house', 'page',
    'letter', 'mother', 'answer', 'found', 'study', 'still', 'learn', 'should', 'America', 'world'
];

const sparkleChars = ['\u2728', '\u2B50', '\uD83D\uDCAB', '\uD83C\uDF1F', '\uD83C\uDF08'];

class SightWordsGame {
    constructor() {
        this.cardsContainer = document.getElementById('cardsContainer');
        this.newGameBtn = document.getElementById('newGame');
        this.gradeBtn = document.getElementById('gradeBtn');
        this.attemptedCountEl = document.getElementById('attemptedCount');
        this.totalCountEl = document.getElementById('totalCount');
        this.scoreDisplay = document.getElementById('scoreDisplay');
        this.scorePercentage = document.getElementById('scorePercentage');
        this.scoreMessage = document.getElementById('scoreMessage');
        this.cards = [];
        this.attemptedCards = new Set();
        this.currentWords = [];

        this.init();
    }

    init() {
        this.newGameBtn.addEventListener('click', () => this.startNewGame());
        this.gradeBtn.addEventListener('click', () => this.gradePerformance());
        this.startNewGame();
    }

    startNewGame() {
        this.cardsContainer.innerHTML = '';
        this.cards = [];
        this.attemptedCards.clear();
        this.currentWords = [];

        this.scoreDisplay.style.display = 'none';

        const wordCount = 12;
        this.currentWords = this.getRandomWords(wordCount);

        this.currentWords.forEach((word, index) => {
            this.createCard(word, index);
        });

        this.updateStats();
    }

    getRandomWords(count) {
        const shuffled = [...sightWords].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    createCard(word, index) {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.word = word;
        card.dataset.index = index;

        const cardFront = document.createElement('div');
        cardFront.className = 'card-face card-front';
        cardFront.textContent = word;

        const cardBack = document.createElement('div');
        cardBack.className = 'card-face card-back';
        cardBack.innerHTML = '<div class="checkmark">\uD83E\uDD84</div><div class="word-label">' + word + '</div>';

        card.appendChild(cardFront);
        card.appendChild(cardBack);

        card.addEventListener('click', () => this.flipCard(card));

        this.cardsContainer.appendChild(card);
        this.cards.push(card);
    }

    flipCard(card) {
        if (card.classList.contains('flipped')) {
            return;
        }

        card.classList.add('flipped');
        this.attemptedCards.add(card.dataset.index);

        this.addCelebrationEffect(card);

        this.updateStats();
    }

    addCelebrationEffect(card) {
        card.style.transform = 'rotateY(180deg) scale(1.05)';
        setTimeout(() => {
            card.style.transform = 'rotateY(180deg) scale(1)';
        }, 200);

        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.textContent = sparkleChars[Math.floor(Math.random() * sparkleChars.length)];
                sparkle.style.left = (centerX + (Math.random() - 0.5) * 60) + 'px';
                sparkle.style.top = (centerY + (Math.random() - 0.5) * 60) + 'px';
                document.body.appendChild(sparkle);

                setTimeout(() => sparkle.remove(), 1000);
            }, i * 80);
        }
    }

    updateStats() {
        const attempted = this.attemptedCards.size;
        const total = this.cards.length;

        this.attemptedCountEl.textContent = attempted;
        this.totalCountEl.textContent = total;
    }

    gradePerformance() {
        const score = this.attemptedCards.size;
        const total = this.cards.length;
        const percentage = Math.round((score / total) * 100);

        this.scorePercentage.textContent = percentage + '%';

        let message = '';
        if (percentage === 100) {
            message = '\uD83E\uDD84\u2728 Magical! You read ALL the words, unicorn superstar! \u2728\uD83E\uDD84';
        } else if (percentage >= 80) {
            message = '\uD83C\uDF08\u2B50 Amazing! The unicorns are so proud of you! \u2B50\uD83C\uDF08';
        } else if (percentage >= 60) {
            message = '\uD83E\uDD84\uD83D\uDC96 Great job! Keep your unicorn magic going! \uD83D\uDC96\uD83E\uDD84';
        } else if (percentage >= 40) {
            message = '\u2728\uD83C\uDF1F Nice try! Every unicorn starts somewhere! \uD83C\uDF1F\u2728';
        } else {
            message = '\uD83C\uDF08\uD83E\uDD84 Keep believing in your magic! You can do it! \uD83E\uDD84\uD83C\uDF08';
        }

        this.scoreMessage.textContent = message;
        this.scoreDisplay.style.display = 'block';

        this.scoreDisplay.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new SightWordsGame();
});
