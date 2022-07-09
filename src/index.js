import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from './reactjs-icon.png';

function Header() {
  return (
      <header>
          <img src={logo} alt="React" width="40" />
      </header>
  )
}

function MainContent() {
  return (
      <section>
          <h1>Fun Facts about React</h1>
          <ul>
              <li>Was first released in 2013</li>
              <li>Was originally created by Jordan Walke</li>
              <li>Has well over 100K stars on GitHub</li>
              <li>Is maintained by Facebook</li>
              <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
      </section>
  )
}

function App() {
  return (
      <main>
          <Header />
          <MainContent />
      </main>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
