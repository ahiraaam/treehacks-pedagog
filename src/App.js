import './App.css';
import EduPoints from './elements/edupoints.js';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import OpenAI from 'openai-api';

function App() {

  const handleNewUserMessage = (newMessage) => {
    let query = "Generate a super simple synthesis of the topic \""+newMessage+"\" so an elementary school kid can understand it:\"\"\"";
    
    var openaiclient = new OpenAI("sk-rDRox47yaPXgkhs0sZZXw1bGqfPXxr4FaiDcQf0v");

    (async () => {
      const gptResponse = await openaiclient.complete({
        engine: 'davinci',
        prompt: query,
        maxTokens: 100,
        temperature: 0.6,
        topP: 1,
        presencePenalty: 0,
        frequencyPenalty: 0.36,
        bestOf: 1,
        n: 1,
        stream: false,
        stop: ['"""', "."]
      });
      addResponseMessage(gptResponse.data.choices[0].text);
    })();

    // Now send the message throught the backend API
    
  };
// Ignore the above haha
  return (
    <div>
      <EduPoints></EduPoints>

      
      <Widget 
      handleNewUserMessage={handleNewUserMessage}
      title="Quick learn"
      subtitle="¡Ask about any topic and you'll get an AI personally generated synthesis about it!"
      />
    </div>
  );
}

export default App;
