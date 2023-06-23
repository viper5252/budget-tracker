import './Ac.css'
import { useState } from 'react';
const Assistant = () => {
const [input, setInput] = useState("")
const [output, setOutput] = useState("")
const sendMessage = (message) => {
    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a budget assistant" },
          { role: "user", content: message },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.choices[0].message.content);
        setOutput(data.choices[0].message.content);
        // setMessages([...messages, data.choices[0].message.content]);
      })
      .catch((error) => {
        // Handle errors
      });
  };
return (
        <div className="ac">
            <input onChange={(event)=>{setInput(event.target.value)}} placeholder='Ask Question!'></input>
            <button onClick={()=>{sendMessage(input)}}>Click</button> <br/>
            {output}
        </div>
    )
}
export default Assistant;

// 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
// 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