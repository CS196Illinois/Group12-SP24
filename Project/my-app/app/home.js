import backgroundImage from './3L2A7490.jpg';
import Image from 'next/image';

export default function Home() {

    return (
      <main>
        <div class='container d-flex align-item-center'>
          <Image
            src={backgroundImage}
            layout='fill'
            priority={false}
            alt="background"
          />
          <div class='row-auto'>
            <div class='col-auto'>
              <div class="card">
                <div class="card-header">
                  Featured
                </div>
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
  
      </main>
    );
  }