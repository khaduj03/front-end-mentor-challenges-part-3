import "./App.css";
import Header from "./component/Header/Header";
import MonitorRiserCard from "./component/MonitorRiserCard";
import FundingTracker from "./component/FundingTracker";
import Modal from "./component/Modal/Modal";
import { ProductDescription } from "./component/ProductDescription";
import HandlerProvider from "./hooks/useHandleModal";

function App() {
  
  return (
    <div className="relative  h-auto w-auto bg-grayLight">
      {/* header section */}
      <Header />

      <HandlerProvider>
      <main className="px-12 pb-32 flex flex-col space-y-6 justify-center items-center bg-grayLight">
        <MonitorRiserCard  />
        <FundingTracker />
        <ProductDescription />
      </main>
      <div className="p-4">
        <Modal/>
      </div>
      </HandlerProvider>

    </div>
  );
}

export default App;
