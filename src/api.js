import axios from 'axios';

// Create an axios instance with default config
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // Add timeout
  timeout: 10000,
  // Enable CORS
  withCredentials: false,
});

// Add request interceptor for API calls
api.interceptors.request.use(
  (config) => {
    // Log the URL being used (helpful for debugging)
    console.log('Making request to:', config.baseURL + config.url);
    console.log('Request headers:', config.headers);
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for API calls
api.interceptors.response.use(
  (response) => {
    console.log('Response received:', response.status);
    return response;
  },
  async (error) => {
    // Enhanced error handling
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Response Error Data:', error.response.data);
      console.error('Response Error Status:', error.response.status);
      console.error('Response Error Headers:', error.response.headers);
      
      if (error.response.status === 404) {
        throw new Error('API endpoint not found. Please check the server URL.');
      } else if (error.response.status === 403) {
        throw new Error('Access forbidden. Please check your API permissions.');
      } else if (error.response.status === 500) {
        throw new Error('Server error. Please try again later.');
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No Response Error:', {
        message: error.message,
        config: error.config,
      });
      
      // Check if it's a CORS error
      if (error.message.includes('Network Error')) {
        throw new Error(
          'Unable to connect to the server. This might be due to CORS or network issues. ' +
          'Please check if the server is running and CORS is properly configured.'
        );
      }
      
      throw new Error(
        'No response received from server. Please check your connection and the server status.'
      );
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error:', error.message);
      throw new Error('An error occurred while setting up the request.');
    }
    
    return Promise.reject(error);
  }
);

export default api; 