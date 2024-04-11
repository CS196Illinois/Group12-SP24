"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
// import airlineImage from './assets/airline.jpg';
// import busImage from './assets/bus.jpg';

export default function ResultPage() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2 className="mt-3">Start: City A &rarr; Destination: City B</h2>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <h4>Airline Information</h4>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="./assets/airline.jpg" className="card-img-top" alt="Airline" />
                        <div className="card-body">
                            <h5 className="card-title">Airline Name</h5>
                            <p className="card-text">Flight details, timings, and price.</p>
                            <a href="#" className="btn btn-primary">Select</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <h4>Bus Route Information</h4>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="./assets/bus.jpg" className="card-img-top" alt="Bus" />
                        <div className="card-body">
                            <h5 className="card-title">Bus Company Name</h5>
                            <p className="card-text">Route details, timings, and price.</p>
                            <a href="#" className="btn btn-primary">Select</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col text-right">
                    <button type="button" className="btn btn-primary btn-lg">Next</button>
                </div>
            </div>
        </div>
    );
}