import { useEffect } from 'react';
import { useChat } from '../context/ChatContext';

const STORAGE_KEY = 'chat_messages';

export function useChatPersistence() {
  const { state, dispatch } = useChat();

  // Load messages from localStorage on mount
  useEffect(() => {
    try {
      const savedMessages = localStorage.getItem(STORAGE_KEY);
      if (savedMessages) {
        const messages = JSON.parse(savedMessages);
        messages.forEach(message => {
          dispatch({ type: 'ADD_MESSAGE', payload: message });
        });
      }
    } catch (error) {
      console.error('Error loading chat messages:', error);
      dispatch({ type: 'SET_ERROR', payload: 'Failed to load chat history' });
    }
  }, []);

  // Save messages to localStorage when they change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.messages));
    } catch (error) {
      console.error('Error saving chat messages:', error);
      dispatch({ type: 'SET_ERROR', payload: 'Failed to save chat message' });
    }
  }, [state.messages]);

  return {
    messages: state.messages,
    isLoading: state.isLoading,
    error: state.error,
    addMessage: (content: string, sender: 'user' | 'assistant') => {
      dispatch({
        type: 'ADD_MESSAGE',
        payload: {
          id: Date.now().toString(),
          content,
          timestamp: Date.now(),
          sender
        }
      });
    },
    clearMessages: () => dispatch({ type: 'CLEAR_MESSAGES' })
  };
}