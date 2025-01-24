import React, { Component } from 'react'


const Slider = () => {
    return (
        // <!-- Slide Navigation section to section -->
    <div className="ms-section-navigation">
      <nav className="ms-navigation">
        <div>
          <ul>
            <li>
              <a
                href="javascript:void(0)"
                className="navs-link nav-home"
                data-section="ms-home"
              >
                <img
                  src="assets/img/icons/home.svg"
                  className="svg_img pro_svg"
                  alt=""
                />
                <span>صفحه اصلی</span>
              </a>
              <span className="noty">
                <span>صفحه اصلی</span>
              </span>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="navs-link nav-product"
                data-section="ms-product-tab"
              >
                <img
                  src="assets/img/icons/product.svg"
                  className="svg_img pro_svg"
                  alt=""
                />
                <span>موارد</span>
              </a>
              <span className="noty">
                <span>محصولات</span>
              </span>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="navs-link nav-offer"
                data-section="ms-offer-section"
              >
                <img
                  src="assets/img/icons/offer.svg"
                  className="svg_img pro_svg"
                  alt=""
                />
                <span>پیشنهادات</span>
              </a>
              <span className="noty">
                <span>پیشنهادات</span>
              </span>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="navs-link nav-listing"
                data-section="ms-listing-section"
              >
                <img
                  src="assets/img/icons/listing.svg"
                  className="svg_img pro_svg"
                  alt=""
                />
                <span>فهرست</span>
              </a>
              <span className="noty">
                <span>فهرست</span>
              </span>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="navs-link nav-news"
                data-section="ms-news-section"
              >
                <img
                  src="assets/img/icons/blog.svg"
                  className="svg_img pro_svg"
                  alt=""
                />
                <span>اخبار</span>
              </a>
              <span className="noty">
                <span>اخبار</span>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    // <!-- End Slide navigation section to section -->
    )
}

export default Slider