import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css'

const AutoplaySlider = withAutoplay(AwesomeSlider)

export default function Slider({ imgList }) {
    return (
        <AutoplaySlider
            play={true}
            cancelOnInteraction={true} // should stop playing on user interaction
            interval={100}
        >
            {imgList.map(({ imgUrl, id }, index) => (
                <div data-src={imgUrl} key={id} />
            ))}
        </AutoplaySlider>
    )
}
