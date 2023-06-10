import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { INote } from './models/models';
import Controller from './utils/Controller';
import { Note } from './components/Note';
import { Form } from './components/Form';

function App() {
  const [notes, setNotes] = useState<INote[]>([]);

  const handleUpdate = () => {
    Controller.get().then((res) => setNotes(res));
  }

  useEffect(() => {
    handleUpdate();
  }, []);

  return (
    <div className="App">
      <div className="header">
        <div className="header-name">Notes</div>
        <button className="update" onClick={handleUpdate}>Обновить</button>
      </div>
      <div className="notes">
        {notes.map((e) => {
          return <Note key={e.id} note={e} setNotes={setNotes} />
        })}
      </div>
      <Form setNotes={setNotes} />
    </div>
  );
}

export default App;
