import React from 'react';
import './footer.css';


function Footer() {
  return (
    <div>
      <footer className="footer__parent" id="footer">
        <div className="footer__main container-fluid">
          <div className="section__parent row">
            <section className="footer__section col-lg-3 col-md-3 col-sm-6">
              Popular Categories<ul>
                <li>
                  <span className="footer__list" >
                    Cars
                  </span>
                </li>
                <li>
                  <span className="footer__list" >
                    Flats for rent
                  </span>
                </li>
                <li>
                  <span className="footer__list" >
                    Jobs
                  </span>
                </li>
                <li>
                  <span
                    className="footer__list"

                  >
                    Mobile Phones
                  </span>
                </li>
              </ul>
            </section>
            <section className="footer__section col-lg-2 col-md-2 col-sm-6">
              Trending Searches<ul>
                <li>
                  <span
                    className="footer__list">
                    Bikes
                  </span>
                </li>
                <li>
                  <span
                    className="footer__list"
                  >
                    Watches
                  </span>
                </li>
                <li>
                  <span
                    className="footer__list"
                  >
                    Books
                  </span>
                </li>
                <li>
                  <span
                    className="footer__list"
                  >
                    Dogs
                  </span>
                </li>
              </ul>
            </section>
            <section className="footer__section col-lg-2 col-md-2 col-sm-6">
              About us<ul>
                <li>
                  <span className="footer__list">
                    About OLX Group
                  </span>
                </li>
                <li>
                  <span className="footer__list">
                    OLX Blog
                  </span>
                </li>
                <li>
                  <span className="footer__list">
                    Contact Us
                  </span>
                </li>
                <li>
                  <span className="footer__list">
                    OLX for Businesses
                  </span>
                </li>
              </ul>
            </section>
            <section className="footer__section col-lg-2 col-md-2 col-sm-6">
              OLX<ul>
                <li>
                  <span className="footer__list">
                    Help
                  </span>
                </li>
                <li>
                  <span className="footer__list">
                    Sitemap
                  </span>
                </li>
                <li>
                  <span className="footer__list">
                    Legal &amp; Privacy information
                  </span>
                </li>
              </ul>
            </section>
            
          </div>
        </div>
        <div className="footer__bottom">
          <div className="section__parent">
            <h3>COPYRIGHT 2021 ALL RIGHTS RESERVED</h3>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
