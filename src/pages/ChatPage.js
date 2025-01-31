import React from 'react';
import ChatContainer from '../components/ChatContainer';

function ChatPage({ messages, inputText, setInputText, handleSubmit, isLoading }) {
  return (
    <ChatContainer
      messages={messages}
      inputText={inputText}
      setInputText={setInputText}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
    />
  );
}

export default ChatPage; 