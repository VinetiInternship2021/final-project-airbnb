import './nrb.css'

export default function NerbyName({ img, location, duration }) {
    return (
        <div style={{ display: 'inline-block' }}>
            <div className="nrb">
                <img className="nrbImg" src={img} />
                <div className="nrbName">
                    <h5>{location}</h5>
                    <span>{duration}</span>
                </div>
            </div>
        </div>
    )
}
