import useFetch from "../../hooks/useFetch";
import "./propertyList.css"

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  const images = [
    "https://www.intechnic.com/hubfs/Blog/Featured%20Images/Best%20Hotel%20Website%20Designs.jpg",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/383834719.jpg?k=a8ed632aeaf2eb621e6753e941d4fb2f858005614b603cdef5bfe644ce1a1906&o=&hp=1",
    "https://www.holidify.com/images/cmsuploads/compressed/34223229_20220223170419.jpg",
    "https://www.kenthomes.in/wp-content/uploads/2019/10/Kent-Nalukettu-Palm-Villa.jpg",
    "https://static.wixstatic.com/media/3ffa1d_35ac4f6b1fa245858e61e527bbc011b0~mv2.jpg/v1/fill/w_1199,h_800,al_c/3ffa1d_35ac4f6b1fa245858e61e527bbc011b0~mv2.jpg",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;