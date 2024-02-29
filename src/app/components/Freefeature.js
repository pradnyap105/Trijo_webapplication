import React from "react";
import '../components/Freefeature.css'

export default function Freefeature() {
  return (
    <>
      <div className="container-fluid text-center">
        <h2 className="container Feature">Free Feature </h2>
        <div className="row">
          <div className="col">
            <FreeFeatureCard
              imagePath="images/cards/build-travel.png"
              title="Curate Your Road Trip"
              description="Explore ready road trip ideas or plan your own trip, customize day-wise planning"
            />
          </div>
          <div className="col">
            <FreeFeatureCard
              imagePath="images/cards/collaborate-friends.png"
              title="Handy Trip Tools"
              description="Routing and Navigation maps,  easy accessibility and alert mechanism"
            />
          </div>
          <div className="col">
            <FreeFeatureCard
              imagePath="images/cards/create-trip.png"
              title="Collaborate with Friends"
              description="Invite Friends, make new ones & trip together, Thought exchange among travel community"
            />
          </div>
          <div className="col">
            <FreeFeatureCard
              imagePath="images/cards/create-trip.png"
              title="Collaborate with Friends"
              description="Invite Friends, make new ones & trip together, Thought exchange among travel community"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export function FreeFeatureCard({ imagePath, title, description }) {
  return (
    <div className="col">
      <div className="card">
        <img src={imagePath} className=" card-img-top" alt="..." />
        <div className="card-body">
          <p className="A card-title fw-bold">{title}</p>
          <p className="text card-text fw-light">{description}</p>
        </div>
      </div>
    </div>
  );
}