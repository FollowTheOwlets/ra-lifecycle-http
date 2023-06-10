import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Form } from './components/Form';
import { ITimeElement } from './models/models';
import { Watch } from './components/Watch';

function App() {
  const [watches, setWatches] = useState<ITimeElement[]>([]);

  return (
    <div className="App">
      < Form setWatches={setWatches} />
      <div className="watches">
        {
          watches.map(e => <Watch time={e} setWatches={setWatches} />)
        }
      </div>

    </div>
  );
}

export default App;
