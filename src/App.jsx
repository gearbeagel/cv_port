import React, { useState } from 'react';
import data from '../info.json'; // Import the JSON file
import Sidebar from './components/Sidebar';
import Content from './components/Content';

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');

  const showSection = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="flex h-screen relative">
      <Sidebar showSection={showSection} />
      <Content currentSection={currentSection} data={data} />
    </div>
  );
};

export default App;
