// Header.jsx
import React from 'react';
import {Link} from 'react-router-dom'
import Blog from '../../pages/Blog';

const Header = () => {
  return (
    <header>
      {/* <!-- Main Menu Start --> */}
      <nav id="ms-main-menu-desk" className="d-lg-block sticky-nav">
        <div className="container-fluid position-relative">
          <div className="row">
            <div className="col-md-12 align-self-center">
              <div className="ms-main-menu">
                <div className="ms-menu-left">
                  <a href="javascript:void(0)" className="ms-site-menu-icon"
                    ><img
                      src="assets/img/icons/menu.svg"
                      className="svg_img"
                      alt="Site menu"
                  /></a>
                  <a href="/" className="ms-site-logo"
                    ><img src="assets/img/logo/linakids-persian-3.png" alt="Site Logo" className='logoLynaKids'
                  /></a>
                </div>
                <ul className="ms-menu">
                  <li className="dropdown drop-list position-static">
                    <a href="javascript:void(0)" className="dropdown-arrow"
                      >دسته بندی محصولات
                      <i className="fas fa-chevron-right" aria-hidden="true"></i>
                    </a>
                    <ul className="mega-menu d-block">
                      <li className="d-flex">
                        <span className="bg"></span>
                        <ul className="d-block">
                          <li className="menu_title">
                            <a href="javascript:void(0)">لباس دخترانه</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar-col-3.html"
                              >نوار کناری چپ 3 ستون</a
                            >
                          </li>
                          <li>
                            <a href="shop-left-sidebar-col-4.html"
                              >نوار کناری سمت چپ 4 ستون</a
                            >
                          </li>
                          <li>
                            <a href="shop-right-sidebar-col-3.html"
                              >نوار کناری سمت راست 3 ستون</a
                            >
                          </li>
                          <li>
                            <a href="shop-right-sidebar-col-4.html"
                              >نوار کناری سمت راست 4 ستون</a
                            >
                          </li>
                          <li>
                            <a href="shop-full-width.html">ستون ۴ عرض کامل</a>
                          </li>
                        </ul>
                        <ul className="d-block">
                          <li className="menu_title">
                            <a href="javascript:void(0)">لباس پسرانه</a>
                          </li>
                          <li>
                            <a href="shop-banner-left-sidebar-col-3.html"
                              >سمت چپ نوار کناری 3 ستون</a
                            >
                          </li>
                          <li>
                            <a href="shop-banner-left-sidebar-col-4.html"
                              >سمت چپ نوار کناری 4 ستون</a
                            >
                          </li>
                          <li>
                            <a href="shop-banner-right-sidebar-col-3.html"
                              >راست نوار کناری 3 ستون</a
                            >
                          </li>
                          <li>
                            <a href="shop-banner-right-sidebar-col-4.html"
                              >راست نوار کناری 4 ستون</a
                            >
                          </li>
                          <li>
                            <a href="shop-banner-full-width.html"
                              >عرض کامل 4 ستون</a
                            >
                          </li>
                        </ul>
                        <ul className="d-block">
                          <li className="menu_title">
                            <a href="javascript:void(0)">اکسسوری</a>
                          </li>
                          <li>
                            <a href="shop-full-width-col-3.html"
                              >3 ستون پر است عرض</a
                            >
                          </li>
                          <li>
                            <a href="shop-full-width-col-4.html"
                              >4 ستون پر است عرض</a
                            >
                          </li>
                          <li>
                            <a href="shop-full-width-col-5.html"
                              >5 ستون پر است عرض</a
                            >
                          </li>
                          <li>
                            <a href="shop-full-width-col-6.html"
                              >6 ستون پر است عرض</a
                            >
                          </li>
                          <li>
                            <a href="shop-banner-full-width-col-3.html"
                              >بنر 3 ستون ها</a
                            >
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  
                  <li className="dropdown drop-list">
                    <a href="javascript:void(0)" className="dropdown-arrow"
                      >دسترسی سریع
                      <i className="fas fa-chevron-right" aria-hidden="true"></i>
                    </a>
                    <ul className="sub-menu">
                      <li><a href="about-us.html">درباره ما</a></li>
                      <li><a href="contact-us.html">با ما تماس بگیرید</a></li>
                      <li><a href="cart.html">سبد خرید</a></li>
                      <li><a href="checkout.html">تسویه حساب</a></li>
                      <li><a href="compare.html">مقایسه</a></li>
                      <li><a href="faq.html">سؤالات متداول</a></li>
                      <li><a href="login.html">ورود به سیستم</a></li>
                      <li><a href="register.html">ثبت نام</a></li>
                      <li><a href="track-order.html">ردیابی سفارش</a></li>
                      <li><a href="terms-condition.html">شرایط شرایط</a></li>
                      <li><a href="privacy-policy.html">خط‌مشی رازداری</a></li>
                    </ul>
                  </li>
                  <li className="dropdown drop-list">
                    <Link to="/blog">بلاگ</Link>
                  </li>
                  {/* <li className="non-drop">
                    <a href="discover.html"
                      ><img
                        src="assets/img/icons/discover.svg"
                        className="svg_img"
                        alt="discover"
                      />همکاری با ما</a
                    >
                  </li> */}
                </ul>

                <div className="ms-menu-right-icons">
                  <div className="ms-header-search">
                    <a
                      href="javascript:void(0)"
                      className="ms-header-btn ms-search-toggle"
                    >
                      <img
                        src="assets/img/icons/search.svg"
                        className="svg_img header_svg"
                        alt="icon"
                      />
                    </a>
                  </div>
                  <div className="ms-header-user">
                    <ul>
                      <li className="ms-dropdown">
                        <a
                          className="dropdown-toggle ms-user-toggle"
                          id="ms_user_toggle"
                        >
                          <img
                            src="assets/img/icons/user.svg"
                            className="svg_img header_svg"
                            alt="icon"
                          />
                        </a>
                        <ul className="ms-dropdown-menu">
                          <p className='bg-red-500 text-red-50 rounded-3 m-2 p-2 text-end text-xs'>
                              غیرفعال است
                          </p>
                          <li>
                            <a className="dropdown-item" href="register.html"
                              >ثبت نام</a
                            >
                          </li>
                          <li>
                            <a className="dropdown-item" href="checkout.html"
                              >تسویه حساب</a
                            >
                          </li>
                          <li>
                            <a className="dropdown-item" href="login.html"
                              >ورود به سیستم</a
                            >
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="ms-header-wish">
                    <a
                      href="javascript:void(0)"
                      className="ms-header-btn ms-wish-toggle"
                    >
                      <img
                        src="assets/img/icons/wishlist.svg"
                        className="svg_img header_svg"
                        alt="icon"
                      />
                    </a>
                    <span className="lk-header-counts-whichlist bg-red-300">4</span>
                  </div>

                  <div className="ms-header-cart">
                    <a
                      href="javascript:void(0)"
                      className="ms-header-btn ms-cart-toggle"
                    >
                      <img
                        src="assets/img/icons/cart_5.svg"
                        className="svg_img header_svg"
                        alt="icon"
                      />
                    </a>
                    <span className="lk-header-counts-cart cart-count-lable">3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- Main Menu End --> */}
      {/* <!-- Mobile Menu sidebar Start --> */}
      <div className="ms-mobile-menu-overlay"></div>
      <div id="ms-mobile-menu" className="ms-mobile-menu">
        <div className="ms-menu-title">
          <span className="menu_title">لیناکیدز</span>
          <button className="ms-close-menu">×</button>
        </div>
        <div className="ms-menu-inner">
          <div className="ms-menu-content">
            <ul>
              <li><a href="index.html">صفحه اصلی</a></li>

              <li>
                <a href="javascript:void(0)">دسته بندی محصولات</a>
                <ul className="sub-menu">
                  <li>
                    <a href="javascript:void(0)">تنوع کلاسیک</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="shop-left-sidebar-col-3.html"
                          >ستون 3 نوار کناری سمت چپ</a
                        >
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-4.html"
                          >ستون 4 نوار کناری چپ</a
                        >
                      </li>
                      <li>
                        <a href="shop-right-sidebar-col-3.html"
                          >ستون 3 نوار کناری سمت راست</a
                        >
                      </li>
                      <li>
                        <a href="shop-right-sidebar-col-4.html"
                          >ستون 4 نوار کناری سمت راست</a
                        >
                      </li>
                      <li>
                        <a href="shop-full-width.html">4 ستون تمام عرض</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0)">تنوع کلاسیک</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="shop-banner-left-sidebar-col-3.html"
                          >نوار کناری سمت چپ بنر 3 ستون</a
                        >
                      </li>
                      <li>
                        <a href="shop-banner-left-sidebar-col-4.html"
                          >نوار کناری سمت چپ بنر 4 ستون</a
                        >
                      </li>
                      <li>
                        <a href="shop-banner-right-sidebar-col-3.html"
                          >نوار کناری سمت راست بنر 3 ستون</a
                        >
                      </li>
                      <li>
                        <a href="shop-banner-right-sidebar-col-4.html"
                          >نوار کناری سمت راست بنر 4 ستون</a
                        >
                      </li>
                      <li>
                        <a href="shop-banner-full-width.html"
                          >4 ستون تمام عرض بنر</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0)">تغییر ستون‌ها</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="shop-full-width-col-3.html">3 ستون تمام عرض</a>
                      </li>
                      <li>
                        <a href="shop-full-width-col-4.html">4 ستون تمام عرض</a>
                      </li>
                      <li>
                        <a href="shop-full-width-col-5.html">5 ستون تمام عرض</a>
                      </li>
                      <li>
                        <a href="shop-full-width-col-6.html">6 ستون تمام عرض</a>
                      </li>
                      <li>
                        <a href="shop-banner-full-width-col-3.html"
                          >ستونهای بنر 3</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0)">تغییر فهرست</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="shop-list-left-sidebar.html"
                          >خرید نوار کناری سمت چپ</a
                        >
                      </li>
                      <li>
                        <a href="shop-list-right-sidebar.html"
                          >خرید نوار کناری سمت راست</a
                        >
                      </li>
                      <li>
                        <a href="shop-list-banner-left-sidebar.html"
                          >نوار سمت چپ بنر</a
                        >
                      </li>
                      <li>
                        <a href="shop-list-banner-right-sidebar.html"
                          >نوار سمت راست بنر</a
                        >
                      </li>
                      <li>
                        <a href="shop-list-full-col-2.html">دو ستون تمام عرض</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="javascript:void(0)">بلاگ</a>
                <ul className="sub-menu">
                  <li>
                    <a href="blog-left-sidebar.html">نوار کناری سمت چپ وبلاگ</a>
                  </li>
                  <li>
                    <a href="blog-right-sidebar.html"
                      >نوار کناری سمت راست وبلاگ</a
                    >
                  </li>
                  <li>
                    <a href="blog-detail-left-sidebar.html"
                      >نوار سمت چپ جزئیات وبلاگ</a
                    >
                  </li>
                  <li>
                    <a href="blog-detail-right-sidebar.html"
                      >نوار کناری جزئیات وبلاگ</a
                    >
                  </li>
                  <li><a href="blog-full-width.html">عرض کامل وبلاگ</a></li>
                  <li>
                    <a href="blog-detail-full-width.html"
                      >جزئیات وبلاگ با عرض کامل</a
                    >
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)">لینک های سریع</a>
                <ul className="sub-menu">
                  <li><a href="about-us.html">درباره ما</a></li>
                  <li><a href="contact-us.html">با ما تماس بگیرید</a></li>
                  <li><a href="cart.html">سبد خرید</a></li>
                  <li><a href="checkout.html">تسویه حساب</a></li>
                  <li><a href="compare.html">مقایسه</a></li>
                  <li><a href="faq.html">سؤالات متداول</a></li>
                  <li><a href="login.html">ورود به سیستم</a></li>
                  <li><a href="register.html">ثبت نام</a></li>
                  <li><a href="track-order.html">ردیابی سفارش</a></li>
                  <li><a href="terms-condition.html">شرایط شرایط</a></li>
                  <li><a href="privacy-policy.html">خط‌مشی رازداری</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="header-res-lan-curr">
            {/* <!-- Social Start --> */}
            <div className="header-res-social">
              <div className="header-top-social">
                <ul className="mb-0">
                  <li>
                    <a href="#"
                      ><i className="fa fa-facebook" aria-hidden="true"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#"
                      ><i className="fa fa-twitter" aria-hidden="true"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#"
                      ><i className="fa fa-instagram" aria-hidden="true"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#"
                      ><i className="fa fa-linkedin" aria-hidden="true"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Social End --> */}
          </div>
        </div>
      </div>
      {/* <!-- Mobile Menu sidebar End --> */}
    </header>
  );
};

export default Header;