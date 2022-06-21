import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



import Title from '../Components/Title/Title';
import Image from './Components/Image'



import { faImage } from '@fortawesome/free-solid-svg-icons';
    import chantier from './assets/chantier.jpeg'
    import chantier1 from './assets/chantier1.jpeg'
    import chantier2 from './assets/chantier2.jpeg'
    import chantier4 from './assets/chantier4.jpeg'
    import chantier6 from './assets/chantier6.jpeg'
    import chantier9 from './assets/chantier9.jpeg'
    import group from './assets/group.jpeg'
    import group2 from './assets/group2.jpeg'
    import group3 from './assets/group3.jpeg'
    import maconnerie from './assets/maconnerie.jpeg'
    import maconnerie2 from './assets/maconnerie2.jpeg'
    import maconnerie3 from './assets/maconnerie3.jpeg'
    import maconnerie4 from './assets/maconnerie4.jpeg'
    import maconnerie5 from './assets/maconnerie5.jpeg'
    import maconnerie6 from './assets/maconnerie6.jpeg'
    import maconnerie7 from './assets/maconnerie7.jpeg'
    import maconnerie11 from './assets/maconnerie11.jpeg'
    import maconnerie13 from './assets/maconnerie13.jpeg' 
    import plafonnage from './assets/plafonnage.jpeg'
    import plafonnage2 from './assets/plafonnage2.jpeg'
    import plafonnage3 from './assets/plafonnage3.jpeg'
    import plafonnage4 from './assets/plafonnage4.jpeg'
    import plafonnage5 from './assets/plafonnage5.jpeg'
    import plafonnage6 from './assets/plafonnage6.jpeg'
    import plafonnage7 from './assets/plafonnage7.jpeg'
    import plafonnage9 from './assets/plafonnage9.jpeg'
    import plafonnage12 from './assets/plafonnage12.jpeg'
  
    



const Gallery = () => {



    return (
        <section className="section main-container" id='galerie'>
            <div className='gallery-top'>
                <Title title="Galerie" direction="left" icon={faImage}></Title>
            </div>
            <div className="gallery-container bg-white">

                <Carousel
                    additionalTransfrom={70}
                    arrows
                    autoPlay
                    autoPlaySpeed={4000}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 3,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={2}
                    swipeable
                >

                    
                    <Image src={chantier9} alt={"chantier"} > </Image>
                    <Image src={group} alt={"group"} > </Image>
                    
                    <Image src={maconnerie2} alt={"maconnerie"} > </Image>
                    <Image src={maconnerie3} alt={"maconnerie"} > </Image>
                    <Image src={maconnerie5} alt={"maconnerie"} > </Image>
                    <Image src={maconnerie7} alt={"maconnerie"} > </Image>
                    <Image src={maconnerie13} alt={"maconnerie"} > </Image>
                    <Image src={maconnerie6} alt={"maconnerie"} > </Image>
                    <Image src={maconnerie4} alt={"maconnerie"} > </Image>
                    <Image src={plafonnage9} alt={"plafonnage"} > </Image>
                    <Image src={plafonnage} alt={"plafonnage"} > </Image>
                    <Image src={plafonnage2} alt={"plafonnage"} > </Image>
                    <Image src={plafonnage3} alt={"plafonnage"} > </Image>
                    <Image src={plafonnage4} alt={"plafonnage"} > </Image>
                    <Image src={plafonnage5} alt={"plafonnage"} > </Image>
                    <Image src={plafonnage6} alt={"plafonnage"} > </Image>
                    <Image src={plafonnage7} alt={"plafonnage"} > </Image>
                    
                    <Image src={plafonnage12} alt={"plafonnage"} > </Image>
                    <Image src={chantier6} alt={"plafonnage"} > </Image>
                   
                    
                    <Image src={group2} alt={"group-pic"} > </Image>
                    <Image src={maconnerie} alt={"maconnerie"} > </Image>
                    <Image src={maconnerie11} alt={"maconnerie"} > </Image>
                    <Image src={group3} alt={"team"} > </Image>

                    <Image src={chantier4} alt={"chantier"} > </Image>
                    <Image src={chantier2} alt={"chantier"} > </Image>  
                    <Image src={chantier1} alt={"chantier"} > </Image>
                    <Image src={chantier} alt={"chantier"} > </Image>

                </Carousel>
            </div>

    <div className="gallery-bottom"></div>
        </section>
    );
}


export default Gallery;