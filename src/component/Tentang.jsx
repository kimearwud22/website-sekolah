import React from "react";
import "aos";

const Kami = () => {
  return (
    <div>
      <div
        className="position-relative"
        style={{
          marginTop: "10px",
          textAlign: "center",
          padding: "70px",
          backgroundColor: "green",
        }}
      >
        <div className="my-5 text-black">
          <h1 className="display-5 fw-normal">Tentang Kami</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            SMP Islam Ainul Huda didirikan oleh Yayasan POndok Pesantren Islam
            Salafiyah Ainul Huda Yang Pendiri Pondok Pesantren Islam Salafiyah
            Ainul Huda ini adalah KH.Anas Maskuri bin H.Abdul Aziz
          </p>
        </div>
        <div className="container" style={{ marginButtom: "200px" }}>
          <h3 className="text-center">Keluarga Pendiri</h3>
          <div className="row mt-30">
            <div className="col-md-4 col-sm-6">
              <div className="box4">
                <img
                  src="img/DSC_5188.JPG"
                  alt=""
                  sizes="pic-1 rounded-circle"
                  srcset=""
                />
                <div className="box-content">
                  <h3 className="title">Keluarga Besar</h3>
                  <span className="post">Keluarga Pendiri</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="box4">
                <img
                  src="img/abah.jpeg"
                  alt=""
                  sizes="pic-1 rounded-circle"
                  srcset=""
                />
                <div className="box-content ">
                  <h3 className="title-black">KH.Anas Maskuri</h3>
                  <span className="post">Pengasuh PPIS Ainul Huda</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="box4">
                <img
                  src="img/DSC_5195.JPG"
                  alt=""
                  sizes="pic-1 rounded-circle"
                  srcset=""
                />
                <div className="box-content">
                  <h3 className="title">Keluarga </h3>
                  <span className="post">Keluarga Pengasuh</span>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>

      <div className="container">
        <div className="container mt-3">
          <div className="text-center mb-4">
            <h1>About Us</h1>
          </div>
          <div className="container" data-aos="fade-up" data-aos-delay="200">
            <div className="row justify-content-center">
              <div className="col">
                <h4 className="text-center">What Is SMPI?</h4>
                <p className="txt">
                  SMP Islam Ainul Huda merupakan sekolah yang dirintis oleh
                  Yayasan Pondok Pesantren Islamiyah Salafiyah Ainul Huda Yang
                  berdiri pada tahun 2019,Sekolah yang mempersiapkan generasi
                  hafidz/hafidzah yang mampu menghayati dan mengamalkan isi
                  kandungan Al-Quran, bertaqwa, berintegritas, berakhlaqul
                  karimah dan memiliki intelektualitas tinggi.
                </p>
                <button className="btn btn-hero btn-sm" disabled="disabled">
                  Info Selengkapnya
                </button>
              </div>
              <div className="col">
                <h4 className="text-center">Visi And Misi?</h4>
                <h5 className="text-left">Visi</h5>
                <p className="txt">Mencetak Generasi yang Alim dan Amil</p>
                <h5 className="text-left">Misi</h5>
                <p className="txt">Mencetak Generasi yang Alim dan Amil</p>
                <button className="btn btn-hero btn-sm" disabled="disabled">
                  Info Selengkapnya
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="faq-section">
        <div className="container">
          <div className="section-title max-820 lr-auto">
            <h1 className="ngc-maintitle">
              WE ARE HERE TO HELP
              <span className="ngc-hat">
                <br />
                <span>Fasilitias &amp; Layanan</span>
              </span>
            </h1>
            <p>
              Memberikan pelayanan terdepan dengan dukungan tenaga pendidik yang
              berkualitas, memanfaatkan teknologi yang ada, serta sistem
              informasi digital yang terintegrasi. Kenali lebih dalam di sini.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-7 mt-1">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Gedung Bertingkat
                    </button>
                  </h2>
                  <div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div>
                          <img
                            src="img/IMG_20200428_170152.jpg"
                            className="img-thumbnail"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Aula Terbuka
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <div>
                        <img
                          src="img/IMG_20201218_100912.jpg"
                          className="img-thumbnail"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Alat Olah Raga
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <div>
                        <img
                          src="img/IMG_20201218_100912.jpg"
                          className="img-thumbnail"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-3">
              <div>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong>
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kami;
