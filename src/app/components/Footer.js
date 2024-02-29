import React from "react";
import Link from 'next/link';
import Footermid from "./Footermid";

import '../components/Footer.css'
import Image from "next/image";


export default function Footer() {
  return (
    <>
      <div className=" Container-fluid">
        <div className=" Footer Container">
          <div
           className=" row"
            style={{ backgroundColor: "#4a4a4a", textAlign: "center" }}
          >
            <div className="col-3 ">
              <img src="images/logo/trijo-logo.png" className="footerlogo" />
              <div className="has-text-white has-text-centered">
                <span>
                  <span className="material-icons md-17 p-r-10 p-b-5">©</span>
                  2023 Trijo.com
                </span>
              </div>
            </div>
            <div className="col-5 ">
           <Footermid/>
            </div>
            <div className="col-4 Logosf">  
           
                <div className="p-t-35  p-b-50 Direction d-flex">
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
                    className="logo2 "
                  />
               
                 
                
              </div></div>
          </div>
        </div>
      </div>
    </>
  );
}

