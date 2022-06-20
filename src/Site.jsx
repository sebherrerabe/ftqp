

import Header from './Sections/Header/Header'
import Team from './Sections/Team/Team'
import Courses from './Sections/Courses/Courses'
import Gallery from './Sections/Gallery/Gallery'
import Contact from './Sections/Contact/Contact'
import Sponsors from './Sections/Sponsors/Sponsors'
import Footer from './Sections/Footer/Footer'


import './Site.css';
import bg from './assets/bg.jpg'




const Site = () => {

  return (
    <>
      <div className="bg-photo" style={{ backgroundImage: `url(${bg})` }}></div>
      <Header />
      <Team />
      <Courses />
      <Gallery />
      <Contact />
      <Sponsors />
      <Footer />
    </>
  );
}

export default Site;
