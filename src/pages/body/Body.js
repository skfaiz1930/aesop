import React from "react";
import "react-multi-carousel/lib/styles.css";
import CarouselMain from "../../components/carousel/Carousel";
import { cDataOne, cDataThree, cDataTwp } from "../../components/carousel/data";
import HeaderDesc from "../../components/header/HeaderDesc";
import "./body.css";

const Body = () => {
  return (
    <div
      className="container-fluid px-0"
      style={{ backgroundColor: "#FFFEF2", height: "1000px" }}
    >
      <div className="header-desc-2">
        <HeaderDesc />
      </div>

      <div className="py-5"></div>
      <CarouselMain data={cDataOne} />

      <div className="py-5"></div>
      <div className="py-5"></div>
      <div className="row justify-content-between px-0 mx-0">
        <div className="col-md-7 px-0">
          <img src="./assets/pages.webp" className="page-img" alt="img" />
        </div>
        <div className="col-md-5 px-5">
          <h1 className="fw-light">Interior fragrances to lift the mood</h1>
          <p className="py-5">
            Ideal for those working from home offices and spaces in need of
            refreshment, our Home range comprises a number of fragrant
            preparations, from oil burner blends to room sprays.
          </p>
          <button className="btn btn-b w-75">
            <div className="d-flex justify-content-between align-items-center pt-2 px-3">
              <p className="fw-bold">Browse Scented Home</p>
              <p>
                <i class="fa fa-arrow-right"></i>
              </p>
            </div>
          </button>
        </div>
      </div>
      <div className="py-5"></div>
      <div className="py-5"></div>
      <CarouselMain data={cDataTwp} />
      <div className="py-5"></div>
      <div className="py-5"></div>
      {/* video section */}
      <div className="row justify-content-between px-0 mx-0">
        <div className="col-md-7 px-0">
          <video autoPlay muted loop className="page-img">
            <source src="./assets/flowerVid.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="col-md-5 px-5">
          <p className="fw-bold mb-4">The Athenaeum</p>
          <h1 className="fw-light">Decoding fragrance</h1>
          <p className="py-5">
            The language of notes, sillage and aromatic profiles allows us to
            describe perfume. Discover our guide to selecting a signature
            fragrance.
          </p>
          <button className="btn btn-b w-75">
            <div className="d-flex justify-content-between align-items-center pt-2 px-3">
              <p className="fw-bold">Read more</p>
              <p>
                <i class="fa fa-arrow-right"></i>
              </p>
            </div>
          </button>
        </div>
      </div>
      {/* video section ends */}
      <div className="py-5"></div>
      <h1 className="mx-5 fw-light mb-5">A superlative selection</h1>
      <CarouselMain data={cDataThree} />
      <div className="py-5"></div>
      <div className="py-5"></div>
      {/* store locator */}
      <div className="row justify-content-between px-0 mx-0">
        <div className="col-md-5 px-5">
          <h1 className="fw-light">Store Locator</h1>
          <p className="py-5">
            Our consultants are available to host you in-store and provide
            tailored guidance on gift purchases.
          </p>
          <button className="btn btn-b w-75 store-btn">
            <div className="d-flex justify-content-between align-items-center pt-2 px-3">
              <p className="fw-bold">Find a nearby store</p>
              <p>
                <i class="fa fa-arrow-right"></i>
              </p>
            </div>
          </button>
        </div>

        <div className="col-md-7 px-0">
          <img src="./assets/store.jpg" className="page-img" alt="img" />
          <p className="fw-light py-5">Aesop Hollywood Road</p>
        </div>
      </div>
      {/* store locator ends */}
      <div className="py-5"></div>
      <div className="py-5"></div>
      <h1 className="text-center fw-light" style={{ fontSize: "30px",fontWeight:"light" }}>
        ‘Fragrance is the voice of inanimate things.’
      </h1>
      <p className="text-center fw-bold my-4">Mary Webb</p>

      {/* footer--------------- start */}

      <div style={{ backgroundColor: "#333333" }} className="footer-main">
        <div className="row mx-0 px-4 py-5">
          <div className="col-md-5">
            <div className="inp-div">
              <input
                type="email"
                placeholder="Email address"
                className="inp-email"
              />
              <h6 className="text-light fw-light inp-email-arrow">
                <i class="fa fa-arrow-right"></i>
              </h6>
            </div>
            <div className="d-flex mt-4">
              <input type="checkbox" className="check"></input>
              <p className="text-light px-3">
                Subscribe to receive communications from Aesop about our
                products and services. By subscribing, you confirm you have read
                and accept our{" "}
                <a href="" style={{ color: "white" }}>
                  privacy policy <i class="fa fa-arrow-up"></i>{" "}
                </a>
              </p>
            </div>
          </div>

          <div className="col-md-2 fifty">
            <p className="fw-bold text-light">Orders and support</p>
            <div className="foot-nav-border"></div>
            {/* links */}
            <div class="list-group mt-4">
              <a href="" className="link mb-3">
                Contact Us
              </a>
              <a href="" className="link mb-3">
                FAQs
              </a>
              <a href="" className="link mb-3">
                Shipping
              </a>
              <a href="" className="link mb-3">
                Returns
              </a>
              <a href="" className="link mb-3">
                Order history
              </a>
              <a href="" className="link mb-3">
                Terms and conditions
              </a>
            </div>
          </div>

          <div className="col-md-2 fifty">
            <p className="fw-bold text-light">Services</p>
            <div className="foot-nav-border"></div>
            {/* links */}
            <div class="list-group mt-4">
              <a href="" className="link mb-3">
                Live assistance
              </a>
              <a href="" className="link mb-3">
                Corporate gifts
              </a>
              <a href="" className="link mb-3">
                Facial appointments
              </a>
            </div>
          </div>

          <div className="col-md-2 fifty">
            <p className="fw-bold text-light">Location preferences</p>
            <div className="foot-nav-border"></div>
            {/* links */}
            <div class="list-group mt-4">
              <p className="text-light">
                Shipping:{" "}
                <a href="" className="link mb-3 text-decoration-underline">
                  Hong Kong (S.A.R)
                </a>
              </p>
              <p className="text-light">
                Language:{" "}
                <a href="" className="link mb-3 text-decoration-underline">
                  English
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* -------------- */}
        <div
          className="row mx-0 px-4 pb-5"
          style={{ backgroundColor: "#333333" }}
        >
          <div className="col-md-5">
            <p className="fw-bold text-light">Sustainability</p>
            <div className="foot-nav-border"></div>
            {/* links */}
            <div className="mt-4">
              <p className="text-light">
                All Aesop products are vegan, and we do not test our
                formulations or ingredients on animals. We are Leaping Bunny
                approved and a Certified B Corporation. Learn more
              </p>
            </div>
          </div>

          <div className="col-md-2 about-link fifty">
            <p className="fw-bold text-light">About</p>
            <div className="foot-nav-border"></div>
            {/* links */}
            <div class="list-group mt-4">
              <a href="" className="link mb-3">
                Our Story
              </a>
              <a href="" className="link mb-3">
                Foundation
              </a>
              <a href="" className="link mb-3">
                Careers
              </a>
              <a href="" className="link mb-3">
                Privacy policy
              </a>
              <a href="" className="link mb-3">
                Accessibility
              </a>
            </div>
          </div>

          <div className="col-md-2 fifty">
            <p className="fw-bold text-light">Social media</p>
            <div className="foot-nav-border"></div>
            {/* links */}
            <div class="list-group mt-4">
              <a href="" className="link mb-3">
                Instagram
              </a>
              <a href="" className="link mb-3">
                Twitter
              </a>
              <a href="" className="link mb-3">
                LinkedIn
              </a>
              <a href="" className="link mb-3">
                WeChat
              </a>
              <a href="" className="link mb-3">
                Weibo
              </a>
            </div>
          </div>
        </div>
        {/* ------------- */}
        <div className="liner"></div>

        <h6 className="text-light py-4 px-5">© Aesop</h6>
      </div>
      {/* footer ends */}
    </div>
  );
};

export default Body;
