import { useRef } from 'react';
import AppOverlay from '../../components/custom-comp/AppOverlay/AppOverlay';
import Gallery from '../../components/custom-comp/Gallery/Gallery';
import Hero from '../../components/custom-comp/Hero/Hero';
import SiteFooter from '../../components/custom-comp/SiteFooter/SiteFooter';
import SiteHeader from '../../components/custom-comp/SiteHeader/SiteHeader';

function App() {

  const gallerySectionRef = useRef(null);


  return (
    <div className="App">

      <SiteHeader />

      <main>

        <Hero gallerySectionRef={gallerySectionRef}/>

        <Gallery gallerySectionRef={gallerySectionRef}/>

      </main>

      <SiteFooter/>

      {/* <AppOverlay/> */}

    </div>
  );
}

export default App;
