import Card from 'react-bootstrap/Card'

export default function Cards(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img
                variant="top"
                src="https://pix10.agoda.net/hotelImages/446/4466813/4466813_18021812560062088882.jpg?s=1024x768"
            />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </Card.Text>
                <button className="btn btn-primary">Go somewhere</button>
            </Card.Body>
        </Card>
    )
}
