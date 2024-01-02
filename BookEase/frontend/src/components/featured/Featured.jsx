import useFetch from "../../hooks/useFetch"
import "./featured.css"

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=nagpur,bangalore,mumbai"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://www.nagpurtrends.com/uploads/TPHDym-NagpurDoubleDecker1.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Nagpur</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://www.tripsavvy.com/thmb/QS7YoZPIIgBNklph1Cjeq3mDgUk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-536116268-5b5d74e846e0fb0050adcf3b.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Bangalore</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://static.toiimg.com/photo/103532002.cms"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Mumbai</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;