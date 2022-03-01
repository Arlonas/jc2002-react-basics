import "bootstrap/dist/css/bootstrap.min.css"
import TourCard from './components/TourCard/TourCard';
import Navbar from './components/Navbar/Navbar';
import "./assets/styles.css"

function App() {
  return (
  //  ini adalah react fragment bisa pake div jg buat bungkus div yg puta 
   <> 
   <Navbar />
   <div>
     <h1>Welcome to my React Application puta</h1>
     <h2>Halo puta</h2>
   </div>
   <div>
     <TourCard />
     <TourCard />
     <TourCard />
   </div>
   </>
  );
}

export default App;
