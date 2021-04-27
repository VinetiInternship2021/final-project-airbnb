import Card from 'react-bootstrap/Card'
import Slider from '../slider/Slider'

const list = [
    {
        src:
            'https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg',
    },
    {
        src:
            'https://storage.googleapis.com/static-content-hc/sites/default/files/cataloina_porto_doble_balcon2_2.jpg',
    },
]

export default function Cards(props) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Slider imgList={list} />
                <br />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </Card.Text>
                    <button className="btn btn-danger">Show More</button>
                </Card.Body>
            </Card>
        </>
    )
}
