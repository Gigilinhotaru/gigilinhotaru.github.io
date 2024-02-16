import React from 'react';
import TodoList from './TodoList';
import ErrorBoundary from './ErrorBoundary'; // Import ErrorBoundary

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <TodoList />
      </ErrorBoundary>
    </div>
  );
}

export default App;
