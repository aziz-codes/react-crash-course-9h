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
          {item.images.length === 3 && (
            <div className="flex flex-row gap-0.5">
              <img
                src={item.images[0]}
                className="h-full w-1/2 rounded-sm object-center object-cover"
                alt="girl"
              />
              <div className="flex flex-col h-full gap-0.5">
                <img
                  src={item.images[1]}
                  className="h-1/2 w-full object-center"
                />
                <img
                  src={item.images[2]}
                  className="h-1/2 w-full object-center"
                />
              </div>
            </div>
          )}

          {item.images.length > 3 && (
            <div className="flex flex-row gap-0.5">
              <img
                src={item.images[0]}
                className="h-full w-1/2 rounded-sm object-center object-cover"
                alt="girl"
              />
              <div className="flex flex-col h-full gap-0.5">
                <img
                  src={item.images[1]}
                  className="h-1/2 w-full object-center"
                />

                <div
                  className="relative h-1/2 w-full object-center flex justify-center 
                items-center "
                >
                  <img
                    src={item.images[item.images.length - 1]}
                    className="h-full w-full -z-1"
                  />
                  <div className="absolute h-full w-full bg-opacity-90 bg-gray-400 flex justify-center items-center">
                    <h4 className="text-4xl text-gray-800">
                      +{item.images.length}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      ))}
    </>
  );
};
export default Feed;
