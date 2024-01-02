import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css"

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src="https://www.frankfurt-airport.com/content/dam/fraport-travel/airport/reisevorbereitung/hotels/Bestwestern_1920x1080.jpg/_jcr_content/renditions/original./Bestwestern_1920x1080.jpg"
                //for temporary provision I am giving link to the featured property item
                //{item.photos[0]}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from Rs{item.cheapestPrice}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};
export default FeaturedProperties