import './App.css';
import ShopHeader from './components/Header';
import Description from './components/Description';
import DisplayItems from './components/DisplayItems';
import Footer from './components/Footer';

function Page() {
  return (
    <div className="app">
      <ShopHeader />
      <Description />
      <DisplayItems />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <div>
      <Page />
    </div>
  );
}

export default App;
