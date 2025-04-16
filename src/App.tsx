import React from 'react';
import { Typography } from './components/Typography';
import { TextInput } from './components/TextInput';
import { Toast } from './components/Toast';

function App() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <Typography variant="h2" className="mb-6">Component Demo</Typography>
      
      <div className="space-y-4">
        <TextInput 
          label="Email Address"
          placeholder="your@email.com"
          helperText="We'll never share your email"
          required
        />
        
        <TextInput
          label="Password"
          type="password"
          error="Password must be at least 8 characters"
        />
      </div>
      
      {/* Toast would typically be triggered by state */}
    </div>
  );
}

export default App;