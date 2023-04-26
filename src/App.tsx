
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Videopage from './Pages/Videopage/Videopage';
import LikedVideoPage from './Pages/Likedvideopage/LikedVideoPage';
import WatchLaterPage from './Pages/WatchLaterPage/WatchLaterPage';
import Header from './Components/Header/Header';

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/videos' element={<Videopage />} />
        <Route path='/likedvideos' element={<LikedVideoPage />} />
        <Route path='/watchlater' element={<WatchLaterPage />} />
      </Routes>

    </div>
  );
}

export default App;
