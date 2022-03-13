import './app.css';

function App() {
  return (
    <div className='calculator-grid'>
      <div className="output">
        <div className="previous-operand"></div>
        <div className="current-operand"></div>
      </div>
      <button className='span-two'>AC</button>
      <button>DEL</button>
      <button>%</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className='span-wro'>=</button>
    </div>
  )
}

export default App;
