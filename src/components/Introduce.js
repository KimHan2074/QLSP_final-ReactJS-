import React from 'react';
import Header from './layout_page/Header.js';
import Footer from './layout_page/Footer.js';

const Introduce = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div id="content">
          <div>
            <div className="space50">&nbsp;</div>
            <div className="space50">&nbsp;</div>
            <h2 className="text-center wow fadeInDown animated" style={{visibility: 'visible'}}>
              Món quà lớn nhất của chúng tôi là có được sự hài lòng của quý khách
            </h2>
            <div className="space20">&nbsp;</div>
            <p className="text-center wow fadeInLeft animated" style={{visibility: 'visible'}}>
              Đói thì phải ăn, khát thì phải uống. Các nhà khoa học gọi đó là Định Luật Bảo Toàn Tính Mạng
            </p>
            <div className="space35">&nbsp;</div>
            <div className="row">
              <div className="col-sm-2 col-sm-push-2">
                <div className="beta-counter">
                  <p className="beta-counter-icon"><i className="fa fa-user" /></p>
                  <p className="beta-counter-value timer numbers" data-to={19855} data-speed={2000}>19,855</p>
                  <p className="beta-counter-title">Clients Satisfied</p>
                </div>
              </div>
              <div className="col-sm-2 col-sm-push-2">
                <div className="beta-counter">
                  <p className="beta-counter-icon"><i className="fa fa-picture-o" /></p>
                  <p className="beta-counter-value timer numbers" data-to={3568} data-speed={2000}>3,568</p>
                  <p className="beta-counter-title">Amazing Works</p>
                </div>
              </div>
              <div className="col-sm-2 col-sm-push-2">
                <div className="beta-counter">
                  <p className="beta-counter-icon"><i className="fa fa-clock-o" /></p>
                  <p className="beta-counter-value timer numbers" data-to={258934} data-speed={2000}>258,934</p>
                  <p className="beta-counter-title">Support Hours</p>
                </div>
              </div>
              <div className="col-sm-2 col-sm-push-2">
                <div className="beta-counter">
                  <p className="beta-counter-icon"><i className="fa fa-pencil" /></p>
                  <p className="beta-counter-value timer numbers" data-to={150} data-speed={2000}>150</p>
                  <p className="beta-counter-title">New Projects</p>
                </div>
              </div>
            </div> {/* .beta-counter block end */}
            <div className="space50">&nbsp;</div>
            <hr />
            <div className="space50">&nbsp;</div>
            <h2 className="text-center wow fadeInDownwow fadeInDown animated" style={{visibility: 'visible'}}>
              Đội ngũ của chúng tôi
            </h2>
            <div className="space20">&nbsp;</div>
            <h5 className="text-center other-title wow fadeInLeft animated" style={{visibility: 'visible'}}>
              Founders
            </h5>
            <p className="text-center wow fadeInRight animated" style={{visibility: 'visible'}}>
              Nemo enims voluptatem quia volupas sit aspe aut odit aut fugit, sed quia <br />consequuntur magni dolores.
            </p>
            <div className="space20">&nbsp;</div>
            <div className="row">
              <div className="col-sm-6 wow fadeInLeft animated" style={{visibility: 'visible'}}>
                <div className="beta-person media">
                  <img
                    width="300"
                    height="300"
                    className="pull-left"
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  <div className="media-body beta-person-body">
                    <h5>Phan Văn Thông</h5>
                    <p className="font-large">Founder</p>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit asatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque por quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.
                    </p>
                    <a href="single_type_gallery.html">View projects <i className="fa fa-chevron-right" /></a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 wow fadeInRight animated" style={{visibility: 'visible'}}>
                <div className="beta-person media">
                  <img
                    width="300"
                    height="300"
                    className="pull-left"
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  <div className="media-body beta-person-body">
                    <h5>Hoàng Đạt</h5>
                    <p className="font-large">Founder</p>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit asatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque por quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.
                    </p>
                    <a href="single_type_gallery.html">View projects <i className="fa fa-chevron-right" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="space60">&nbsp;</div>
            <h5 className="text-center other-title wow fadeInDown animated" style={{visibility: 'visible'}}>
              Thành viên
            </h5>
            <p className="text-center wow fadeInUp animated" style={{visibility: 'visible'}}>
              Nemo enims voluptatem quia volupas sit aspe aut odit aut fugit, sed quia <br />consequuntur magni dolores.
            </p>
            <div className="space20">&nbsp;</div>
            <div className="row">
              <div className="col-sm-3">
                <div className="beta-person beta-person-full">
                  <div className="bets-img-hover">
                    <img
                      src="https://cdn.prod.website-files.com/5f37e24d2bb0e5491702cddb/671cae81710782b99c4b07e9_6606bf7362019b1b0938d2d9_431873466_797166909100317_6660827374428708745_n.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="beta-person-body">
                    <h5>Huỳnh Thị Diễm Hằng</h5>
                    <p className="font-large">Web developer</p>
                    <p>Nemo enims voluptatem quia volupas sit aspe aut odit aut fugit, sed quia consequuntur magni dolores.</p>
                    <a href="single_type_gallery.html">View projects <i className="fa fa-chevron-right" /></a>
                  </div>
                </div>
              </div>
              {/* Additional team members here... */}
            </div>
          </div>
        </div> {/* #content */}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Introduce;
