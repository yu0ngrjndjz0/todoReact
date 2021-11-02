import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <div className="container">
        <h2>Todo App</h2>
        <form>
          <div className="c-form__header">
            <input type="text" className="c-input" placeholder="Nhap text" />
            <button className="c-btn c-btn__add">ADD</button>
          </div>
          <div className="c-form__ctn">
            <div className="c-form__row">
              <label htmlFor="name1" className="c-label">
                Jobs 01
              </label>
              <button className="c-btn c-btn__edit">Edit</button>
              <button className="c-btn c-btn__del">Del</button>
            </div>
            <div className="c-form__row">
              <label htmlFor="name1" className="c-label">
                Jobs 01
              </label>
              <button className="c-btn c-btn__edit">Edit</button>
              <button className="c-btn c-btn__del">Del</button>
            </div>
            <div className="c-form__row">
              <label htmlFor="name1" className="c-label">
                Jobs 01
              </label>
              <button className="c-btn c-btn__edit">Edit</button>
              <button className="c-btn c-btn__del">Del</button>
            </div>
            <div className="c-form__row">
              <label htmlFor="name1" className="c-label">
                Jobs 01
              </label>
              <button className="c-btn c-btn__edit">Edit</button>
              <button className="c-btn c-btn__del">Del</button>
            </div>
          </div>
          <div className="c-form__bottom">
            <p className="c-resuft">
              Total: <span></span>
            </p>
            <button className="c-btn c-btn__clear">Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
