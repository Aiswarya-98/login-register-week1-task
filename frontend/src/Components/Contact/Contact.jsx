import React from "react"

function Contact() {
  return (
    <>
      {/* nav */}
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <span style={{ color: "black", fontSize: "45px", fontWeight: "bold" }}>D'Watch</span>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
            <ul class="navbar-nav  ">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Product
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <button class="btn btn-dark">button</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* nav */}

      <div className="row">
        <div className="col-md-1"></div>

        <div className="col-md-5 p-5">
          <div className="container-fluid">
            <h1 style={{ fontWeight: "bold" }}>Contact Us</h1>
            <p style={{ color: "grey", fontSize: "18px" }}>Subheading for descriptions or instructions</p>

            {/* form */}

            {/* ---- */}

            <div class="row g-6 align-items-center">
              <div class="col-6">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    First Name
                  </label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="first name" />
                </div>
              </div>

              <div class="col-6">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Last Name
                  </label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="last name" />
                </div>
              </div>
            </div>

            {/* ----- */}

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Enter your questions or messages
              </label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>

            {/* form */}

            <div class="d-grid gap-2">
              <button class="btn btn-dark" type="button">
                Button
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-5 p-5 ">
          <div className="container-fluid">
            <img src="https://s3-alpha-sig.figma.com/img/eef3/6a48/1a33eb6dc13aa6b624105a5a5e591e72?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=An~ZmpAP0fPswBfAybRM8Yk76ZMuNXGbJYim2nDRZxaQRmZGX4iyFT9wMc3wN21xLckt9eWts2~rAJdeAd~tBtmxzVoQJKPJcU9bb9vZXYhDB8A16m3vRWWjOE3mwIF~wZZVmw-bYZXJ7oWSLkwODz8~6Y3fQfFkAQ1TDgmbqghsGLWNAjuU0jkJBHOpw6BzqxfZUTPqfh6FSUbne~YjPcDDdha0jqynSUPJoqdqbJDrsLI1dPxflHDU-4msU-61EypePnHwIzUGEJ~p~tEYB0BPV1dT4ZX9Toj2-hW-MfIqVwhGgs3qcq32v9up~yJJPWpHVvTza~dhWRNiFB6KAA__" width={490} height={490} alt="img" />
          </div>
        </div>

        <div className="col-md-1"></div>
      </div>

      {/* footer */}

      <footer class=" text-dark text-center text-lg-start mt-5 ">
        {/* <!-- Grid container --> */}
        <div class="container p-4">
          {/* <!--Grid row--> */}
          <div class="row">
            {/* <!--Grid column--> */}
            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 class="text-uppercase">
                <a class="navbar-brand" href="#">
                  <span style={{ color: "black", fontSize: "45px", fontWeight: "bold" }}>D'Watch</span>
                </a>
              </h5>

              <p class="d-flex flex-row row-cols-6 mt-4  ">
                <i class="fa-brands fa-facebook" style={{ color: " #c2c2c2" }}></i>
                <i class="fa-brands fa-linkedin" style={{ color: " #c2c2c2" }}></i>
                <i class="fa-brands fa-youtube" style={{ color: " #c2c2c2" }}></i>
                <i class="fa-brands fa-square-instagram" style={{ color: " #c2c2c2" }}></i>
              </p>
            </div>
            {/* <!--Grid column-->

      <!--Grid column--> */}
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Links</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-dark">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-dark">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-dark">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-dark">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--Grid column-->

      <!--Grid column--> */}
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-0">Links</h5>

              <ul class="list-unstyled">
                <li>
                  <a href="#!" class="text-dark">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-dark">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-dark">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-dark">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}
          </div>
          {/* <!--Grid row--> */}
        </div>
        {/* <!-- Grid container -->

  <!-- Copyright --> */}
        <div class="text-center p-3" style={{ "background-color": "rgba(0, 0, 0, 0.2);" }}>
          © 2024 Copyright:
          <a class="text-dark" href="https://mdbootstrap.com/">
            dwatch.com
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>

      {/* footer */}
    </>
  )
}

export default Contact
