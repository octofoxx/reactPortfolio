import React from "react";
import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import PortfolioContainer from "./components/portfolioContainer"

const App = () => {
    const [currentPage, setCurrentPage] = useState("About");
    return (
      <div>
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <PortfolioContainer
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <Footer />
      </div>
    );
  };

export default App;
