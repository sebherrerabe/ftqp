import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



import Title from '../Components/Title/Title';
import Image from './Components/Image'



import { faImage } from '@fortawesome/free-solid-svg-icons';
import chantier from './assets/chantier.jpeg'
import chantier1 from './assets/chantier1.jpeg'
import chantier2 from './assets/chantier2.jpeg'
import chantier9 from './assets/chantier9.jpeg'
import chantier4 from './assets/chantier4.jpeg'
import chantier6 from './assets/chantier6.jpeg'



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

                    <Image src={chantier9} alt={"text"} > </Image>
                    <Image src={chantier1} alt={"text"} > </Image>
                    <Image src={chantier4} alt={"text"} > </Image>
                    <Image src={chantier6} alt={"text"} > </Image>
                    <Image src={chantier2} alt={"text"} > </Image>

                </Carousel>
            </div>
        </section>
    );
}

export default Gallery;