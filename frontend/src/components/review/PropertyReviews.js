import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { reqGetToken, reqRed } from '../../api/api'
import StarRatings from 'react-star-ratings'

const PropertyReviews = ({ currentUser, property }) => {
  const [data, setData] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function req() {
      const results = await reqGetToken(
        `thisPropertyReviews?id=${property.id}`,
        currentUser.token
        )
        setData(results)
      }
      req()

      reqRed('/userLists').then((e) => {
        setUsers(() => e)
      })
    }, [])

  return (
    <>
    <div className="container" style={{ width: '60rem' }}>
      <p>
        <StarRatings
          rating={data.avg_rating}
          starRatedColor="#e0366f"
          numberOfStars={5}
          starDimension="1.8rem"
          starSpacing="0"
        />

        Average: {data.avg_rating} stars by {data.count} people
      </p>
    </div>
    <div className="d-flex justify-content-lg-center mt-4">
      <div className="container" style={{ width: '60rem' }}>
        <div className="row">
          {!data.reviews ?(
            <h1> There are no reviews, be the first to rate this property!</h1>
            ) : (
            data.reviews.map((review) => (
              <div className="card" style={{ width: '29.5rem', marginBottom: "1rem", padding: 0, marginRight: review.id % 2 === 0 ? 0 : "1rem" }}>
                <div className="card-img-top d-flex align-items-center bg-light">
                  <div>
                    <img
                    src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Penguin-512.png"
                    alt="avatar"
                    style={{width: "5rem", borderRadius: "50%", margin: "1rem"}}/>
                  </div>
                  <span>
                    <h5 className="card-title">
                      {users[review.user_id].firstName} {users[review.user_id].lastName}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      <StarRatings
                        rating={review.rate}
                        starRatedColor="#e0366f"
                        numberOfStars={5}
                        starDimension="1.8rem"
                        starSpacing="0"
                      />
                    </h6>
                  </span>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    {review.title}
                  </h5>
                  <hr/>
                  <p className="card-text">
                    {review.description}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  </>
  )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser.status[0],
    property: state.user.propID[0]
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyReviews)
