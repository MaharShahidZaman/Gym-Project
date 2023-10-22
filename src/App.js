import './App.css';
import { Footer } from './componets/Footer/Footer';
import { Hero } from './componets/Hero/Hero';
import { Join } from './componets/Join/Join';
import { Plans } from './componets/Plans/Plans';
import { Program } from './componets/Programs/Program';
import { Reasons } from './componets/Reasons/Reasons';
import { Testimoniel } from './componets/Testimonial/Testimoniel';
function App() {
  return (
    <>
    <div className="App">
      <Hero />
      <Program />
      <Reasons />
      <Plans />
      <Testimoniel />
      <Join />
      <Footer />
          
    </div>
    </>
  );
}

export default App;
