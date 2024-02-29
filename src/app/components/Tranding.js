import React from 'react'

export default function Features() {
    return (
        <div className="card-deck">
          {/* Card 1 */}
          <div className="card">
            <img className="card-img-top" src=".../100px180/" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
    
          {/* Card 2 */}
          <div className="card">
            <img className="card-img-top" src=".../100px180/" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
    
          {/* Card 3 */}
          <div className="card">
            <img className="card-img-top" src=".../100px180/" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      );
    };
