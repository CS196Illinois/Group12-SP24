"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";

export default function Page() {


  return (
    <div class='container text-center'>
      <h1>About Us</h1>
      
      <h2>Mission Statement</h2>

      <p>At IlliniFly, our mission is to empower students at the University of Illinois Urbana-Champaign (UIUC) and beyond by providing a convenient and affordable platform for discovering, comparing, and booking travel options.

        We are a group of passionate students enrolled in an honors project at UIUC's CS124, Introduction to Computer Science class. Inspired by our shared love for exploration and technology, we embarked on this journey to create a travel website tailored specifically for students.

        Our goal is to simplify the process of planning trips by offering a user-friendly interface that showcases flights, buses, and other travel alternatives suited to student needs. We understand the challenges students face in balancing academics and extracurricular interests, which is why we are dedicated to delivering a seamless and reliable travel experience.

        Driven by innovation and a commitment to student-centric service, we aim to cultivate a community where travel becomes accessible, flexible, and enriching. Through our platform, we seek to foster connections, facilitate memorable experiences, and encourage students to make the most of their academic journeys.

        Join us as we pave the way for students to explore new destinations, create lasting memories, and expand their horizons beyond the classroom. </p>
      <div className="container">
        <div className='row'>
          <div className='col'>
            <div className="card d-flex align-items-center justify-content-center">
              <img src="./ohheadshot.jpeg" className="card-img-top" alt="headshot" style={{ maxWidth: '400px', maxHeight: '400px' }} />
              <div className="card-body">
                <h5 className="card-title">Obed Han</h5>
                <p className="card-text">Meet Alex, a curious soul with a zest for adventure and a love for technology. Originally from a small town in the Midwest, Alex's passion for exploration led him to pursue studies in computer science at a renowned university. As a student, he thrives on tackling complex problems and finding innovative solutions.

                  When he's not immersed in coding or debugging, Alex can be found outdoors, hiking through scenic trails or capturing breathtaking landscapes with his camera. An avid traveler, he enjoys discovering new cultures and sampling exotic cuisines wherever his journeys take him.

                  In his downtime, Alex unwinds by playing the guitar or diving into a good book, particularly sci-fi or fantasy novels that ignite his imagination. With a keen interest in emerging technologies, Alex dreams of making a positive impact through his work and contributing to advancements that shape the future.

                </p>
                <a href="#" class="btn btn-primary">Website</a>
              </div>
            </div>
          </div>

          <div className='col'>
            <div className="card d-flex align-items-center justify-content-center">
              <img src="./ginnyheadshot.jpg" class="card-img-top" alt="headshot" style={{ maxWidth: '400px', maxHeight: '400px' }} />
              <div className="card-body">
                <h5 className="card-title">Ginny</h5>
                <p className="card-text">Meet Alex, a curious soul with a zest for adventure and a love for technology. Originally from a small town in the Midwest, Alex's passion for exploration led him to pursue studies in computer science at a renowned university. As a student, he thrives on tackling complex problems and finding innovative solutions.

                  When he's not immersed in coding or debugging, Alex can be found outdoors, hiking through scenic trails or capturing breathtaking landscapes with his camera. An avid traveler, he enjoys discovering new cultures and sampling exotic cuisines wherever his journeys take him.

                  In his downtime, Alex unwinds by playing the guitar or diving into a good book, particularly sci-fi or fantasy novels that ignite his imagination. With a keen interest in emerging technologies, Alex dreams of making a positive impact through his work and contributing to advancements that shape the future.

                </p>
                <a href="#" class="btn btn-primary">Website</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}