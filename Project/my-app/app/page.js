"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation.js';
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function yyyymmdd(date) {
  var x = date;
  var y = x.getFullYear().toString();
  var m = (x.getMonth() + 1).toString();
  var d = x.getDate().toString();
  (d.length == 1) && (d = '0' + d);
  (m.length == 1) && (m = '0' + m);
  var yyyymmdd = y + m + d;
  return yyyymmdd;
}

export default function Page() {
  const router = useRouter()
  const [startDate, setStartDate] = useState(new Date());

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

    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>

    <div className="row">
      <div className="col">
        <div className='form-floating'>
          <button className="btn btn-lg btn-primary" type="button" onClick={(e)=>{
            router.push(`/result?to=${document.getElementById("floatingTo").value}&from=${document.getElementById("floatingFrom").value}&date=${yyyymmdd(startDate)}`,undefined,{shallow:true})
            }}>GO</button>
        </div>
      </div>
    </div>
  </div>
</div>




      <div className='container'>
        <div className='row align-items-center'>
          <div className='col'>
            <div className="card">
              <img src="./SF.jpeg" className="card-img-top" alt="SF" />
              <div className="card-body">
                <h5 className="card-title">San Fransisco</h5>
                <p className="card-text">
                  Discover San Francisco's iconic Golden Gate Bridge and vibrant neighborhoods, from historic Chinatown to the bohemian Mission District. Indulge in diverse culinary delights, explore world-class museums, and wander through bustling markets. With its blend of natural beauty and cultural diversity, San Francisco promises an unforgettable adventure in the City by the Bay.
                </p>
                <a href="#" className="btn btn-primary">Let's Go!</a>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className="card">
              <img src="./tokyo.jpeg" className="card-img-top" alt="Tokyo" />
              <div className="card-body">
                <h5 className="card-title">Tokyo</h5>
                <p className="card-text">
                Discover Tokyo, a dynamic metropolis where tradition meets innovation. Wander through the bustling streets of Shibuya, home to the famous scramble crossing, and marvel at the futuristic skyline of Shinjuku. Indulge in the diverse flavors of Japanese cuisine, from sushi to ramen, and immerse yourself in the rich cultural tapestry of this captivating city.
                  </p>
                <a href="#" className="btn btn-primary">Let's Fly!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}