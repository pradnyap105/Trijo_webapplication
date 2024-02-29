import '../components/Footermid.css'

function FooterMenuSection({ title, tooltipContent }) {
    return (
      <div className="footer-subtitles">
        <div className="m-t-10">
          <div className="b-tooltip is-light is-right is-medium">
            <div className="tooltip-content" style={{ display: 'none' }}>
              {tooltipContent}
            </div>
            <div className="tooltip-trigger">
              <p className="is-size-6 p-b-10 has-text-white">{title}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  function FooterColumn({ title, items }) {
    return (
      <div className="column is-6 has-text-white">
        <div className="is-clickable">
          <h6 className="is-size-5 has-text-weight-semibold p-b-20 p-b-0-mob">{title}</h6>
          <span className="material-icons is-hidden-tablet">
            <span></span>
          </span>
        </div>
        <div className="footer-menu-section" style={{ display: 'none' }}>
          {items.map((item, index) => (
            <FooterMenuSection key={index} {...item} />
          ))}
        </div>
        {items.map((item, index) => (
          <div key={index} className="is-hidden-mobile is-clickable">
            <FooterMenuSection {...item} />
          </div>
        ))}
      </div>
    );
  }
  
  function Footermid() {
    const planTripItems = [
      { title: 'Road trips by destination', tooltipContent: 'Coming Soon' },
      { title: 'Best trips near me', tooltipContent: 'Coming Soon' },
      { title: 'Travel questions and answers', tooltipContent: 'Coming Soon' },
      { title: 'Travel itinerary guide', tooltipContent: 'Coming Soon' },
      { title: 'Have I seen it all?', tooltipContent: 'Coming Soon' },
    ];
  
    const aboutUsItems = [
      { title: 'Blog', tooltipContent: 'Coming Soon' },
      { title: 'Terms and Condition', tooltipContent: 'Coming Soon' },
      { title: 'Privacy policy', tooltipContent: 'Coming Soon' },
      { title: 'Mobile app', tooltipContent: 'Coming Soon' },
      { title: 'Contact Us', tooltipContent: 'Coming Soon' },
    ];
  
    return (
      <div className="column  is-5 has-text-centered-mobile">
        <div className="columns Footertext d-flex m-0 mx-auto ">
          <FooterColumn title="Plan Trip" items={planTripItems} />
          <FooterColumn title="About Us" items={aboutUsItems}  className="mx-auto"/>
        </div>
      </div>
    );
  }
  
  export default Footermid;
  