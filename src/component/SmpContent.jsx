import React from "react";

const ContentSmp = () => {
  return (
    <div>
    <hr />
      <div className="container mt-5">
        <div className="text-center mt-4">
          <h1>About Us</h1>
        </div>
        <hr />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <h4 className="text-center">What Is SMPI?</h4>
              <p className="txt">
                SMP Islam Ainul Huda merupakan sekolah yang dirintis oleh
                Yayasan Pondok Pesantren Islamiyah Salafiyah Ainul Huda Yang
                berdiri pada tahun 2019,Sekolah yang mempersiapkan generasi
                hafidz/hafidzah yang mampu menghayati dan mengamalkan isi
                kandungan Al-Quran, bertaqwa, berintegritas, berakhlaqul karimah
                dan memiliki intelektualitas tinggi.
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
      <section>
        <div className="container">
          <div className="page-header text-center">
            <h1>Dapat apa kita sekolah disini..?</h1>
          </div>
          <div className="row grid-divider mt-3">
            <div className="col-sm-6">
              <div className="col-padding">
                <h3>Profil Lulusan SMP Islam Ainul Huda</h3>
                <p>
                  Lembaga profesional dengan basis iman, ilmu pengetahuan dan
                  teknologi. Mengembangkan pendidikan dengan pelatihan ilmiah
                  dan amaliah dan Membudayakan prilaku cerdas, berkarakter
                  qurani
                </p>
                <div className="text-center">
                  <img src="img/logo1.png" alt="" srcset="" />
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="col-padding">
                <h4>Beriman &amp; Bertaqwa</h4>
                <p className>
                  Menjadi makhluk yang senantiasa beriman dan bertaqwa kepada
                  Allah SWT.
                </p>
              </div>
              <div className="col-padding mt-5">
                <h4>Pribadian Mulia</h4>
                <p className>
                  Memiliki kepribadian, kejujuran, kedisiplinan, tanggung jawab
                  sosial dan jiwa kepemimpinan.
                </p>
              </div>
              <div className="col-padding mt-5">
                <h4>Berwawasan Luas</h4>
                <p className>
                  Lulusan memiliki bekal pengetahuan dan wawasan luas yang
                  berguna untuk terjun ke masyarakat.
                </p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="col-padding">
                <h4>Komunikasi Baik</h4>
                <p>
                  Memiliki kemampuan berkomunikasi dalam bahasa arab dan inggris
                  dalam kehidupan sehari hari.
                </p>
              </div>
              <div className="col-padding">
                <h4>Saraf lifeskill</h4>
                <p>
                  Memiliki kemampuan lifeskill yang ditunjukkan dengan
                  kemandirian dalam hidup
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentSmp;
