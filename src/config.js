import { createChatBotMessage } from 'react-chatbot-kit';
import MyAvatar from './MyAvatar';

import CustomMessage from './CustomMessage';
import './App.css'
import Stock from './Stock';
import data from './Chatbot - stock data.json'
import FinalView from './FinalView';



const botName = 'LSEG chatbot';
const message = "Hello! Welcome to LSEG. I'm here to help you."


const config = {

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

    botAvatar: (props) => <MyAvatar {...props} />,

  },
// data has been saved in config states for use in the application
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
      stockName:"",
      disabled:false
    }
  },
  widgets: [

    {
      widgetName: 'menuSelected',
      widgetFunc: (props) => <CustomMessage {...props} />,
      mapStateToProps: ['menu'],
    },
    {
      widgetName: 'stock',
      widgetFunc: (props) => <Stock {...props} />,
      mapStateToProps: ['menu','stocks']
    },
    {
      widgetName: 'viewFinal',
      widgetFunc: (props) => <FinalView {...props} />,
      mapStateToProps: ['menu','stocks','finalView']
    },
  ],
};

export default config;
