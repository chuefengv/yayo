import './App.css';
import sizzle from './assets/sizzle.mp4'

function App() {
  return (
    <div className="app-wrapper">
      <div className='video-wrapper'>
        <video className='videoTag' autoPlay loop muted>
            <source src={sizzle} type='video/mp4' />
        </video>
      </div>
      hello
    </div>
  );
}

export default App;
