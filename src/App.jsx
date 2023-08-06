import Test1 from "./components/Test1";
import Test2 from "./components/Test2";
import UpdateStoreCount from "./components/UpdateStoreCount";

const App = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center overflow-hidden gap-2">
      <UpdateStoreCount />
      <div className="flex gap-6">
        <Test1 />
        <Test2 />
      </div>
    </section>
  );
};

export default App;
