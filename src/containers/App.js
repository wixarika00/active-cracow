import logo from './logo.svg';
import './App.css';
import Heading from '../components/heading/Heading.js';
import Footer from '../components/footer/Footer';
import SearchBox from '../components/Searchbox';
import CardList from '../components/CardList';
import { sports } from '../sports';

const contact = {
  email: "active.cracow@gmail.com",
  phone: "000-000-000"
}


function App() {
    return (
    <div className="App">
      <Heading headerTitle="Active Cracow"/>
      <div className="App-body">
        <SearchBox /* searchChange={this.onSearchChange} *//>
        <img src={logo} className="App-logo" alt="logo" />
        <CardList sports ={sports}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      <Footer contact={contact}/>
    </div>
  );
}

export default App;
