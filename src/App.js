import './App.css';
import { AllRoutes } from "./routes/AllRoutes";
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components';
// import { MovieList } from './pages';
function App() {
  return (
    <div className="App dark:bg-darkbg">
        <Header />
        <main>
          <ScrollToTop />
            <AllRoutes />
            {/* <MovieList /> */}
        </main>
        <Footer />
      
    </div>
  );
}

export default App;