import React, { useState, useEffect } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("You clicked ${count} times with useeffect hook");
  }, [count]); // Only re-run the effect if count changes

  const codeString = `
  import React, { useState, useEffect } from 'react';

  function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      alert(\`You clicked \${count} times\` );
    }, [count]);

    return (
      <div>
        <h1>Counter Example</h1>
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
    <div className='Z'>
        <h2>useEffect:</h2>
        <p>useEffect is a hook in React that allows you to perform side effects in function components. It's used for operations like data fetching, subscriptions, or manually changing the DOM. It runs after the render and can be configured to run after every render, only on mount and unmount, or when specific values change.</p>
        <h4>syntax: <mark> useEffect(() =>{
       //Your code here
}, [value1, value2]);</mark> 
<h4><mark>useEffect(()=>{
  },[])</mark></h4>
</h4>
      <div className='B'>
      <SyntaxHighlighter language="javascript" style={prism}>
        {codeString}
      </SyntaxHighlighter>
      </div>
      <div className='e'>
      <h4>Counter Example</h4>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      </div>

      
    </div>
  );
}

export default Counter;
