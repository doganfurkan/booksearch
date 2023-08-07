import './App.css';
import Bookcard from './components/Bookcard';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <div id="mySocials">
          <ul>
            <li><a href="https://www.github.com/doganfurkan" target="_blank" rel="noopener noreferrer">github</a></li>
            <li><a href="https://www.instagram.com/1furkandogan1" target="_blank" rel="noopener noreferrer">instagram</a></li>
            <li><a href="https://www.linkedin.com/in/furkan-doğan" target="_blank" rel="noopener noreferrer">linkedin</a></li>
            <li><a href="https://www.frontendmentor.io/profile/doganfurkan" target="_blank" rel="noopener noreferrer">frontendmentor</a></li>
          </ul>
        </div>
        <div id="mainGrid">
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
          <Bookcard/>
        </div>
      </main>
    </div>
  );
}

export default App;
