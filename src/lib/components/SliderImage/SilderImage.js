import React, {
  useState, useCallback, useRef, useEffect,
} from 'react'
import PropTypes from 'prop-types'

/* css */
import './styles.css'

let cx = 0
let cy = 0
let lensCurrent = null
let imageCurrent = null
let resultCurrent = null

const SilderImage = ({
  data, width, showDescription, direction,
}) => {
  const [index, setIndex] = useState(0)
  const selectedImage = data[index]
  const refImage = useRef()
  const refLens = useRef()
  const refResult = useRef()

  function getCursorPos(e, imageCurrent) {
    let x = 0
    let y = 0
    const getBoundingImage = imageCurrent.getBoundingClientRect()

    e = e || window.event
    x = e.pageX - getBoundingImage.left - window.pageXOffset
    y = e.pageY - getBoundingImage.top - y - window.pageYOffset

    return { x, y }
  }

  useEffect(() => {
    lensCurrent = refLens.current
    imageCurrent = refImage.current
    resultCurrent = refResult.current

    function moveLens(e, imageWidth, imageHeight, offsetWidthLens, offsetHeightLens) {
      e.preventDefault()
      let x = 0
      let y = 0

      const pos = getCursorPos(e, imageCurrent)
      x = pos.x - offsetWidthLens / 2
      y = pos.y - offsetHeightLens / 2

      if (x > imageWidth - offsetWidthLens) {
        x = imageWidth - offsetWidthLens
      }
      if (x < 0) {
        x = 0
      }
      if (y > imageHeight - offsetHeightLens) {
        y = imageHeight - offsetHeightLens
      }
      if (y < 0) {
        y = 0
      }

      lensCurrent.style.left = `${x}px`
      lensCurrent.style.top = `${y}px`
      resultCurrent.style.backgroundPosition = `-${x * cx}px -${y * cy}px`
    }
    if (imageCurrent !== null) {
      const imageWidth = imageCurrent.width
      const imageHeight = imageCurrent.height || (imageWidth - 120)
      const offsetWidthLens = lensCurrent.offsetWidth
      const offsetHeightLens = lensCurrent.offsetHeight

      cx = resultCurrent.offsetWidth / offsetWidthLens
      cy = resultCurrent.offsetHeight / offsetHeightLens
      resultCurrent.style.backgroundSize = `${imageWidth * cx}px ${imageHeight * cy}px`

      imageCurrent.addEventListener('mousemove', e => moveLens(e, imageWidth, imageHeight, offsetWidthLens, offsetHeightLens))
      lensCurrent.addEventListener('mousemove', e => moveLens(e, imageWidth, imageHeight, offsetWidthLens, offsetHeightLens))
    }

    return () => {
      imageCurrent.removeEventListener('mousemove', moveLens)
      lensCurrent.removeEventListener('mousemove', moveLens)
    }
  }, [])

  const onPrevSlider = useCallback(() => {
    setIndex(prev => (prev - 1 + data.length) % data.length)
  }, [])

  const onNextSlider = useCallback(() => {
    setIndex(prev => (prev + 1) % data.length)
  }, [])

  return (
    <div className="react-slider" style={{ width: width || 'auto' }}>
      <div className="react-slider__container">
        <div className="react-slider__areaZoom">
          <div className="react-slider__lens" ref={refLens} />
          <div className="react-slider__picture">
            <img src={selectedImage.image} alt={selectedImage.image} ref={refImage} />
          </div>
          <div
            ref={refResult}
            className="react-slider__imgZoom"
            style={{
              backgroundImage: `url(${selectedImage.image})`,
              left: `${direction === 'left' && '-107%'}`,
            }}
          />
        </div>
        <button type="button" className="react-slider__btnPrev" onClick={onPrevSlider} />
        <button type="button" className="react-slider__btnNext" onClick={onNextSlider} />
        {showDescription && (
          <div className="react-slider__description">
            {selectedImage.text}
          </div>
        )}
      </div>
      <ul className="react-slider__ul">
        {data.map((item, idx) => (
          <li key={idx} className={idx === index ? 'active' : ''} onClick={() => setIndex(idx)}>
            <img src={item.image} alt="" />
          </li>
        ))}
      </ul>
    </div>
  )
}

SilderImage.propTypes = {
  /** data */
  data: PropTypes.array.isRequired,
  /** left | right */
  direction: PropTypes.string,
  /** show description of image */
  showDescription: PropTypes.bool,
  /** set size slider image */
  width: PropTypes.string,
}

SilderImage.defaultProps = {
  direction: 'right',
  showDescription: true,
  width: 'auto',
}

export default SilderImage
