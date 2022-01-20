import Product from "./components/Product";
import "./App.css";
import Data from "./dummyData.json";
const App = () => {
  return (
    <main>
      <div className="container">
        {Data.products.map((product, index) => (
          <Product {...product} key={index} />
        ))}
      </div>
    </main>
  );
};
export default App;
