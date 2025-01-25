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
                <span>دسته بندی ها</span>
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
                <span>تخفیف ها</span>
              </a>
              <span className="noty">
                <span>تخفیف ها</span>
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
                <span>دسترسی سریع</span>
              </a>
              <span className="noty">
                <span>دسترسی سریع</span>
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
                <span>بلاگ</span>
              </a>
              <span className="noty">
                <span>بلاگ</span>
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