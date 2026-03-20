import { useEffect } from 'react'

const books = [
  { title: 'The Beginning of Infinity', author: 'David Deutsch', height: 62, color: '#1e2d3d', star: true, amazon: '' },
  { title: 'The Fabric of Reality', author: 'David Deutsch', height: 58, color: '#2d1a3d', star: true, amazon: '' },
  { title: "Poor Charlie's Almanack", author: 'Peter D. Kaufman', height: 66, color: '#2e1f0e', star: true, amazon: '' },
  { title: 'The Technological Republic', author: 'Alex Karp', height: 52, color: '#282828', star: false, amazon: '' },
  { title: 'Alan Turing: The Enigma', author: 'Andrew Hodges', height: 58, color: '#12233a', star: false, amazon: '' },
  { title: 'Never Enough: From Barista to Billionaire', author: 'Andrew Wilkinson', height: 54, color: '#1a2e20', star: false, amazon: '' },
  { title: 'The Checklist Manifesto', author: 'Atul Gawande', height: 50, color: '#3a1428', star: false, amazon: '' },
  { title: 'Faraday, Maxwell, and the Electromagnetic Field', author: 'Basil Mahon and Nancy Forbes', height: 64, color: '#0f2830', star: true, amazon: '' },
  { title: 'The Hard Thing About Hard Things', author: 'Ben Horowitz', height: 56, color: '#5a1e22', star: false, amazon: '' },
  { title: 'What You Do Is Who You Are', author: 'Ben Horowitz', height: 54, color: '#2e1a0a', star: false, amazon: '' },
  { title: 'The (Mis)Behaviour of Markets', author: 'Benoit Mandelbrot', height: 60, color: '#1a1a38', star: false, amazon: '' },
  { title: 'Philosophy and the Real World', author: 'Brian Magee', height: 52, color: '#242612', star: false, amazon: '' },
  { title: 'The Origins of Efficiency', author: 'Brian Potter', height: 56, color: '#1e2d3d', star: true, amazon: '' },
  { title: 'BOOM: Bubbles and the End of Stagnation', author: 'Byrne Hobart and Tobias Huber', height: 58, color: '#5a1e22', star: false, amazon: '' },
  { title: 'Benjamin Franklin: An American Life', author: 'Walter Isaacson', height: 66, color: '#2e1f0e', star: false, amazon: '' },
  { title: 'Einstein: His Life and Universe', author: 'Walter Isaacson', height: 64, color: '#282828', star: false, amazon: '' },
  { title: 'Steve Jobs', author: 'Walter Isaacson', height: 54, color: '#1a2e20', star: false, amazon: '' },
  { title: 'Leonardo da Vinci', author: 'Walter Isaacson', height: 62, color: '#12233a', star: true, amazon: '' },
  { title: 'Code: The Hidden Language of Computer Hardware and Software', author: 'Charles Petzold', height: 60, color: '#3a1428', star: true, amazon: '' },
  { title: 'The Annotated Turing', author: 'Charles Petzold', height: 56, color: '#0f2830', star: true, amazon: '' },
  { title: 'Zero: The Biography of a Dangerous Idea', author: 'Charles Seife', height: 50, color: '#2d1a3d', star: false, amazon: '' },
  { title: "The Science of Can and Can't", author: 'Chiara Marletto', height: 54, color: '#2e1a0a', star: false, amazon: '' },
  { title: 'Born to Run', author: 'Christopher McDougall', height: 52, color: '#1a1a38', star: false, amazon: '' },
  { title: "The Cuckoo's Egg", author: 'Clifford Stoll', height: 58, color: '#242612', star: true, amazon: '' },
  { title: 'The Pattern on The Stone', author: 'Danny Hillis', height: 50, color: '#1e2d3d', star: false, amazon: '' },
  { title: 'Fooling Some of the People All of the Time', author: 'David Einhorn', height: 62, color: '#5a1e22', star: false, amazon: '' },
  { title: 'The Lady Tasting Tea', author: 'David Salsburg', height: 54, color: '#2e1f0e', star: true, amazon: '' },
  { title: 'Thinking In Systems: A Primer', author: 'Donella Meadows', height: 56, color: '#282828', star: false, amazon: '' },
  { title: 'How to Get Rich', author: 'Felix Dennis', height: 52, color: '#1a2e20', star: true, amazon: '' },
  { title: 'Catch Me If You Can', author: 'Frank Abagnale', height: 58, color: '#12233a', star: false, amazon: '' },
  { title: 'F.I.A.S.C.O: The Inside Story of a Wall Street Trader', author: 'Frank Partnoy', height: 60, color: '#3a1428', star: false, amazon: '' },
  { title: 'The ONE Thing', author: 'Gary Keller', height: 50, color: '#0f2830', star: true, amazon: '' },
  { title: 'A Song for Lya', author: 'George R. R. Martin', height: 54, color: '#2d1a3d', star: false, amazon: '' },
  { title: 'The Richest Man in Babylon', author: 'George Samuel Clason', height: 52, color: '#2e1a0a', star: false, amazon: '' },
  { title: 'The Man Who Solved the Market', author: 'Gregory Zuckerman', height: 64, color: '#1a1a38', star: false, amazon: '' },
  { title: 'Economics in One Lesson', author: 'Henry Hazlitt', height: 50, color: '#242612', star: true, amazon: '' },
  { title: 'Siddhartha', author: 'Hermann Hesse', height: 50, color: '#1e2d3d', star: false, amazon: '' },
  { title: 'Unscripted: The Epic Battle for a Media Empire', author: 'James B Stewart, Rachel Abrams', height: 66, color: '#5a1e22', star: false, amazon: '' },
  { title: 'Chaos: Making a New Science', author: 'James Gleick', height: 58, color: '#2e1f0e', star: false, amazon: '' },
  { title: 'Breath: The New Science of a Lost Art', author: 'James Nestor', height: 54, color: '#282828', star: false, amazon: '' },
  { title: 'The Physics of Wall Street', author: 'James Owen Weatherall', height: 56, color: '#1a2e20', star: false, amazon: '' },
  { title: 'A Technique for Getting Ideas', author: 'James Wood Young', height: 50, color: '#12233a', star: false, amazon: '' },
  { title: 'Double Entry', author: 'Jane Gleeson-White', height: 52, color: '#3a1428', star: false, amazon: '' },
  { title: 'Dear Mr. Buffett', author: 'Janet M. Tavakoli', height: 54, color: '#0f2830', star: false, amazon: '' },
  { title: 'Decisions: Life and Death on Wall Street', author: 'Janet Tavakoli', height: 58, color: '#2d1a3d', star: false, amazon: '' },
  { title: 'Unveiled Threat', author: 'Janet Tavakoli', height: 50, color: '#2e1a0a', star: false, amazon: '' },
  { title: 'Rework', author: 'Jason Fried', height: 52, color: '#1a1a38', star: true, amazon: '' },
  { title: "It Doesn't Have to Be Crazy at Work", author: 'Jason Fried', height: 56, color: '#242612', star: true, amazon: '' },
  { title: 'Remote', author: 'Jason Fried', height: 50, color: '#1e2d3d', star: true, amazon: '' },
  { title: 'Measure What Matters', author: 'John Doerr', height: 54, color: '#5a1e22', star: false, amazon: '' },
  { title: 'Obliquity: Why Our Goals Are Best Achieved Indirectly', author: 'John Kay', height: 58, color: '#2e1f0e', star: true, amazon: '' },
  { title: 'The Biggest Bluff', author: 'Maria Konnikova', height: 56, color: '#282828', star: false, amazon: '' },
  { title: 'The Dorito Effect', author: 'Mark Schatzker', height: 52, color: '#1a2e20', star: false, amazon: '' },
  { title: 'The Dao of Capital', author: 'Mark Spitznagel', height: 60, color: '#12233a', star: false, amazon: '' },
  { title: "The Contrarian: Peter Thiel and Silicon Valley's Pursuit of Power", author: 'Max Chafkin', height: 64, color: '#3a1428', star: false, amazon: '' },
  { title: 'The Success Equation', author: 'Michael J. Mauboussin', height: 54, color: '#0f2830', star: true, amazon: '' },
  { title: 'The Undoing Project', author: 'Michael Lewis', height: 58, color: '#2d1a3d', star: false, amazon: '' },
  { title: 'The Philosopher in the Valley', author: 'Michael Steinberger', height: 52, color: '#2e1a0a', star: false, amazon: '' },
  { title: 'Merchants of Doubt', author: 'Naomi Oreskes, Erik M. Conway', height: 56, color: '#1a1a38', star: false, amazon: '' },
  { title: 'The Signal and the Noise', author: 'Nate Silver', height: 62, color: '#242612', star: false, amazon: '' },
  { title: 'M Is for Magic', author: 'Neil Gaiman', height: 50, color: '#1e2d3d', star: false, amazon: '' },
  { title: 'The Emperor of All Maladies: A Biography of Cancer', author: 'Siddhartha Mukherjee', height: 68, color: '#5a1e22', star: true, amazon: '' },
  { title: 'The Laws of Medicine', author: 'Siddhartha Mukherjee', height: 50, color: '#2e1f0e', star: true, amazon: '' },
  { title: 'The Gene: An Intimate History', author: 'Siddhartha Mukherjee', height: 64, color: '#282828', star: true, amazon: '' },
  { title: 'The Song of the Cell', author: 'Siddhartha Mukherjee', height: 58, color: '#1a2e20', star: true, amazon: '' },
  { title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', height: 56, color: '#12233a', star: false, amazon: '' },
  { title: "A Mathematician's Lament", author: 'Paul Lockhart', height: 52, color: '#3a1428', star: false, amazon: '' },
  { title: 'Against the Gods: The Remarkable Story of Risk', author: 'Peter L. Bernstein', height: 62, color: '#0f2830', star: false, amazon: '' },
  { title: 'Misbehaving: The Making of Behavioral Economics', author: 'Richard H. Thaler', height: 58, color: '#2d1a3d', star: false, amazon: '' },
  { title: 'Breathe: A Life in Flow', author: 'Rickson Gracie', height: 54, color: '#2e1a0a', star: false, amazon: '' },
  { title: 'Block by Block', author: 'Robert Hanlon', height: 60, color: '#1a1a38', star: false, amazon: '' },
  { title: 'Vector: A Surprising Story of Space, Time, and Mathematical Transformation', author: 'Robyn Arianrhod', height: 56, color: '#242612', star: false, amazon: '' },
  { title: 'When Genius Failed', author: 'Roger Lowenstein', height: 58, color: '#1e2d3d', star: false, amazon: '' },
  { title: 'Wild Problems', author: 'Russ Roberts', height: 52, color: '#5a1e22', star: true, amazon: '' },
  { title: 'Conspiracy', author: 'Ryan Holiday', height: 54, color: '#2e1f0e', star: true, amazon: '' },
  { title: 'Principles of Economics', author: 'Saifedean Ammous', height: 60, color: '#282828', star: false, amazon: '' },
  { title: 'Genentech: The Beginnings of Biotech', author: 'Sally Smith Hughes', height: 56, color: '#1a2e20', star: false, amazon: '' },
  { title: 'Meditations', author: 'Marcus Aurelius', height: 54, color: '#12233a', star: true, amazon: '' },
  { title: 'Letters from a Stoic', author: 'Seneca', height: 58, color: '#3a1428', star: true, amazon: '' },
  { title: 'Discourses and Selected Writings', author: 'Epictetus', height: 56, color: '#0f2830', star: true, amazon: '' },
  { title: 'Am I Being Too Subtle?', author: 'Sam Zell', height: 52, color: '#2d1a3d', star: false, amazon: '' },
  { title: 'The Half-Life of Facts', author: 'Samuel Arbesman', height: 50, color: '#2e1a0a', star: false, amazon: '' },
  { title: 'Secrets of Sand Hill Road', author: 'Scott Kupor', height: 54, color: '#1a1a38', star: false, amazon: '' },
  { title: 'Linchpin: Are You Indispensable?', author: 'Seth Godin', height: 56, color: '#242612', star: false, amazon: '' },
  { title: 'Purple Cow', author: 'Seth Godin', height: 50, color: '#1e2d3d', star: false, amazon: '' },
  { title: "Can't Hurt Me: Master Your Mind and Defy the Odds", author: 'David Goggins', height: 62, color: '#5a1e22', star: true, amazon: '' },
  { title: 'The Language Instinct', author: 'Steven Pinker', height: 58, color: '#2e1f0e', star: true, amazon: '' },
  { title: 'The 4-Hour Workweek', author: 'Tim Ferriss', height: 54, color: '#282828', star: false, amazon: '' },
  { title: 'Neuromancer', author: 'William Gibson', height: 52, color: '#1a2e20', star: false, amazon: '' },
  { title: "Fortune's Formula", author: 'William Poundstone', height: 56, color: '#12233a', star: false, amazon: '' },
  { title: '21 Lessons for the 21st Century', author: 'Yuval Noah Harari', height: 58, color: '#3a1428', star: false, amazon: '' },
  { title: 'The 22 Immutable Laws of Marketing', author: 'Al Ries and Jack Trout', height: 54, color: '#0f2830', star: false, amazon: '' },
  { title: 'The Snowball: Warren Buffett and the Business of Life', author: 'Alice Schroeder', height: 66, color: '#2d1a3d', star: true, amazon: '' },
  { title: 'Security Analysis: Principles and Technique', author: 'Benjamin Graham & David Dodd', height: 68, color: '#2e1a0a', star: false, amazon: '' },
  { title: 'Zero to One', author: 'Blake Masters and Peter Thiel', height: 50, color: '#1a1a38', star: true, amazon: '' },
  { title: "The Innovator's Dilemma", author: 'Clayton Christensen', height: 56, color: '#242612', star: false, amazon: '' },
  { title: 'The Book of Why', author: 'Dana Mackenzie and Judea Pearl', height: 58, color: '#1e2d3d', star: false, amazon: '' },
  { title: 'The Last Man Who Knew Everything', author: 'David N. Schwartz', height: 62, color: '#5a1e22', star: false, amazon: '' },
  { title: 'Gödel, Escher, Bach: an Eternal Golden Braid', author: 'Douglas Hofstadter', height: 68, color: '#2e1f0e', star: false, amazon: '' },
  { title: "A Mathematician's Apology", author: 'G. H. Hardy', height: 50, color: '#282828', star: false, amazon: '' },
  { title: 'Damn Right!', author: 'Janet Lowe', height: 52, color: '#1a2e20', star: false, amazon: '' },
  { title: 'Invent and Wander', author: 'Jeff Bezos', height: 58, color: '#12233a', star: true, amazon: '' },
  { title: "Warren Buffett's Ground Rules", author: 'Jeremy C. Miller', height: 54, color: '#3a1428', star: false, amazon: '' },
  { title: 'A Mind at Play', author: 'Jimmy Soni', height: 56, color: '#0f2830', star: false, amazon: '' },
  { title: 'Moonwalking with Einstein', author: 'Joshua Foer', height: 54, color: '#2d1a3d', star: false, amazon: '' },
  { title: 'The Prophet', author: 'Kahlil Gibran', height: 50, color: '#2e1a0a', star: false, amazon: '' },
  { title: 'Investing Between the Lines', author: 'L.J. Rittenhouse', height: 52, color: '#1a1a38', star: false, amazon: '' },
  { title: 'Enigmas of Chance', author: 'Mark Kac', height: 54, color: '#242612', star: false, amazon: '' },
  { title: 'When Breath Becomes Air', author: 'Paul Kalanithi', height: 52, color: '#1e2d3d', star: true, amazon: '' },
  { title: "Mendeleyev's Dream", author: 'Paul Strathern', height: 56, color: '#5a1e22', star: false, amazon: '' },
  { title: 'Outlive: The Science and Art of Longevity', author: 'Peter Attia', height: 58, color: '#2e1f0e', star: false, amazon: '' },
  { title: 'The Warren Buffett Way', author: 'Robert G. Hagstrom', height: 54, color: '#282828', star: false, amazon: '' },
  { title: 'Chaos Kings', author: 'Scott Patterson', height: 56, color: '#1a2e20', star: false, amazon: '' },
  { title: 'The Inner Game of Tennis', author: 'Timothy Gallwey', height: 50, color: '#12233a', star: false, amazon: '' },
  { title: 'The Outsiders', author: 'William N. Thorndike', height: 54, color: '#3a1428', star: false, amazon: '' },
  { title: 'The Essential Tversky', author: 'Amos Tversky', height: 58, color: '#0f2830', star: false, amazon: '' },
  { title: 'High Output Management', author: 'Andrew Grove', height: 56, color: '#2d1a3d', star: true, amazon: '' },
  { title: 'One-on-One with Andy Grove', author: 'Andrew Grove', height: 52, color: '#2e1a0a', star: true, amazon: '' },
  { title: 'Only the Paranoid Survive', author: 'Andrew Grove', height: 54, color: '#1a1a38', star: true, amazon: '' },
  { title: 'Swimming Across: A Memoir', author: 'Andrew Grove', height: 58, color: '#242612', star: true, amazon: '' },
  { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', height: 62, color: '#1e2d3d', star: false, amazon: '' },
  { title: 'Noise: A Flaw in Human Judgment', author: 'Daniel Kahneman', height: 56, color: '#5a1e22', star: false, amazon: '' },
  { title: 'My Life as a Quant', author: 'Emanuel Derman', height: 58, color: '#2e1f0e', star: false, amazon: '' },
  { title: 'Models.Behaving.Badly', author: 'Emanuel Derman', height: 52, color: '#282828', star: false, amazon: '' },
  { title: 'The Most Important Thing Illuminated', author: 'Howard S. Marks', height: 60, color: '#1a2e20', star: true, amazon: '' },
  { title: 'Mastering the Market Cycle', author: 'Howard S. Marks', height: 58, color: '#12233a', star: true, amazon: '' },
  { title: 'You Can Be a Stock Market Genius', author: 'Joel Greenblatt', height: 54, color: '#3a1428', star: true, amazon: '' },
  { title: 'The Little Book That Still Beats the Market', author: 'Joel Greenblatt', height: 50, color: '#0f2830', star: false, amazon: '' },
  { title: 'The Big Secret for the Small Investor', author: 'Joel Greenblatt', height: 52, color: '#2d1a3d', star: false, amazon: '' },
  { title: 'The Dao of Capital: Austrian Investing', author: 'Mark Spitznagel', height: 60, color: '#2e1a0a', star: false, amazon: '' },
  { title: 'Safe Haven: Investing for Financial Storms', author: 'Mark Spitznagel', height: 56, color: '#1a1a38', star: true, amazon: '' },
  { title: 'The Dhandho Investor', author: 'Mohnish Pabrai', height: 54, color: '#242612', star: false, amazon: '' },
  { title: 'Mosaic: Perspectives on Investing', author: 'Mohnish Pabrai', height: 52, color: '#1e2d3d', star: false, amazon: '' },
  { title: 'Dynamic Hedging', author: 'Nassim Nicholas Taleb', height: 64, color: '#5a1e22', star: false, amazon: '' },
  { title: 'Fooled by Randomness', author: 'Nassim Nicholas Taleb', height: 56, color: '#2e1f0e', star: false, amazon: '' },
  { title: 'The Black Swan', author: 'Nassim Nicholas Taleb', height: 62, color: '#282828', star: true, amazon: '' },
  { title: 'The Bed of Procrustes', author: 'Nassim Nicholas Taleb', height: 50, color: '#1a2e20', star: false, amazon: '' },
  { title: 'Antifragile', author: 'Nassim Nicholas Taleb', height: 66, color: '#12233a', star: true, amazon: '' },
  { title: 'Skin in the Game', author: 'Nassim Nicholas Taleb', height: 54, color: '#3a1428', star: false, amazon: '' },
  { title: 'Statistical Consequences of Fat Tails', author: 'Nassim Nicholas Taleb', height: 58, color: '#0f2830', star: false, amazon: '' },
  { title: 'Seeking Wisdom: From Darwin to Munger', author: 'Peter Bevelin', height: 62, color: '#2d1a3d', star: true, amazon: '' },
  { title: 'A Few Lessons from Sherlock Holmes', author: 'Peter Bevelin', height: 50, color: '#2e1a0a', star: false, amazon: '' },
  { title: 'A Few Lessons for Investors and Managers', author: 'Peter Bevelin', height: 52, color: '#1a1a38', star: false, amazon: '' },
  { title: "All I Want to Know Is Where I'm Going to Die", author: 'Peter Bevelin', height: 56, color: '#242612', star: false, amazon: '' },
  { title: 'The Art of Speculation', author: 'Philip L. Carret', height: 54, color: '#1e2d3d', star: false, amazon: '' },
  { title: 'A Money Mind at Ninety', author: 'Philip L. Carret', height: 50, color: '#5a1e22', star: false, amazon: '' },
  { title: 'Money Games', author: 'Shan Wei Jian', height: 52, color: '#2e1f0e', star: false, amazon: '' },
  { title: 'Out of the Gobi', author: 'Shan Wei Jian', height: 58, color: '#282828', star: true, amazon: '' },
  { title: 'Money Machine', author: 'Shan Wei Jian', height: 54, color: '#1a2e20', star: false, amazon: '' },
  { title: 'Stories of Your Life and Others', author: 'Ted Chiang', height: 56, color: '#12233a', star: false, amazon: '' },
  { title: 'Exhalation: Stories', author: 'Ted Chiang', height: 52, color: '#3a1428', star: false, amazon: '' },
  { title: 'The Education of a Speculator', author: 'Victor Niederhoffer', height: 60, color: '#0f2830', star: false, amazon: '' },
  { title: 'Practical Speculation', author: 'Victor Niederhoffer', height: 54, color: '#2d1a3d', star: false, amazon: '' },
  { title: '12 Rules for Life', author: 'Jordan Peterson', height: 56, color: '#2e1a0a', star: false, amazon: '' },
]

export default function BookshelfPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <style>{`
        .bookshelf-page {
          background: #111010;
          min-height: 100vh;
          font-family: 'EB Garamond', serif;
          color: #d4c4a8;
        }

        .bookshelf-inner {
          max-width: 860px;
          margin: 0 auto;
          padding: 64px 32px 100px;
        }

        .bookshelf-header {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 16px;
          padding-bottom: 24px;
          border-bottom: none;
        }

        .bookshelf-subtitle {
          font-family: 'EB Garamond', serif;
          font-size: 0.95rem;
          color: #d4c4a8;
          line-height: 1.6;
          margin-bottom: 36px;
          padding-bottom: 24px;
          border-bottom: 1px solid #1e1a15;
        }

        .bookshelf-header h1 {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 400;
          color: #d4c4a8;
        }

        .bookshelf-header h1 em {
          font-style: italic;
          color: #c8922a;
        }

        .book-count {
          font-size: 0.8rem;
          color: #4a3f32;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .bookstack {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .book-item {
          display: flex;
          align-items: center;
          text-decoration: none;
          border-radius: 3px 4px 4px 3px;
          position: relative;
          cursor: pointer;
          overflow: hidden;
          padding: 0 28px;
          animation: bookSlideIn 0.4s ease both;
          transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1),
                      filter 0.2s ease,
                      box-shadow 0.22s ease;
        }

        .book-item::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 12px;
          background: linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.1) 100%);
          border-radius: 3px 0 0 3px;
        }

        .book-item::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.06) 80%, transparent 100%);
        }

        .book-item:hover {
          transform: translateX(12px);
          filter: brightness(1.2);
          box-shadow: -10px 6px 32px rgba(0,0,0,0.8), 0 0 20px rgba(200,146,42,0.06);
          z-index: 10;
        }

        .book-item:focus-visible {
          outline: 2px solid rgba(200,146,42,0.5);
          outline-offset: 2px;
        }

        .book-item:active {
          filter: brightness(0.95);
        }

        .book-texture {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 300 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='t'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23t)' opacity='0.06'/%3E%3C/svg%3E");
          pointer-events: none;
        }

        .book-author {
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.8rem;
          font-weight: 300;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          white-space: nowrap;
          min-width: 210px;
          position: relative;
          z-index: 1;
        }

        .book-title {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-weight: 400;
          letter-spacing: 0.05em;
          color: rgba(255,255,255,0.88);
          flex: 1;
          text-align: center;
          position: relative;
          z-index: 1;
          text-shadow: 0 1px 4px rgba(0,0,0,0.5);
        }

        .book-mark {
          width: 27px;
          height: 27px;
          position: relative;
          z-index: 1;
          flex-shrink: 0;
          background: rgba(255,255,255,0.25);
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        }

        .stack-shadow {
          height: 18px;
          background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 100%);
          border-radius: 0 0 4px 4px;
          margin-top: -3px;
        }

        .bookshelf-footer {
          margin-top: 40px;
          font-size: 0.72rem;
          color: #2a2018;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-align: center;
        }

        @keyframes bookSlideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      <div className="bookshelf-page">
        <div className="bookshelf-inner">
          <header className="bookshelf-header">
            <h1>My <em>Library</em></h1>
            <span className="book-count">{books.length} books read</span>
          </header>

          <p className="bookshelf-subtitle">These are some of the books I've read, its arranged in no particular order as I find ranking books incredibly difficult. The ones with a star are those of special interest.</p>

          <div className="bookstack">
            {books.map((book, i) => (
              <a
                key={i}
                href={book.amazon}
                target="_blank"
                rel="noopener noreferrer"
                className="book-item"
                style={{
                  backgroundColor: book.color,
                  height: book.height + 'px',
                  animationDelay: (i * 0.04) + 's',
                }}
              >
                <div className="book-texture" />
                <span className="book-author">{book.author}</span>
                <span className="book-title">{book.title}</span>
                {book.star && <div className="book-mark" />}
              </a>
            ))}
          </div>

          <div className="stack-shadow" />
          <footer className="bookshelf-footer">click any book to open on amazon</footer>
        </div>
      </div>
    </>
  )
}
