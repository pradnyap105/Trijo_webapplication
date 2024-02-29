import React from "react";
import Image from "next/image";
import "../components/Plan.css";

export default function Plan() {
  return (
    <>
      <div className="Plan container-fluid">
        <div className="container">
          <div className="row">
            <div className="col">
              <h6 className="Planhead">
                {" "}
                Plan on the go with our free travel app
              </h6>
              <p className="Planedbottom">
                With Trijo mobile travel planner on android and iOS, access and
                edit your trips wherever you go and even while offline.
              </p>
              <div>
                <div className="p-t-35  p-b-50 d-flex">
                  <Image
                    src="/images/Plan/google-play.png"
                    alt="App Store"
                    width={133}
                    height={39}
                  />
                  <Image
                    src="/images/Plan/app-store.png"
                    alt="Google Play Store"
                    width={133}
                    height={39}
                  />
                </div>
              </div>
            </div>
            <div className="col">
              {/* <Image src="/images/Plan/travel-map.png" alt="App Store" width={""} height={""} /> */}
              <img src="/images/Plan/travel-map.png"  className="d-block w-100" alt="..."/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
