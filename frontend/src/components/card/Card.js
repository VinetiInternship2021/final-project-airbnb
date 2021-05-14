import Card from 'react-bootstrap/Card'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import Slider from '../slider/Slider'
import { propertyData } from './../redux/actions'

function Cards({ data, propertyData }) {
    const redirect = useHistory()
    const addPropDataToRedux = () => {
        propertyData(data)
        redirect.push('/order')
    }
    return (
        <>
            <Card style={{ width: '18rem' }} className="cardPos">
                <Slider imgList={data?.img_lists} />
                <br />
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                        <b>Guests | </b>
                        <span>{data.guests}</span>
                        <br />
                        <b>Day Price | </b>
                        <span>{data.price}</span>
                    </Card.Text>
                    <Link
                        to="/order"
                        onClick={addPropDataToRedux}
                        className="btn btn-danger"
                    >
                        Show More & Order
                    </Link>
                </Card.Body>
            </Card>
        </>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
    propertyData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)
