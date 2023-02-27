import  { Link } from "react-router-dom";

const Cards = () => {
	return (
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
            <img src="src/IMG/img/chargers.jpeg" className="card-img-top"  alt="PLACEHOLDER IMG"/>
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
	);
};

export default Cards;