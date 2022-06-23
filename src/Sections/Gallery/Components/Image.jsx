import '../../Gallery/Gallery.css'

const Image = ({ src }) => {
  console.log(src)
  return (
    <div className='img-gallery' style={{ backgroundImage: `url(${src})` }} >
    </div>
  )
}

export default Image