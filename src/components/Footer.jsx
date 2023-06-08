import React from 'react';

const Footer = () => {
  return (
      <div className="container my-5">
        <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#01579b' }}>
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Lovz.KG</h6>
                  <p>
                    Здесь вы можете найти всю информацию о реабилитационных центрах Кыргызстанa
                  </p>
                </div>
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Ссылки</h6>
                  <p>
                    <a className="text-white" href="http://localhost:3000/" >Главная</a>
                  </p>
                  <p>
                    <a className="text-white" href="http://localhost:3000/rehabilitation/Бишкек">Центры</a>
                  </p>
                  <p>
                    <a className="text-white" href="http://localhost:3000/contact">Оставить сообщение</a>
                  </p>

                </div>
                <hr className="w-100 clearfix d-md-none" />
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Контакты</h6>
                  <p><i className="fas fa-home mr-3"></i> Бишкек, Чынгыза Айтматова, Кыргызстан</p>
                  <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                  <p><i className="fas fa-phone mr-3"></i>+996709900987</p>
                  <p><i className="fas fa-print mr-3"></i>+996709900987</p>
                </div>

              </div>
            </section>
          </div>
          <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            &#169;2023 LOVZ.KG Любая передача данных в интернете запрещена.
          </div>
        </footer>
      </div>
  );
};

export default Footer;
