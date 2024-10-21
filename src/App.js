

import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './config';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import './App.css'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
          headerText='LSEG chatbot'
          placeholderText='Please pick an option'
       

        />
      </header>
    </div>
  );
}

export default App;