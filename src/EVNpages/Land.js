import { Link } from "react-router-dom";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";


// home page === "/"
const Home = () => {
    return (
    <div>
        <NavBar/>
        {/* need to fit within a container */}
        <div id="carouselFadedSlides" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner evphotos">

            <div className="carousel-item active photofixNow">
                    <img src="/IMG/img/chargers.jpeg" className="evpictures d-block w-45" alt="PLACEHOLDER IMG"/>
                    <div className="carousel-caption">
                        <h6>Your EVNews, Now!</h6>
                    </div>
            </div>

            <div className="carousel-item">
                    <img src="/IMG/img/modelY.jpeg" className="evpictures d-block w-45" alt="PLACEHOLDER IMG"/>
                    <div className="carousel-caption">
                        <h6>Your EVNews, Now!</h6>
                    </div>
                </div>    

            <div className="carousel-item">
                <img src="/IMG/img/teslas.jpeg" className="evpictures d-block w-85" alt="PLACEHOLDER IMG"/>
                <div className="carousel-caption">
                    <h6>Your EVNews, Now!</h6>
                </div>
            </div>

        </div> 
    </div>
    {/* carousel end */}
    <div className="container-sm">
    <div className="row g-3">
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
                <img src="/IMG/img/modelY.jpeg" className="card-img-top"  alt="PLACEHOLDER IMG"/>
                <div className="card-body">
                    <h5 className="card-title">EV Benefits</h5>
                    <p className="card-text">What are the benefits to owning an EV?</p>
                    <Link to="/EVBenefits" className="btn btn-primary">Learn</Link>
                </div>
            </div>
        </div>
    
    <div className="col-12 col-md-6 col-lg-4">
        <div className="card">
            <img src="/IMG/img/chargers.jpeg" className="card-img-top"  alt="PLACEHOLDER IMG"/>
            <div className="card-body">
                <h5 className="card-title">Charging</h5>
                <p className="card-text">What should I know about charging my vehicle?</p>
                <Link to="/Charging" className="btn btn-primary">Learn</Link> 
            </div>
        </div>
    </div>
    
    <div className="col-12 col-md-6 col-lg-4">
        <div className="card">
            <img src="/IMG/img/teslas.jpeg" className="card-img-top"  alt="PLACEHOLDER IMG"/>
            <div className="card-body">
                <h5 className="card-title">Terms</h5>
                <p className="card-text">Terms and Vocabulary to help you get a deeper understanding of the EV World</p>
                <Link to="/Terms"className="btn btn-primary">Learn</Link>
            </div>
        </div>
    </div> 
</div>
    </div>
        {/* <Footer/> */}
    </div>
    );
};

export default Home;