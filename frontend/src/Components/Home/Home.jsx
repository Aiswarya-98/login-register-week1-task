import React, { useEffect, useState } from "react"
import "../Home/Home.css"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../Context/AuthContext"

function Home() {
  const navigate = useNavigate()

  const {logoutUser} = useAuth()
  const [data, setData] = useState({ email: "", picture: "" })

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"))
    console.log("storeduser", storedUser)

    if (storedUser) {
      setData({ email: storedUser.email, picture: storedUser.picture, name: storedUser.username })
    }
  }, [])

  // const {user} = useAuth()

  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    logoutUser()
    navigate("/")
  }

  return (
    <>
      {/* navbar */}
      <div className="home">
        <nav className="navbar navbar-expand-lg p-2">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <span style={{ color: "#70d131", fontSize: "45px", fontWeight: "bold" }}>D'Watch</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
              <ul class="navbar-nav  ">
                {/* 
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                   <h2 class="text-bolder"> {data.name}</h2>
                  </a>
                </li> */}
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
                  <a class="nav-link" href="#">
                    <Link to={"/contact"} style={{ textDecoration: "none", color: "black" }}>
                      Contact
                    </Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <img src="https://img.icons8.com/?size=40&id=42382&format=png&color=000000" alt="" />
                  </a>
                </li>

                {/* image */}

                <li>
                  <img src={data.picture} alt="" style={{ borderRadius: "60px" }} height={50} />
                </li>

                {/* <li>
                  <input type="file" onChange={e=>setData({...data,picture:e.target.files[0]})}/>
                  <img src="" alt="preview" style={{"borderRadius":"60px"}} height={50} />
                </li> */}

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <div class="dropdown">
                      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {data.name}
                      </button>
                      <ul class="dropdown-menu" width={40}>
                        <li>
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#" onClick={logout}>
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </a>
                </li>
                {/* 
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <button className="btn" onClick={logout}><i class="fa-solid fa-right-from-bracket"></i></button>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>

        {/* nav */}

        <div className="row">
          <div className="col-1"></div>

          <div className="col-md-5">
            <div className="conatiner-fluid mt-lg-5 ">
              <h1 style={{ fontWeight: "95px" }}>This is the time to turn yourself into a real man</h1>
              <h5 style={{ marginTop: "30px" }}>
                Lorem ipsum dolor sit amet <span style={{ color: "#70d131" }}>consectetur </span>adipisicing consequatur molestiae rerum do
              </h5>

              <h3 style={{ marginTop: "30px" }}>Featured Collectibles</h3>

              <div className="container-fluid d-flex justify-content-between mt-5 ">
                <div class="card" style={{ width: "10rem" }}>
                  <img src="https://th.bing.com/th?id=OIP.ldc-Ptx2ZMlvEeCNckdhfQHaJ4&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" class="card-img-top" alt="..." height={200} />
                  <div class="card-body">
                    <p class="card-text">Zoro Mindsweep </p>
                    <p>$169</p>
                    <button className="btn" style={{ backgroundColor: "#70d131" }}>
                      Buy Now
                    </button>
                  </div>
                </div>

                <div class="card" style={{ width: "10rem" }}>
                  <img src="https://th.bing.com/th?id=OIP.mg9RtrM_58XtEndDB_JpEAHaJY&w=222&h=281&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" class="card-img-top" alt="..." height={200} />
                  <div class="card-body">
                    <p class="card-text">Romeleu Auth</p>
                    <p>$167</p>
                    <button className="btn" style={{ backgroundColor: "#70d131" }}>
                      Buy Now
                    </button>
                  </div>
                </div>

                <div class="card" style={{ width: "10rem" }}>
                  <img src="https://th.bing.com/th?id=OIP.e921X_ztCcSYpB_j4tbhbQHaJ4&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" class="card-img-top" alt="..." height={200} />
                  <div class="card-body">
                    <p class="card-text">Sierra Large Dial</p>
                    <p>$166</p>
                    <button className="btn" style={{ backgroundColor: "#70d131" }}>
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn btn-lg mt-5 " style={{ backgroundColor: "#70d131" }}>
              Explore
            </button>
          </div>

          <div className="col-1"></div>
          <div className="col-md-4">
            <div class="container border-black mt-lg-5 p-3 my-3">
              <div className="conatiner-fluid  d-flex justify-content-evenly  ">
                <div>
                  <h1>Bremont Star</h1>
                  <p>$147</p>

                  <button className="btn" style={{ backgroundColor: "#70d131" }}>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* carousel */}
            <div id="carouselExampleAutoplaying" class="carousel slide p-5" data-bs-ride="carousel">
              <div class="carousel-inner me-4">
                <div class="carousel-item active">
                  <img src="https://th.bing.com/th?id=OIP.ldc-Ptx2ZMlvEeCNckdhfQHaJ4&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" class="d-block w-100" alt="..." height={350} />
                </div>
                <div class="carousel-item">
                  <img src="https://th.bing.com/th?id=OIP.mg9RtrM_58XtEndDB_JpEAHaJY&w=222&h=281&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" class="d-block w-100" alt="..." height={350} />
                </div>
                <div class="carousel-item">
                  <img src="https://th.bing.com/th?id=OIP.e921X_ztCcSYpB_j4tbhbQHaJ4&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" class="d-block w-100" alt="..." height={350} />
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            {/* caraousel */}
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  )
}

export default Home
