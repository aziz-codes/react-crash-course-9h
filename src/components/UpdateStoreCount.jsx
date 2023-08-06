import { Store } from "../context/Context";

const UpdateStoreCount = () => {
  const { setCount } = Store();
  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default UpdateStoreCount;
