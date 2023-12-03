import React, { Component } from 'react';
import axios from 'axios';

class CreateTodo extends Component {
  componentDidMount() {
    // Replace with your actual API key and API endpoint
    const apiKey = 'mohit';
    const apiUrl = 'https://ed-sanchar.000webhostapp.com/api/login/login.php';

    // Data for creating a new to-do item
    const newTodo = {
      title: 'Buy groceries',
      description: 'Milk, eggs, bread, and vegetables',
    };

    // Set the headers, including the authorization header with the API key
    const headers = {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    };

    // Make the POST request using axios
    axios.get(apiUrl, newTodo, { headers })
      .then(response => {
        console.log('API Response:', response.data);
        // You can handle the response data here, e.g., show a success message
      })
      .catch(error => {
        console.error('API Error:', error);
        // Handle errors as needed
      });
  }

  render() {
    return (
      <div>
        {/* Your component rendering goes here */}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>To-Do List App</h1>
        <CreateTodo />
      </div>
    );
  }
}

export default App;
