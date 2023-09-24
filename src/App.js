import React from "react";
import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Project from "./components/project";

const App = () => {
    const [currentPage, setCurrentPage] = useState("About");
    return (
      <div>
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Project
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <Footer />
      </div>
    );
  };

export default App;
