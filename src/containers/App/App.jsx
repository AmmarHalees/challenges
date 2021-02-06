import { useEffect, useRef, useState } from 'react';
import AppOverlay from '../../components/custom-comp/AppOverlay/AppOverlay';
import Gallery from '../../components/custom-comp/Gallery/Gallery';
import Hero from '../../components/custom-comp/Hero/Hero';
import SideMenu from '../../components/custom-comp/SideMenu/SideMenu';
import SiteFooter from '../../components/custom-comp/SiteFooter/SiteFooter';
import SiteHeader from '../../components/custom-comp/SiteHeader/SiteHeader';

function App() {

  const gallerySectionRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  function handleMenu() {

    setIsOpen(prev => !prev);


  }

  useEffect(() => {

    if (isOpen) {

      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = 'initial';


    }
  }
    , [isOpen])


  return (
    <div className="App">
      <SideMenu isOpen={isOpen} />

      <SiteHeader handleMenu={handleMenu} />

      <main>

        <Hero gallerySectionRef={gallerySectionRef} />

        <Gallery gallerySectionRef={gallerySectionRef} />

      </main>



      <SiteFooter />

      <AppOverlay isOpen={isOpen}/>

    </div>
  );
}

export default App;
