import backgroundImage from './3L2A7490.jpg';
import Image from 'next/image';

export default function Home() {

  return (
    <div>
      <div className='d-flex align-items-center vh-100'>
        <Image
          src={backgroundImage}
          layout='fill'
          priority={false}
          alt="background"
          style={{ zIndex: -5 }}
        />
        <div className="container text-center">
          <div className="row m-3">
            <div className="col text-light">
              <h4 className="text-center duru-sans-regular">Our mission is to simplify travel by providing an intuitive app for purchasing tickets and navigating journeys. We aim to make travel accessible and stress-free for all, revolutionizing the way people explore the world.</h4>
            </div>
          </div>
          <div className="row m-3 mb-0">
            <div className="col">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingFrom" placeholder="from" />
                <label htmlFor="floatingFrom">From</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating">
                <input type="text" className="form-control" id="floatingTo" placeholder="to" />
                <label htmlFor="floatingTo">To</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className='form-floating'>
                <button class="btn btn-primary" type="submit">GO</button>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col'>
            <div class="card">
              <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
          </div>
          <div className='col'>
          <div class="card">
              <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}