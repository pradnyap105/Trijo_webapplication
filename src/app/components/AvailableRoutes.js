import React from "react";
import "../components/AvailableRoutes.css";
export default function AvailableRoutes() {
  return (
    <>
      <div className="container-fluid  p-2">
        <h2 className="HeadRoutes ">Available Routes</h2>
        <div className="d-flex justify-content-between align-items-center HeadRoutes2">
          <p className="Community">Popular in Community</p>
          <button type="button" className=" btnroutes btn btn-primary">
            View All
          </button>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Routes
                title="Exquisite Gurudongmar"
                description="View Map."
                imageUrl="images/Routes/home-banner-3.png"
                logoUrl="images/logo/download.png"
              />
            </div>
            <div className="col">
              <Routes
                title="Peaceful North East"
                description="View Map."
                imageUrl="images/Routes/home-banner-2.png"
                logoUrl="images/logo/download.png"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Routes
                title="Royal Rajasthan"
                description="View Map."
                imageUrl="images/Routes/home-banner-4.png"
                logoUrl="images/logo/download.png"
              />
            </div>
            <div className="col">
              <Routes
                title="Tranquil Tamil Nadu"
                description="View Map."
                imageUrl="images/Routes/home-banner-1.png"
                logoUrl="images/logo/download.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Routes({ title, description, imageUrl, logoUrl }) {
  return (
    <div className="col">
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={imageUrl} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <div className="d-flex card-body">
                
                <p className=" ">
                  <img src={logoUrl} className="img-fluid mb-2" alt="Logo" />
                </p>
                <p className="card-text">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div>
<AvailableRoutes
  title="Card title"
  description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  imageUrl="images/cards/build-travel.png"
  lastUpdated="3 mins ago"
/>
</div> */
}
