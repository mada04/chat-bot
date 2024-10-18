import { createChatBotMessage, createCustomMessage,createClientMessage  } from 'react-chatbot-kit';
import MyAvatar from './MyAvatar';

import CustomMessage from './CustomMessage';
import './App.css'
import Stock from './Stock';
import data from './Chatbot - stock data.json'
import FinalView from './FinalView';



const botName = 'LSEG chatbot';
const message = "Hello!Welcome to LSEG.I'm here to help you."


const config = {
  // initialMessages: [createChatBotMessage(`${message}`)],
  botName: botName,
  initialMessages: [
    createChatBotMessage(`${message}`, {
      withAvatar: true,
      delay: 500,
      widget: 'menuSelected',
    }),

    
  ],



  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },

  },
  customComponents: {
    // Replaces the default header
    //  header: (props) => <div style={{ backgroundColor: 'blue', padding: "5px", borderRadius: "3px" }}><MyAvatar {...props} /> {botName}</div>,
    // Replaces the default bot avatar
    botAvatar: (props) => <MyAvatar {...props} />,
    // Replaces the default bot chat message container
    //  botChatMessage: (props) => <MyCustomChatMessage {...props} />,
    // Replaces the default user icon
    //  userAvatar: (props) => <MyCustomAvatar {...props} />,
    // Replaces the default user chat message
    //  userChatMessage: (props) => <MyCustomUserChatMessage {...props} />
  },
  customMessages: {
    userChatMessage: (state, props) => {
      // Handle your custom user messages here
    },
  },
  state: {
    checker: null,
    data,
    userData: {
      code: "",
      stockExchange:"",
      topStocks: {},
     
    },
    stockData:{
      code:"",
      price:"",
      stockName:""
    }
  },
  widgets: [

    {
      widgetName: 'menuSelected',
      widgetFunc: (props) => <CustomMessage {...props} />,
      // mapStateToProps: ['menu'],
    },
    {
      widgetName: 'stock',
      widgetFunc: (props) => <Stock {...props} />,
      // mapStateToProps: ['menu',"stocks"]
    },
    {
      widgetName: 'viewFinal',
      widgetFunc: (props) => <FinalView {...props} />,
      // mapStateToProps: ['menu',"stocks"]
    },
  ],
};

export default config;
// import React from 'react';
// import {
//   createChatBotMessage,
//   createCustomMessage,
// } from 'react-chatbot-kit';
// import CustomMessage from './CustomMessage';

// const botName = 'LSEG chatbot';
// const message="Hello!Welcome to LSEG.I'm here to help you."

// const config = {
//   botName: botName,
//   lang: 'no',
//   customStyles: {
//     botMessageBox: {
//       backgroundColor: '#376B7E',
//     },
//     chatButton: {
//       backgroundColor: '#5ccc9d',
//     },
//   },
//   initialMessages: [
//     createChatBotMessage(
//       `Hi I'm ${botName}. I’m here to help you explain how I work.`
//     ),
//     createChatBotMessage(
//       "Here's a quick overview over what I need to function. ask me about the different parts to dive deeper.",
//       {
//         withAvatar: false,
//         delay: 500,
//       }
//     ),
//     createCustomMessage('Test', 'custom'),
//   ],
//   state: {
//     gist: '',
//     infoBox: '',
//   },
//   customComponents: {},
//   customMessages: {
//     custom: (props) => <CustomMessage {...props} />,
//   },
//   widgets: [],
// };

// export default config;