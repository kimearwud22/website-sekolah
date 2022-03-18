import React from 'react'
import 'aos';

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
          <p data-aos="fade-up"data-aos-delay="200">
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
          <div className="container"data-aos="fade-up"data-aos-delay="200">
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
                <button className='btn btn-hero btn-sm' disabled="disabled">Info Selengkapnya</button>
              </div>
              <div className="col">
                <h4 className="text-center">Visi And Misi?</h4>
                <h5 className="text-left">Visi</h5>
                <p className="txt">Mencetak Generasi yang Alim dan Amil</p>
                <h5 className="text-left">Misi</h5>
                <p className="txt">Mencetak Generasi yang Alim dan Amil</p>
                <button className='btn btn-hero btn-sm' disabled="disabled">Info Selengkapnya</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kami
