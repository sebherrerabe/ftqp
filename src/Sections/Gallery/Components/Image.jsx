import '../../Gallery/Gallery.css'

const Image = ({ src }) => {
  return (
    <div className='img-gallery' style={{ backgroundImage: `url(${src})` }} >
    </div>
  )
}

export default Image