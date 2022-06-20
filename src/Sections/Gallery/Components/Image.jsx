import React from 'react'
import '../../Gallery/Gallery.css'

function Image( {src, alt} ) {
  return (
<div className='img-gallery' style={{backgroundImage: `url(${src})`}} > 
   </div>
  )
}

export default Image