import React, { Component } from 'react'

const NewProduct = () => {
    return (
        <section className="section ms-product-tab ms-slide padding-tb-80">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2>محصولات <span> جدید</span></h2>
            </div>
          </div>

          {/* <!-- Tab Start --> */}
          <div className="col-md-12 ms-pro-tab">
            <ul className="ms-pro-tab-nav nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link active" data-bs-toggle="tab" href="#all"
                  >همه</a
                >
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#snack"
                  >میان وعده و ادویه</a
                >
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#fruit"
                  >میوه‌ها</a
                >
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#veg">سبزیجات</a>
              </li>
            </ul>
          </div>
          {/* <!-- Tab End --> */}
        </div>

        {/* <!-- New Product --> */}
        <div className="row margin-minus-b-15">
          <div className="col">
            <div className="tab-content">
              {/* <!-- 1st Product tab start --> */}
              <div className="tab-pane fade show active" id="all">
                <div className="row">
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/4_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/4_2.jpg"
                              alt="Product"
                            />
                          </a>
                          <span className="flags">
                            <span className="new">جدید</span>
                          </span>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">غذاها</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html"
                            >تراشه های موز میان وعده</a
                          >
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">45.00 تومان</span>
                            <span className="old-price">50.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/20_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/20_1.jpg"
                              alt="Product"
                            />
                          </a>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">سبزیجات</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html">سایور مارچوبه</a>
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star sill"></i>
                            <span className="qty">1 کیلوگرم</span>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">10.00 تومان</span>
                            <span className="old-price">11.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/28_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/28_1.jpg"
                              alt="Product"
                            />
                          </a>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">تنقلات</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html">انبه - کسار</a>
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className="qty">20 کیلوگرم</span>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">50.00 تومان</span>
                            <span className="old-price">55.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/7_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/7_2.jpg"
                              alt="Product"
                            />
                          </a>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">غذاها</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html"
                            >خشک مخلوط میوه ها</a
                          >
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">49.00 تومان</span>
                            <span className="old-price">65.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/8_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/8_2.jpg"
                              alt="Product"
                            />
                          </a>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">تنقلات</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html"
                            >عسل دودی آجیل ادویه دار</a
                          >
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">32.00 تومان</span>
                            <span className="old-price">45.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/25_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/25_1.jpg"
                              alt="Product"
                            />
                          </a>
                          <span className="flags">
                            <span className="new">جدید</span>
                          </span>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">میوه تازه</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html">لیچی</a>
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <span className="qty">500 گرم</span>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">25.00 تومان</span>
                            <span className="old-price">35.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/2_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/2_2.jpg"
                              alt="Product"
                            />
                          </a>
                          <span className="flags">
                            <span className="sale">فروش</span>
                          </span>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">میوه های خشک</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html"
                            >مقدار تاریخ کیسه</a
                          >
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">78.00 تومان</span>
                            <span className="old-price">85.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label nonveg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/19_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/19_1.jpg"
                              alt="Product"
                            />
                          </a>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">تخم مرغ</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html"
                            >تخم مرغ مزرعه - قهوه ای</a
                          >
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className="qty">3 عدد</span>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">3.00 تومان</span>
                            <span className="old-price">5.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/5_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/5_2.jpg"
                              alt="Product"
                            />
                          </a>
                          <span className="flags">
                            <span className="new">جدید</span>
                          </span>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">تنقلات</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html"
                            >Berry & Graps مخلوط میان وعده</a
                          >
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">25.00 تومان</span>
                            <span className="old-price">35.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content d-n-1199"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/17_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/17_1.jpg"
                              alt="Product"
                            />
                          </a>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">ریشه Tuber</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html"
                            >زنجبیل - ارگانیک</a
                          >
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className="qty">100 گرم</span>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">2.00 تومان</span>
                            <span className="old-price">3.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- 1st Product tab end --> */}
              {/* <!-- 2nd Product tab start --> */}
              <div className="tab-pane fade" id="snack">
                <div className="row">
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/1_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/1_2.jpg"
                              alt="Product"
                            />
                          </a>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">
                            چیپس و سیب زمینی سرخ شده
                          </h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html"
                            >ترد اسنک چیپس مثلثی</a
                          >
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">59.00 تومان</span>
                            <span className="old-price">87.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/2_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/2_2.jpg"
                              alt="Product"
                            />
                          </a>
                          <span className="flags">
                            <span className="sale">فروش</span>
                          </span>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">میوه های خشک</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html"
                            >مقدار تاریخ کیسه بسته</a
                          >
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">78.00 تومان</span>
                            <span className="old-price">85.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/3_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/3_2.jpg"
                              alt="Product"
                            />
                          </a>
                          <span className="flags">
                            <span className="sale">فروش</span>
                          </span>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">میوه های خشک</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html"
                            >کالیفرنیایی بسته ارزشی بادام</a
                          >
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">58.00 تومان</span>
                            <span className="old-price">65.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/4_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/4_2.jpg"
                              alt="Product"
                            />
                          </a>
                          <span className="flags">
                            <span className="new">جدید</span>
                          </span>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">غذاها</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html"
                            >تراشه های موز تنقلات و ادویه ها</a
                          >
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">45.00 تومان</span>
                            <span className="old-price">50.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/5_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/5_2.jpg"
                              alt="Product"
                            />
                          </a>
                          <span className="flags">
                            <span className="new">جدید</span>
                          </span>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">تنقلات</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html"
                            >Berry & Graps مخلوط میان وعده</a
                          >
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">25.00 تومان</span>
                            <span className="old-price">35.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/6_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/6_2.jpg"
                              alt="Product"
                            />
                          </a>
                          <span className="flags">
                            <span className="sale">فروش</span>
                          </span>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">میوه های خشک</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html"
                            >آجیل مخلوط بسته دانه ها و توت ها</a
                          >
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">45.00 تومان</span>
                            <span className="old-price">56.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/7_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/7_2.jpg"
                              alt="Product"
                            />
                          </a>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">غذاها</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html"
                            >آجیل مخلوط و میوه های خشک بادام</a
                          >
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">49.00 تومان</span>
                            <span className="old-price">65.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/8_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/8_2.jpg"
                              alt="Product"
                            />
                          </a>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">تنقلات</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html"
                            >عسل دودی آجیل ادویه دار</a
                          >
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">32.00 تومان</span>
                            <span className="old-price">45.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label nonveg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/9_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/9_2.jpg"
                              alt="Product"
                            />
                          </a>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">غذاها</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html"
                            >برشته شده بادام، تنقلات کدو تنبل</a
                          >
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">49.00 تومان</span>
                            <span className="old-price">65.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content d-n-1199"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/10_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/10_2.jpg"
                              alt="Product"
                            />
                          </a>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">غذاها</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html"
                            >Natmix سالم، بسته 200 گرمی</a
                          >
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star sill"></i>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">28.00 تومان</span>
                            <span className="old-price">30.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- 2nd Product tab end --> */}
              {/* <!-- 3rd Product tab start --> */}
              <div className="tab-pane fade" id="fruit">
                <div className="row">
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/21_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/21_1.jpg"
                              alt="Product"
                            />
                          </a>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">میوه های تازه</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html">اپل</a>
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className="qty">5 عدد</span>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">10.00 تومان</span>
                            <span className="old-price">12.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/22_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/22_1.jpg"
                              alt="Product"
                            />
                          </a>
                          <span className="flags">
                            <span className="sale">فروش</span>
                          </span>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">میوه تازه</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html">کمالام میوه</a>
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className="qty">3 عدد</span>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">15.00 تومان</span>
                            <span className="old-price">17.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/23_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/23_1.jpg"
                              alt="Product"
                            />
                          </a>
                          <span className="flags">
                            <span className="sale">فروش</span>
                          </span>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">میوه های تازه</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html">توت آبی</a>
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className="qty">500 گرم</span>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">11.00 تومان</span>
                            <span className="old-price">12.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/24_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/24_1.jpg"
                              alt="Product"
                            />
                          </a>
                          <span className="flags">
                            <span className="new">جدید</span>
                          </span>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">میوه تازه</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html">گیلاس</a>
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className="qty">1 کیلوگرم</span>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">20.00 تومان</span>
                            <span className="old-price">21.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/25_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/25_1.jpg"
                              alt="Product"
                            />
                          </a>
                          <span className="flags">
                            <span className="new">جدید</span>
                          </span>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">میوه تازه</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html">لیچی</a>
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <span className="qty">500 گرم</span>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">25.00 تومان</span>
                            <span className="old-price">35.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/26_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/26_1.jpg"
                              alt="Product"
                            />
                          </a>
                          <span className="flags">
                            <span className="sale">فروش</span>
                          </span>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">میوه تازه</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html">میوه ستاره</a>
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className="qty">1 کیلوگرم</span>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">5.00 تومان</span>
                            <span className="old-price">6.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/27_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/27_1.jpg"
                              alt="Product"
                            />
                          </a>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">میوه های تازه</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html">گواوا</a>
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className="qty">2 کیلوگرم</span>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">10.00 تومان</span>
                            <span className="old-price">12.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/28_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/28_1.jpg"
                              alt="Product"
                            />
                          </a>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">تنقلات</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html">انبه - کسار</a>
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className="qty">20 کیلوگرم</span>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">50.00 تومان</span>
                            <span className="old-price">55.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/29_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/29_1.jpg"
                              alt="Product"
                            />
                          </a>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">میوه تازه</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html">آناناس</a>
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className="qty">1 psc</span>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">15.00 تومان</span>
                            <span className="old-price">16.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content d-n-1199"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/30_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/30_1.jpg"
                              alt="Product"
                            />
                          </a>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">میوه تازه</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html">موز</a>
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star sill"></i>
                            <span className="qty">12 psc</span>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">9.00 تومان</span>
                            <span className="old-price">10.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- 3rd Product tab end --> */}
              {/* <!-- 4th Product tab start --> */}
              <div className="tab-pane fade" id="veg">
                <div className="row">
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/11_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/11_1.jpg"
                              alt="Product"
                            />
                          </a>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">سبزیجات</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html"
                            >گوجه فرنگی - هیبرید</a
                          >
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className="qty">1 کیلوگرم</span>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">5.00 تومان</span>
                            <span className="old-price">7.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/12_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/12_1.jpg"
                              alt="Product"
                            />
                          </a>
                          <span className="flags">
                            <span className="sale">فروش</span>
                          </span>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">ریشه Tuber</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html">سیب زمینی</a>
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className="qty">5 کیلوگرم</span>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">15.00 تومان</span>
                            <span className="old-price">17.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/13_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/13_1.jpg"
                              alt="Product"
                            />
                          </a>
                          <span className="flags">
                            <span className="sale">فروش</span>
                          </span>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">ریشه Tuber</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html">پیاز - هیبرید</a>
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className="qty">10 کیلوگرم</span>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">25.00 تومان</span>
                            <span className="old-price">30.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/14_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/14_1.jpg"
                              alt="Product"
                            />
                          </a>
                          <span className="flags">
                            <span className="new">جدید</span>
                          </span>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">سبزیجات</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html">گشنیز دسته</a>
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className="qty">250 گرم</span>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">5.00 تومان</span>
                            <span className="old-price">7.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/15_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/15_1.jpg"
                              alt="Product"
                            />
                          </a>
                          <span className="flags">
                            <span className="new">جدید</span>
                          </span>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">سبزیجات</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html"
                            >فلفل دلمه ای - قرمز</a
                          >
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <span className="qty">3 عدد</span>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">2.00 تومان</span>
                            <span className="old-price">3.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/16_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/16_1.jpg"
                              alt="Product"
                            />
                          </a>
                          <span className="flags">
                            <span className="sale">فروش</span>
                          </span>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">سبزیجات</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html">ذرت شیرین</a>
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className="qty">2 عدد</span>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">6.00 تومان</span>
                            <span className="old-price">8.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/17_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/17_1.jpg"
                              alt="Product"
                            />
                          </a>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">ریشه Tuber</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html"
                            >زنجبیل - ارگانیک</a
                          >
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className="qty">100 گرم</span>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">2.00 تومان</span>
                            <span className="old-price">3.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/18_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/18_1.jpg"
                              alt="Product"
                            />
                          </a>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">سبزیجات</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html"
                            >لیمو - بدون دانه</a
                          >
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className="qty">1 کیلوگرم</span>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">8.00 تومان</span>
                            <span className="old-price">9.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label nonveg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/19_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/19_1.jpg"
                              alt="Product"
                            />
                          </a>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">تخم مرغ</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html"
                            >تخم مرغ مزرعه - قهوه ای</a
                          >
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className="qty">3 عدد</span>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">3.00 تومان</span>
                            <span className="old-price">5.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 col-xs-6 ms-col-5 ms-product-content d-n-1199"
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <span className="label veg">
                              <span className="dot"></span>
                            </span>
                            <img
                              className="main-image"
                              src="assets/img/product-images/20_1.jpg"
                              alt="Product"
                            />
                            <img
                              className="hover-image"
                              src="assets/img/product-images/20_1.jpg"
                              alt="Product"
                            />
                          </a>
                          <div className="ms-pro-actions">
                            <a className="ms-btn-group wishlist" title="Wishlist"
                              ><img
                                src="assets/img/icons/pro_wishlist.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="#"
                              className="ms-btn-group quickview"
                              data-link-action="quickview"
                              title="Quick view"
                              data-bs-toggle="modal"
                              data-bs-target="#ms_quickview_modal"
                              ><img
                                src="assets/img/icons/quickview.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              className="ms-btn-group compare"
                              title="Compare"
                              ><img
                                src="assets/img/icons/compare.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                            <a
                              href="javascript:void(0)"
                              title="Add To Cart"
                              className="ms-btn-group add-to-cart"
                              ><img
                                src="assets/img/icons/pro_cart.svg"
                                className="svg_img pro_svg"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-pro-content">
                        <a href="shop-left-sidebar-col-3.html">
                          <h6 className="ms-pro-stitle">سبزیجات</h6>
                        </a>
                        <h5 className="ms-pro-title">
                          <a href="product-left-sidebar.html">سایور مارچوبه</a>
                        </h5>
                        <div className="ms-pro-rat-price">
                          <span className="ms-pro-rating">
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star fill"></i>
                            <i className="fa-solid fa-star sill"></i>
                            <span className="qty">1 کیلوگرم</span>
                          </span>
                          <span className="ms-price">
                            <span className="new-price">10.00 تومان</span>
                            <span className="old-price">11.00 تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- 4th Product tab end --> */}
            </div>
          </div>
        </div>

        {/* <!-- Banner --> */}
        <div className="row">
          <div className="col-md-12">
            <div className="ms-animated-banner m-t-80">
              <div className="ms-bnr-img">
                <h2 className="d-none">پیشنهادها</h2>
              </div>
              <div className="ms-bnr-detail">
                <span className="fruits fruit-1"></span>
                <span className="fruits fruit-2"></span>
                <span className="fruits fruit-3"></span>
                <div className="ms-bnr-info">
                  <h2>
                    میوه های سالم و <br />
                    سبزیجات ارگانیک
                  </h2>
                  <h3>30% تخفیف فروش <span>عجله کنید!!!</span></h3>
                  <a href="shop-left-sidebar-col-3.html" className="ms-btn-2"
                    >اکنون خرید کنید</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- New Arrivals, Trending Product, Top Selling, Top Rated --> */}
        <div className="row m-t-80 ms-all-product-content">
          {/* <!-- New Arrivals --> */}
          <div
            className="col-xl-3 col-md-6 col-sm-12 col-xs-6 ms-new-product-content"
          >
            <div className="col-md-12">
              <div className="section-title">
                <h2 className="ms-title">ورود <span>جدید</span></h2>
              </div>
            </div>
            <div className="ms-new-product-block">
              <div className="col-sm-12 ms-all-product-block">
                <div className="ms-all-product-inner">
                  <div className="ms-pro-image-outer">
                    <div className="ms-pro-image">
                      <a href="product-left-sidebar.html" className="image">
                        <img
                          className="main-image"
                          src="assets/img/product-images/10_1.jpg"
                          alt="محصول"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="ms-pro-content">
                    <h5 className="ms-pro-title">
                      <a href="product-left-sidebar.html"
                        >بادام کالیفرنیا بسته ارزش</a
                      >
                    </h5>
                    <h6 className="ms-pro-stitle">
                      <a href="shop-left-sidebar-col-3.html">میوه‌های خشک</a>
                    </h6>
                    <div className="ms-pro-rat-price">
                      <div className="ms-pro-rat-pri-inner">
                        <span className="ms-price">
                          <span className="new-price">50.00 تومان</span>
                          <span className="old-price">55.00 تومان</span>
                          <span className="qty">- 2 بسته</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="label Veg" title="Veg">
                    <span className="dot"></span>
                  </span>
                </div>
              </div>
              <div className="col-sm-12 ms-all-product-block">
                <div className="ms-all-product-inner">
                  <div className="ms-pro-image-outer">
                    <div className="ms-pro-image">
                      <a href="product-left-sidebar.html" className="image">
                        <img
                          className="main-image"
                          src="assets/img/product-images/18_1.jpg"
                          alt="محصول"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="ms-pro-content">
                    <h5 className="ms-pro-title">
                      <a href="product-left-sidebar.html">لیمو - بدون دانه</a>
                    </h5>
                    <h6 className="ms-pro-stitle">
                      <a href="shop-left-sidebar-col-3.html">سبزیجات</a>
                    </h6>
                    <div className="ms-pro-rat-price">
                      <div className="ms-pro-rat-pri-inner">
                        <span className="ms-price">
                          <span className="new-price">62.00 تومان</span>
                          <span className="old-price">65.00 تومان</span>
                          <span className="qty">- 1 کیلوگرم</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="label veg" title="Veg">
                    <span className="dot"></span>
                  </span>
                </div>
              </div>
              <div className="col-sm-12 ms-all-product-block">
                <div className="ms-all-product-inner">
                  <div className="ms-pro-image-outer">
                    <div className="ms-pro-image">
                      <a href="product-left-sidebar.html" className="image">
                        <img
                          className="main-image"
                          src="assets/img/product-images/38_1.jpg"
                          alt="Product"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="ms-pro-content">
                    <h5 className="ms-pro-title">
                      <a href="product-left-sidebar.html">کیک و شیرینی</a>
                    </h5>
                    <h6 className="ms-pro-stitle">
                      <a href="shop-left-sidebar-col-3.html">نانوایی</a>
                    </h6>
                    <div className="ms-pro-rat-price">
                      <div className="ms-pro-rat-pri-inner">
                        <span className="ms-price">
                          <span className="new-price">52.00 تومان</span>
                          <span className="old-price">55.00 تومان</span>
                          <span className="qty">- 1 عدد</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="label veg" title="Veg">
                    <span className="dot"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Top Selling --> */}
          <div
            className="col-xl-3 col-md-6 col-sm-12 col-xs-6 ms-new-product-content mt-767-40"
          >
            <div className="col-md-12">
              <div className="section-title">
                <h2 className="ms-title">برترین <span>فروش</span></h2>
              </div>
            </div>
            <div className="ms-new-product-block">
              <div className="col-sm-12 ms-all-product-block">
                <div className="ms-all-product-inner">
                  <div className="ms-pro-image-outer">
                    <div className="ms-pro-image">
                      <a href="product-left-sidebar.html" className="image">
                        <img
                          className="main-image"
                          src="assets/img/product-images/13_1.jpg"
                          alt="محصول"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="ms-pro-content">
                    <h5 className="ms-pro-title">
                      <a href="product-left-sidebar.html">پیاز - ترکیبی</a>
                    </h5>
                    <h6 className="ms-pro-stitle">
                      <a href="shop-left-sidebar-col-3.html">سبزیجات</a>
                    </h6>
                    <div className="ms-pro-rat-price">
                      <div className="ms-pro-rat-pri-inner">
                        <span className="ms-price">
                          <span className="new-price">42.00 تومان</span>
                          <span className="old-price">45.00 تومان</span>
                          <span className="qty">- 5 کیلوگرم</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="label veg" title="Veg">
                    <span className="dot"></span>
                  </span>
                </div>
              </div>
              <div className="col-sm-12 ms-all-product-block">
                <div className="ms-all-product-inner">
                  <div className="ms-pro-image-outer">
                    <div className="ms-pro-image">
                      <a href="product-left-sidebar.html" className="image">
                        <img
                          className="main-image"
                          src="assets/img/product-images/37_1.jpg"
                          alt="Product"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="ms-pro-content">
                    <h5 className="ms-pro-title">
                      <a href="product-left-sidebar.html">بستنی</a>
                    </h5>
                    <h6 className="ms-pro-stitle">
                      <a href="shop-left-sidebar-col-3.html">لبنیات</a>
                    </h6>
                    <div className="ms-pro-rat-price">
                      <div className="ms-pro-rat-pri-inner">
                        <span className="ms-price">
                          <span className="new-price">25.00 تومان</span>
                          <span className="old-price">30.00 تومان</span>
                          <span className="qty">- 250 گرم</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="label Veg" title="Veg">
                    <span className="dot"></span>
                  </span>
                </div>
              </div>
              <div className="col-sm-12 ms-all-product-block">
                <div className="ms-all-product-inner">
                  <div className="ms-pro-image-outer">
                    <div className="ms-pro-image">
                      <a href="product-left-sidebar.html" className="image">
                        <img
                          className="main-image"
                          src="assets/img/product-images/18_1.jpg"
                          alt="محصول"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="ms-pro-content">
                    <h5 className="ms-pro-title">
                      <a href="product-left-sidebar.html">لیمو - بدون دانه</a>
                    </h5>
                    <h6 className="ms-pro-stitle">
                      <a href="shop-left-sidebar-col-3.html">سبزیجات</a>
                    </h6>
                    <div className="ms-pro-rat-price">
                      <div className="ms-pro-rat-pri-inner">
                        <span className="ms-price">
                          <span className="new-price">62.00 تومان</span>
                          <span className="old-price">65.00 تومان</span>
                          <span className="qty">- 1 کیلوگرم</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="label veg" title="Veg">
                    <span className="dot"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Top Rated --> */}
          <div
            className="col-xl-3 col-md-6 col-sm-12 col-xs-6 ms-new-product-content mt-1199-40"
          >
            <div className="col-md-12">
              <div className="section-title">
                <h2 className="ms-title">برترین <span>رتبه بندی شده</span></h2>
              </div>
            </div>
            <div className="ms-new-product-block">
              <div className="col-sm-12 ms-all-product-block">
                <div className="ms-all-product-inner">
                  <div className="ms-pro-image-outer">
                    <div className="ms-pro-image">
                      <a href="product-left-sidebar.html" className="image">
                        <img
                          className="main-image"
                          src="assets/img/product-images/8_1.jpg"
                          alt="محصول"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="ms-pro-content">
                    <h5 className="ms-pro-title">
                      <a href="product-left-sidebar.html"
                        >بادام کالیفرنیا بسته ارزش</a
                      >
                    </h5>
                    <h6 className="ms-pro-stitle">
                      <a href="shop-left-sidebar-col-3.html">میوه‌های خشک</a>
                    </h6>
                    <div className="ms-pro-rat-price">
                      <div className="ms-pro-rat-pri-inner">
                        <span className="ms-price">
                          <span className="new-price">50.00 تومان</span>
                          <span className="old-price">55.00 تومان</span>
                          <span className="qty">- 2 بسته</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="label veg" title="Veg">
                    <span className="dot"></span>
                  </span>
                </div>
              </div>
              <div className="col-sm-12 ms-all-product-block">
                <div className="ms-all-product-inner">
                  <div className="ms-pro-image-outer">
                    <div className="ms-pro-image">
                      <a href="product-left-sidebar.html" className="image">
                        <img
                          className="main-image"
                          src="assets/img/product-images/23_1.jpg"
                          alt="Product"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="ms-pro-content">
                    <h5 className="ms-pro-title">
                      <a href="product-left-sidebar.html">توت آبی</a>
                    </h5>
                    <h6 className="ms-pro-stitle">
                      <a href="shop-left-sidebar-col-3.html">میوه ها</a>
                    </h6>
                    <div className="ms-pro-rat-price">
                      <div className="ms-pro-rat-pri-inner">
                        <span className="ms-price">
                          <span className="new-price">52.00 تومان</span>
                          <span className="old-price">55.00 تومان</span>
                          <span className="qty">- 1 عدد</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="label veg" title="Veg">
                    <span className="dot"></span>
                  </span>
                </div>
              </div>
              <div className="col-sm-12 ms-all-product-block">
                <div className="ms-all-product-inner">
                  <div className="ms-pro-image-outer">
                    <div className="ms-pro-image">
                      <a href="product-left-sidebar.html" className="image">
                        <img
                          className="main-image"
                          src="assets/img/product-images/33_1.jpg"
                          alt="Product"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="ms-pro-content">
                    <h5 className="ms-pro-title">
                      <a href="product-left-sidebar.html">خرچنگ</a>
                    </h5>
                    <h6 className="ms-pro-stitle">
                      <a href="shop-left-sidebar-col-3.html">غذاهای دریایی</a>
                    </h6>
                    <div className="ms-pro-rat-price">
                      <div className="ms-pro-rat-pri-inner">
                        <span className="ms-price">
                          <span className="new-price">10.00 تومان</span>
                          <span className="old-price">11.00 تومان</span>
                          <span className="qty">- 500 گرم</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="label nonveg" title="Veg">
                    <span className="dot"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Trending items --> */}
          <div
            className="col-xl-3 col-md-6 col-sm-12 col-xs-6 ms-new-product-content mt-1199-40"
          >
            <div className="col-md-12">
              <div className="section-title">
                <h2 className="ms-title">اقلام <span>پرطرفدار</span></h2>
              </div>
            </div>
            <div className="ms-new-product-block">
              <div className="col-sm-12 ms-all-product-block">
                <div className="ms-all-product-inner">
                  <div className="ms-pro-image-outer">
                    <div className="ms-pro-image">
                      <a href="product-left-sidebar.html" className="image">
                        <img
                          className="main-image"
                          src="assets/img/product-images/18_1.jpg"
                          alt="محصول"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="ms-pro-content">
                    <h5 className="ms-pro-title">
                      <a href="product-left-sidebar.html">لیمو - بدون دانه</a>
                    </h5>
                    <h6 className="ms-pro-stitle">
                      <a href="shop-left-sidebar-col-3.html">سبزیجات</a>
                    </h6>
                    <div className="ms-pro-rat-price">
                      <div className="ms-pro-rat-pri-inner">
                        <span className="ms-price">
                          <span className="new-price">62.00 تومان</span>
                          <span className="old-price">65.00 تومان</span>
                          <span className="qty">- 1 کیلوگرم</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="label veg" title="Veg">
                    <span className="dot"></span>
                  </span>
                </div>
              </div>
              <div className="col-sm-12 ms-all-product-block">
                <div className="ms-all-product-inner">
                  <div className="ms-pro-image-outer">
                    <div className="ms-pro-image">
                      <a href="product-left-sidebar.html" className="image">
                        <img
                          className="main-image"
                          src="assets/img/product-images/37_1.jpg"
                          alt="Product"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="ms-pro-content">
                    <h5 className="ms-pro-title">
                      <a href="product-left-sidebar.html">بستنی</a>
                    </h5>
                    <h6 className="ms-pro-stitle">
                      <a href="shop-left-sidebar-col-3.html">لبنیات</a>
                    </h6>
                    <div className="ms-pro-rat-price">
                      <div className="ms-pro-rat-pri-inner">
                        <span className="ms-price">
                          <span className="new-price">25.00 تومان</span>
                          <span className="old-price">30.00 تومان</span>
                          <span className="qty">- 250 گرم</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="label veg" title="Veg">
                    <span className="dot"></span>
                  </span>
                </div>
              </div>
              <div className="col-sm-12 ms-all-product-block">
                <div className="ms-all-product-inner">
                  <div className="ms-pro-image-outer">
                    <div className="ms-pro-image">
                      <a href="product-left-sidebar.html" className="image">
                        <img
                          className="main-image"
                          src="assets/img/product-images/8_1.jpg"
                          alt="Product"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="ms-pro-content">
                    <h5 className="ms-pro-title">
                      <a href="product-left-sidebar.html"
                        >بادام کالیفرنیا بسته ارزش</a
                      >
                    </h5>
                    <h6 className="ms-pro-stitle">
                      <a href="shop-left-sidebar-col-3.html">میوه‌های خشک</a>
                    </h6>
                    <div className="ms-pro-rat-price">
                      <div className="ms-pro-rat-pri-inner">
                        <span className="ms-price">
                          <span className="new-price">50.00 تومان</span>
                          <span className="old-price">55.00 تومان</span>
                          <span className="qty">- 2 بسته</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="label veg" title="Veg">
                    <span className="dot"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default NewProduct;