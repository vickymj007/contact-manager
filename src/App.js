import ContactList from "./components/ContactList";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ContactList/>
      <p className="task-description">React Task: Single Component was reused multiple times by providing different value props to each individual component</p>
    </div>
  );
}

export default App;
