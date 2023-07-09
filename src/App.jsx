import Feed from "./components/Feed";

const App = () => {
  return (
    <section className="w-screen flex justify-center">
      <div className="w-full max-w-6xl flex flex-col items-center space-y-6 justify-center mt-12">
        <Feed />
      </div>
    </section>
  );
};

export default App;
