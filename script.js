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
        this.scoreHistoryEl = document.getElementById('scoreHistory');
        this.scoreHistoryList = document.getElementById('scoreHistoryList');
        this.averageScoreEl = document.getElementById('averageScore');
        this.cards = [];
        this.attemptedCards = new Set();
        this.currentWords = [];
        this.scoreHistory = [];
        this.hasBeenGraded = false;
        
        this.init();
    }
    
    init() {
        this.newGameBtn.addEventListener('click', () => this.startNewGame());
        this.gradeBtn.addEventListener('click', () => this.gradePerformance());
        this.startNewGame();
    }
    
    startNewGame() {
        // Clear existing cards
        this.cardsContainer.innerHTML = '';
        this.cards = [];
        this.attemptedCards.clear();
        this.currentWords = [];
        
        // Hide score display
        this.scoreDisplay.style.display = 'none';
        
        this.hasBeenGraded = false;
        this.gradeBtn.disabled = false;
        
        // Get 12 words
        const wordCount = 12;
        this.currentWords = this.getRandomWords(wordCount);
        
        // Create cards
        this.currentWords.forEach((word, index) => {
            this.createCard(word, index);
        });
        
        // Update stats
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
        cardBack.innerHTML = `
            <div class="checkmark">✓</div>
            <div class="word-label">${word}</div>
        `;
        
        card.appendChild(cardFront);
        card.appendChild(cardBack);
        
        // Add click event
        card.addEventListener('click', () => this.flipCard(card));
        
        this.cardsContainer.appendChild(card);
        this.cards.push(card);
    }
    
    flipCard(card) {
        if (card.classList.contains('flipped')) {
            return; // Don't allow unflipping
        }
        
        // Flip the card
        card.classList.add('flipped');
        this.attemptedCards.add(card.dataset.index);
        
        // Add a little celebration effect
        this.addCelebrationEffect(card);
        
        this.updateStats();
    }
    
    addCelebrationEffect(card) {
        // Create a simple visual feedback
        card.style.transform = 'rotateY(180deg) scale(1.05)';
        setTimeout(() => {
            card.style.transform = 'rotateY(180deg) scale(1)';
        }, 200);
    }
    
    updateStats() {
        const attempted = this.attemptedCards.size;
        const total = this.cards.length;
        
        this.attemptedCountEl.textContent = attempted;
        this.totalCountEl.textContent = total;
    }
    
    gradePerformance() {
        if (this.hasBeenGraded) return;
        
        const score = this.attemptedCards.size;
        const total = this.cards.length;
        const percentage = Math.round((score / total) * 100);
        
        this.scorePercentage.textContent = `${percentage}%`;
        
        // Set message based on performance
        let message = '';
        if (percentage === 100) {
            message = '🌟 Perfect! You read all the words! 🌟';
        } else if (percentage >= 80) {
            message = '🎉 Excellent work! Keep it up! 🎉';
        } else if (percentage >= 60) {
            message = '👍 Good job! Practice makes perfect! 👍';
        } else if (percentage >= 40) {
            message = '💪 Nice try! Keep practicing! 💪';
        } else {
            message = '📚 Keep working hard! You\'ll get there! 📚';
        }
        
        this.scoreMessage.textContent = message;
        this.scoreDisplay.style.display = 'block';
        
        this.hasBeenGraded = true;
        this.gradeBtn.disabled = true;
        
        this.scoreHistory.push({ round: this.scoreHistory.length + 1, percentage });
        this.renderScoreHistory();
        
        this.scoreHistoryEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    renderScoreHistory() {
        this.scoreHistoryList.innerHTML = '';
        
        this.scoreHistory.forEach((entry) => {
            const row = document.createElement('div');
            row.className = 'score-history-row';
            row.innerHTML = `<span>Round ${entry.round}</span><span>${entry.percentage}%</span>`;
            this.scoreHistoryList.appendChild(row);
        });
        
        const avg = Math.round(
            this.scoreHistory.reduce((sum, e) => sum + e.percentage, 0) / this.scoreHistory.length
        );
        this.averageScoreEl.textContent = `${avg}%`;
        this.scoreHistoryEl.style.display = 'block';
    }
}

// Start the game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SightWordsGame();
});
