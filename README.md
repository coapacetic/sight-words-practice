# Sight Words Practice

A fun, interactive web application designed to help children practice sight words through engaging flip-card gameplay.

## 🎯 Features

- **3x4 Grid Layout**: Displays exactly 12 sight words per session
- **Interactive Cards**: Click words to flip them and reveal green checkmarks
- **Performance Grading**: Built-in scoring system with encouraging feedback
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Kid-Friendly Interface**: Colorful design with smooth animations
- **Progress Tracking**: Real-time counter showing attempted words
- **Fresh Content**: Random word selection from a curated list of 100 common sight words

## 🏗️ Architecture

### Technology Stack
- **Frontend**: Pure HTML5, CSS3, and vanilla JavaScript
- **No Dependencies**: Completely self-contained, no external libraries required
- **Responsive**: CSS Grid and Flexbox for adaptive layouts
- **Animations**: CSS3 transforms for smooth card flipping effects

### File Structure
```
sight-words-practice/
├── index.html          # Main application structure
├── style.css           # Styling and responsive design
├── script.js           # Game logic and interactions
├── README.md           # This documentation
└── .gitignore          # Git ignore rules
```

### Core Components

#### HTML Structure (`index.html`)
- Semantic HTML5 layout with header, main, and footer sections
- Card container for dynamic word generation
- Control buttons for new games and grading
- Progress tracking and score display elements

#### CSS Styling (`style.css`)
- **Grid Layout**: Fixed 3x4 grid for consistent card placement
- **Card Design**: 3D flip animations with gradient backgrounds
- **Responsive Breakpoints**: Mobile-optimized layouts
- **Visual Feedback**: Hover effects and celebration animations

#### JavaScript Logic (`script.js`)
- **SightWordsGame Class**: Main game controller
- **Word Management**: Random selection from 100-word sight word list
- **Card Interactions**: Click handlers and flip animations
- **Scoring System**: Performance calculation and feedback messages
- **State Management**: Tracking attempted cards and game progress

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional but recommended)

### Running Locally

#### Option 1: Direct File Opening
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start practicing sight words immediately!

#### Option 2: Local Web Server (Recommended)
For the best experience, run with a local web server:

**Using Python:**
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js:**
```bash
# Install http-server globally
npm install -g http-server

# Run the server
http-server -p 8000
```

**Using PHP:**
```bash
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 🎮 How to Play

1. **Start**: The app displays 12 sight words in a 3x4 grid
2. **Practice**: Read each word aloud with your child
3. **Click**: When a word is read correctly, click the card to flip it
4. **Feedback**: Flipped cards show a green checkmark ✓
5. **Track**: Watch the progress counter update in real-time
6. **Grade**: Click "Grade Performance" anytime to see the score
7. **Reset**: Click "New Game" for a fresh set of 12 words

## 📊 Scoring System

The grading system provides encouraging feedback based on performance:

- **100%**: 🌟 Perfect! You read all the words!
- **80-99%**: 🎉 Excellent work! Keep it up!
- **60-79%**: 👍 Good job! Practice makes perfect!
- **40-59%**: 💪 Nice try! Keep practicing!
- **0-39%**: 📚 Keep working hard! You'll get there!

## 🎨 Customization

### Adding New Words
Edit the `sightWords` array in `script.js` to customize the word list:

```javascript
const sightWords = [
    'your', 'custom', 'words', 'here',
    // Add more words as needed
];
```

### Styling Adjustments
Modify `style.css` to customize:
- Card colors and gradients
- Font sizes and families
- Animation speeds
- Layout dimensions

## 🔧 Development

### Making Changes
1. Edit the source files
2. Refresh your browser to see changes
3. Commit changes to version control

### Git Workflow
```bash
# Stage changes
git add .

# Commit with descriptive message
git commit -m "Add feature or fix description"

# Push to GitHub
git push
```

## 📱 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile Safari (iOS 12+)
- ✅ Chrome Mobile (Android 7+)

## 🌟 Future Enhancements

Potential features for future versions:
- Audio pronunciation for words
- Difficulty levels (beginner/intermediate/advanced)
- Progress tracking over multiple sessions
- Printable worksheets
- Timer functionality
- Multiplayer support

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍👩‍👧‍👦 About

Created for parents and educators looking for engaging ways to help children learn sight words. The application focuses on making learning fun through interactive gameplay and positive reinforcement.
