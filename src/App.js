import './App.css';
import { useState } from 'react';

function App() {

  // Definizione dei paragrafi in modo statico
  const [paragraphs, setParagraphs] = useState([
    {
      id: 1,
      text: "Descrizione del paragrafo 1",
      visible: true
    },
    {
      id: 2,
      text: "Descrizione del paragrafo 2",
      visible: true
    },
    {
      id: 3,
      text: "Descrizione del paragrafo 3",
      visible: true
    },
  ]);

  // Funzione per mostrare tutti i paragrafi
  const showAllParagraphs = () => {
    setParagraphs(paragraphs.map(paragraph => ({
      ...paragraph,
      visible: true
    })));
  };

  // Funzione per nascondere tutti i paragrafi
  const hideAllParagraphs = () => {
    setParagraphs(paragraphs.map(paragraph => ({
      ...paragraph,
      visible: false
    })));
  };

  // Funzione per nascondere o mostrare un paragrafo specifico
  const toggleParagraphVisibility = (id) => {
    setParagraphs(paragraphs.map(paragraph => 
      paragraph.id === id 
        ? { ...paragraph, visible: !paragraph.visible } 
        : paragraph
    ));
  };

  return (
    <div className="App">
      <header>
        <h1>Gestione Paragrafi</h1>
        <div className="button-group">
          <button onClick={showAllParagraphs}>Mostra Tutti</button>
          <button onClick={hideAllParagraphs}>Nascondi Tutti</button>
        </div>
      </header>
      
      <div>
        {paragraphs.map((paragraph) => (
          <div 
            key={paragraph.id} 
            className="paragraph"
            style={{ display: paragraph.visible ? 'block' : 'none' }}
          >
            <div className="paragraph-header">
              <h3>Paragrafo {paragraph.id}</h3>
              <button onClick={() => toggleParagraphVisibility(paragraph.id)}>
                {paragraph.visible ? 'Nascondi' : 'Mostra'}
              </button>
            </div>
            <p>{paragraph.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;