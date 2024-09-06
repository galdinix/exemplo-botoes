import './App.css';
import React from 'react';
import Button from './Button';

function App() {
  return (
   <div>
    <Button primary size="small" text="primary small">
      primary small
    </Button>

    <Button primary size="medium" text="primary medium">
      primary medium
    </Button>

    <Button primary size="large" text="primary large">
      primary large
    </Button>

    <Button  size="small" text="secondary small">
      secondary small
    </Button>

    <Button  size="medium" text="secondary medium">
      secondary medium
    </Button>

    <Button  size="large" text="secondary large">
      secondary large
    </Button>
   </div>
  );
}

export default App;
