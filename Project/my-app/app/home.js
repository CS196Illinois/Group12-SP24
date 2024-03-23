import backgroundImage from './6198n.jpg';
import Image from 'next/image';

export default function Home() {

  return (
    <div>
      <div className='position-relative d-flex align-items-center vh-100'>
  <img src="./hnbay.jpg" className="img-fluid position-absolute top-0 start-0" alt="background" />

  <div className="container text-center position-relative z-index-1">
    <div className="row m-3">
      <div className="col text-dark">
        <h4 className="text-center display-6">Simplifying travel, one flight at a time.</h4>
      </div>
    </div>
    <div className="row m-3 justify-content-center">
      <div className="col-2">
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingFrom" placeholder="from" />
          <label htmlFor="floatingFrom">From</label>
        </div>
      </div>
      <div className="col-2">
        <div className="form-floating">
          <input type="text" className="form-control" id="floatingTo" placeholder="to" />
          <label htmlFor="floatingTo">To</label>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <div className='form-floating'>
          <button className="btn btn-lg btn-primary" type="submit">GO</button>
        </div>
      </div>
    </div>
  </div>
</div>




      <div className='container'>
        <div className='row align-items-center'>
          <div className='col'>
            <div class="card">
              <img src="./SF.jpeg" class="card-img-top" alt="SF" />
              <div class="card-body">
                <h5 class="card-title">San Fransisco</h5>
                <p class="card-text">
                  Discover San Francisco's iconic Golden Gate Bridge and vibrant neighborhoods, from historic Chinatown to the bohemian Mission District. Indulge in diverse culinary delights, explore world-class museums, and wander through bustling markets. With its blend of natural beauty and cultural diversity, San Francisco promises an unforgettable adventure in the City by the Bay.
                </p>
                <a href="#" class="btn btn-primary">Let's Go!</a>
              </div>
            </div>
          </div>
          <div className='col'>
            <div class="card">
              <img src="./tokyo.jpeg" class="card-img-top" alt="Tokyo" />
              <div class="card-body">
                <h5 class="card-title">Tokyo</h5>
                <p class="card-text">
                Discover Tokyo, a dynamic metropolis where tradition meets innovation. Wander through the bustling streets of Shibuya, home to the famous scramble crossing, and marvel at the futuristic skyline of Shinjuku. Indulge in the diverse flavors of Japanese cuisine, from sushi to ramen, and immerse yourself in the rich cultural tapestry of this captivating city.
                  </p>
                <a href="#" class="btn btn-primary">Let's Fly!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}