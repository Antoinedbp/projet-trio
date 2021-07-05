import Header from './components/header/Header'
import Section from './components/sectionTitre/Section'
import SectionCorps from './components/SectionCorps/SectionCorps'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="contenu">
          <Section />
          <SectionCorps />
        </div>
    </div>
  );
}

export default App;
