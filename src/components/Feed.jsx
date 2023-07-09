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

          {item.images.map(
            (image, i) =>
              item.images.length === 2 && (
                <div className="flex flex-row w-full" key={i}>
                  <img
                    src={image}
                    alt={item.username}
                    className="w-1/2 h-full"
                  />
                </div>
              )
          )}
        </section>
      ))}
    </>
  );
};

export default Feed;
