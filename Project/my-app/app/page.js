"use client";
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from './3L2A7490.jpg';

export default function Home() {

  return (
    // 
    <main>
      <div class='container d-flex align-item-center'>
        <Image
          src={backgroundImage}
          layout='fill'
          priority={true}
          alt="background"
        />
      </div>

      <div class="container d-flex justify-content-center align-items-center vh-100">


        <div class="card">
          <div class="card-body">
            <h6 class="card-title">Our mission is to simplify travel by providing an intuitive app for purchasing tickets and navigating journeys. We aim to make travel accessible and stress-free for all, revolutionizing the way people explore the world. </h6>

          </div>
        </div>



        <div class="container d-flex col ">


          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingFrom" placeholder="from" />
            <label for="floatingFrom">From</label>
          </div>



          <div class="form-floating">
            <input type="email" class="form-control" id="floatingTo" placeholder="to" />
            <label for="floatingTo">To</label>
          </div>

        </div>



      </div>


    </main>
  );
}