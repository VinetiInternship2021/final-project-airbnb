import Card from 'react-bootstrap/Card'
import Slider from '../slider/Slider'

export default function Cards({ data }) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Slider imgList={data?.img_lists} />
                <br />
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                        <b>Guests | </b>
                        <span>{data.guests}</span>
                        <b>Day Price | </b>
                        <span>{data.price}</span>
                    </Card.Text>
                    <button className="btn btn-danger">Show More</button>
                </Card.Body>
            </Card>
        </>
    )
}
