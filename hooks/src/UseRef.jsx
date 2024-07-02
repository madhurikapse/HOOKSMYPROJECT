import React, { useRef, useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Counter() {
  const [count, setCount] = useState(0);
  const refexam=useRef()

  function increment(){
    refexam.current=refexam.current+=1;
  }
  return (
    <div className='d'>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={increment()}>ref counter </button>
    </div>
  );
}

function App() {
  const codeString = `
  import React, { useState } from 'react';

  function Counter() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }

  export default Counter;
  `;

  return (
    <div className="App">
        <div className='C'>
      <h1>useRef</h1>
      <h3>The useState hook in React is used to add state to functional components</h3>
      <h4>syntax:<mark>const refexam = useRef()</mark> </h4>
      <h2></h2>
      <div className='B'>
      <SyntaxHighlighter language="javascript" style={prism}>
        {codeString}
      </SyntaxHighlighter>
      </div>
      
      <Counter />
      </div>
    </div>
  );
}

export default App;
