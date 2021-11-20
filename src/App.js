import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/uploadForm';
import DarkModeToggle from "react-dark-mode-toggle";
import useDarkMode from './comps/DarkMode'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const { theme, toggleTheme } = useDarkMode()
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className="App" style={{
      background: theme === 'dark' ? '#000' : '#fff',
      color: theme === 'dark' ? '#fff' : '#000',
    }}>
      <div className="AppToggle" onClick={toggleTheme}><DarkModeToggle
        onChange={setIsDarkMode}
        checked={isDarkMode}
        size={50}
      /></div>
      
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
    </div>
  );
}

export default App;
