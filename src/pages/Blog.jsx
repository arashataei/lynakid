import React, { useState } from "react";

const Blog = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <section className="ms-blog padding-tb-30">
    <div className="container">
      <div className="row">
        <div className="ms-blogs-rightside col-md-12">
          {/* Blog content Start */}
          <div className="ms-blogs-content">
            <div className="ms-blogs-inner">
              <div className="row">
                {/* Blog Item 1 */}
                <div className="col-lg-4 col-md-6 col-sm-12 mb-6 ms-blog-block">
                  <div className="ms-blog-item">
                    <div className="news-info">
                      <figure className="news-img">
                        <a href="#">
                          <img src="assets/img/news/1.jpg" alt="news" />
                        </a>
                      </figure>
                      <div className="detail">
                        <label>
                          28 شهریور 1320<a href="#">ارگانیک</a>
                        </label>
                        <h3>
                          <a href="#">راهنمای بازاریابی: 5 گام برای موفقیت</a>
                        </h3>
                        <p className="text-length">
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                        </p>
                        <div className="more-info">
                          <a href="blog-detail-left-sidebar.html">
                            ادامه مطلب<span></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Blog Item 2 */}
                <div className="col-lg-4 col-md-6 col-sm-12 mb-6 ms-blog-block">
                  <div className="ms-blog-item">
                    <div className="news-info">
                      <figure className="news-img">
                        <a href="#">
                          <img src="assets/img/news/2.jpg" alt="news" />
                        </a>
                      </figure>
                      <div className="detail">
                        <label>
                          28 شهریور 1320<a href="#">ارگانیک</a>
                        </label>
                        <h3>
                          <a href="#">راهنمای بازاریابی: 5 گام برای موفقیت</a>
                        </h3>
                        <p className="text-length">
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                        </p>
                        <div className="more-info">
                          <a href="blog-detail-left-sidebar.html">
                            ادامه مطلب<span></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Repeat for other blog items... */}
              </div>
            </div>

            {/* Pagination Start */}
            <div className="ms-pro-pagination">
              <span>نمایش 1-12 از 21 مورد</span>
              <ul className="ms-pro-pagination-inner">
                <li>
                  <a className="next" href="#">
                    بعدی <i className="fas fa-chevron-left" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a className="active" href="#">
                    1
                  </a>
                </li>
              </ul>
            </div>
            {/* Pagination End */}
          </div>
          {/* Blog content End */}
        </div>
      </div>
    </div>
  </section>
  );
};

export default Blog;