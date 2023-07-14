import Feed from "./components/Feed";

const App = () => {
  return (
    <section className="w-full flex justify-center overflow-hidden">
      <div className="w-full max-w-6xl flex flex-col items-center space-y-6 justify-center mt-12 my-4">
        <Feed />
      </div>
    </section>
  );
};

export default App;
