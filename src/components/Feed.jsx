import { dummy } from "../assets/data";

const Feed = () => {
  return (
    <>
      {dummy.map((item, index) => (
        <section
          className="w-96 max-w-sm border flex flex-col p-1 rounded-sm"
          key={index}
        >
          <h4 className="text-xs font-semibold">@{item.username}</h4>

          {item.images.length === 2 && (
            <div className="flex">
              {item.images.map((image, i) => (
                <img src={image} key={i} className="w-1/2 object-fill" />
              ))}
            </div>
          )}
          {item.images.length === 1 && (
            <div className="flex">
              {item.images.map((image, i) => (
                <img src={image} key={i} className="w-full object-fill" />
              ))}
            </div>
          )}
          {item.images.length > 2 && (
            <div className="grid grid-cols-2">
              {item.images.slice(0, 3).map((image, i) => (
                <img src={image} key={i} className="  object-fill" />
              ))}
            </div>
          )}
        </section>
      ))}
    </>
  );
};

export default Feed;

// test commit for 11 July
// test commit for 12 July
// test commit for 13 July
