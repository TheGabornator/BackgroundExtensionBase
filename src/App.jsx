import React from 'react';

import "./App.scss";
import { Background } from "./components/Background/Background";
import { DateSection } from "./components/DateSection/DateSection";

function App() {
  return (
    <div className="App">
      <Background>
        <DateSection />
      </Background>
    </div>
  );
}

export default App;
