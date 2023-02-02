import { useState } from 'react';
import './App.css';
import explorer from './data/folderData';
import Folder from './components/Folder';

function App() {
  const [explorerData, setExplorerData] = useState(explorer);


  return (
    <div className="App">
      <Folder explorer={explorerData} />
    </div>
  );
}

export default App;
