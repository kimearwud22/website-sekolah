import React from "react";
import { Link } from "react-router-dom";
import "aos";
const Content = () => {
  return (
    <div>
      <div>
        <section>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="position-absolute p-5">
                  <div className="my-5 text-white text-center">
                    <h1 className="display-5 fw-normal">
                      Pondok Pesantren Isalam Salafiyah Ainul Huda
                    </h1>
                    <p className="lead fw-normal">
                      Lembaga Pilihan Pencetak Generasi Yang Alim dan Amil
                    </p>
                    <button className="btn btn-primary" disabled="disabled">
                      Daftar
                    </button>
                  </div>
                </div>
                <img src="img/kitab.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <div className="position-absolute p-5">
                  <div className="my-5 text-white text-center">
                    <h1 className="display-5 fw-normal">
                      SMP Islam Ainul Huda
                    </h1>
                    <p className="lead fw-normal">
                      Lembaga Pilihan Pencetak Generasi Yang Alim dan Amil
                    </p>
                    <button className="btn btn-primary" disabled="disabled">
                      Daftar
                    </button>
                  </div>
                </div>
                <img
                  src="img/bangunan.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="img/tahfidz.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
        <div className="container mt-3">
          <div className="text-center mb-4">
            <h1>About Us</h1>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col">
                <h4 className="text-center">What Is YPPIS Ainul Huda?</h4>
                <p className="txt">
                  Yayasan POndok Pesantren Islam Salafiyah Ainul Huda yang
                  mempersiapkan generasi yang Alim dan Amil hafidz/hafidzah yang
                  mampu menghayati dan mengamalkan isi kandungan Al-Quran,
                  bertaqwa, berintegritas, berakhlaqul karimah dan memiliki
                  intelektualitas tinggi.
                </p>
                <div className="container mt-2">
                  <div className="row justify-content-left">
                    <div className="col text-center mt-3">
                      <button
                        className="btn btn-outline-primary filter-button"
                        data-filter="semua"
                        style={{ borderRadius: 10 }}
                      >
                        <Link to="/about">info selengkapnya</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <h4 className="text-center">Visi And Misi?</h4>
                <h5 className="text-left">Visi</h5>
                <p className="txt">Mencetak Generasi yang Alim dan Amil</p>
                <h5 className="text-left">Misi</h5>
                <p className="txt">Mencetak Generasi yang Alim dan Amil</p>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="container">
            <div className="page-header text-center">
              <h1>Dapat apa kita disini..?</h1>
            </div>
            <div className="row grid-divider mt-3">
              <div className="col-sm-6">
                <div className="col-padding">
                  <h3>
                    Profil Lulusan SMP Islam Ainul Huda dan PDF(Pendidikan
                    Diniah Formal) Ainul Huda ini..?
                  </h3>
                  <p>
                    Lembaga profesional dengan basis iman, ilmu pengetahuan dan
                    teknologi. Mengembangkan pendidikan dengan pelatihan ilmiah
                    dan amaliah dan Membudayakan prilaku cerdas, berkarakter
                    qurani
                  </p>
                  <div className="text-center">
                    <img src="img/logo1.png" alt="" srcset="" />
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
                    Memiliki kepribadian, kejujuran, kedisiplinan, tanggung
                    jawab sosial dan jiwa kepemimpinan.
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
                    Memiliki kemampuan berkomunikasi dalam bahasa arab dan
                    inggris dalam kehidupan sehari hari.
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
        <div className="gallery">
          <div className="conatiner text-center">
            <h1>Gallery Foto</h1>
          </div>
          <div className="container mt-2">
            <div className="row justify-content-center">
              <div className="col text-center mt-3">
                <button
                  className="btn btn-outline-primary filter-button"
                  data-filter="semua"
                  style={{ borderRadius: 10 }}
                >
                  <Link to="/gallery">Semua Kegiatan</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="container mt-4 mb-4">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-8 col-md-6 col-lg-4 mt-3 mb-3 filter formal extra">
                <div className="card">
                  <img
                    className="card-img"
                    src="img/IMG_20200428_170152.jpg"
                    alt="Vans"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Kitab</h4>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-8 col-md-6 col-lg-4 mt-3 mb-3 filter diniah lomba">
                <div className="card">
                  <img className="card-img" src="img/tahfidz.jpg" alt="Vans" />
                  <div className="card-body">
                    <h4 className="card-title">Lomba Tahfidz Al-Quran</h4>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-8 col-md-6 col-lg-4 mt-3 mb-3 filter diniah lain extra">
                <div className="card">
                  <img className="card-img" src="img/kitab.jpg" alt="Vans" />
                  <div className="card-body">
                    <h4 className="card-title">Belajar Kitab Kuning</h4>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-8 col-md-6 col-lg-4 mt-3 mb-3 filter formal extra">
                <div className="card">
                  <img className="card-img" src="img/film.jpg" alt="Vans" />
                  <div className="card-body">
                    <h4 className="card-title">Belajar Membuat Film Pendek</h4>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-8 col-md-6 col-lg-4 mt-3 mb-3 filter formal lain">
                <div className="card">
                  <img className="card-img" src="img/senam.JPG" alt="Vans" />
                  <div className="card-body">
                    <h4 className="card-title">Olahraga</h4>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-8 col-md-6 col-lg-4 mt-3 mb-3 filter formal extra">
                <div className="card">
                  <img className="card-img" src="img/1.JPG" alt="Vans" />
                  <div className="card-body">
                    <h4 className="card-title">Belajar Kamera</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
