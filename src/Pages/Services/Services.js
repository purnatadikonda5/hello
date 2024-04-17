import React from "react";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";

const Services = () => {
  return (
    <div>
      <Header />
      <Banner page={"services"} />
      <div className="text-center text-info display-1 fw-bold">
        SERVICES IS COMING SOON
      </div>
      {/* <div style={{ marginTop: "0px" }}>
        {" "}
        <ServiceCard />
      </div> */}
      <Footer />
    </div>
  );
};

export default Services;
