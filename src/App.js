import "./App.css";
import TabTest from "./components/custom-tabs/tab-test";
// import ScrollIndicator from "./components/scroll-indicator";
// import LightDarkMode from "./components/light-dark";
// import Accordian from "./components/accordian/index.jsx";
// import ImageSlider from "./components/image-slider";
// import LoadMoreData from "./components/load-more-data";
// import RandomColor from "./components/random-color";
// import StarRating from "./components/star-rating";
// import QRCodeGenerator from "./components/qr-code-generator/index.jsx";

function App() {
  return (
    <div className="App">
      {/* This is Accordian Component */}
      {/* <Accordian /> */}
      {/* Random color component */}
      {/* <RandomColor /> */}

      {/* Star Rating Component */}
      {/* <StarRating noOfStars={10}/> */}

      {/* Image slider component */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"4"}
      /> */}

      {/* Load more Data  */}
      {/* <LoadMoreData /> */}

      {/* QR Code Generator */}
      {/* <QRCodeGenerator/> */}

      {/* light-dark mode */}
      {/* <LightDarkMode/> */}

      {/* Scroll indicator */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* Custom Tabs */}
      <TabTest />
    </div>
  );
}

export default App;
