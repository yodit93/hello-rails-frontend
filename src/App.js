import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
