"use client"
import { useState, useEffect } from "react"
import React from "react"
import ResultPage from './resultpage';
import { useSearchParams } from "next/navigation";
import axios from 'axios';
import bg from "../hnbay.jpg"

const xmlFile = `<?xml version="1.0" encoding="UTF-8"?>
<OTA_AirDetailsRS PrimaryLangID="eng" Version="1.0" TransactionIdentifier="" xmlns="http://www.opentravel.org/OTA/2003/05">
  <Success/>
  <FLSWarning FLSWarningCode="-6" FLSWarningName="No flights found"/>
  <!--  Warning: No flights found  -->
</OTA_AirDetailsRS>`

class PlanObject {
    constructor(to, toName, from, fromName, airline, flightNum, aircraft, duration, dTime, aTime) {
        this.to = to
        this.toName = toName
        this.from = from
        this.fromName = fromName
        this.airline = airline
        this.flightNum = flightNum
        this.aircraft = aircraft
        this.duration = duration
        this.dTime = dTime
        this.aTime = aTime
    }
}
const FlightCard = ({ flight }) => (
    <div className="col-md-6">
        <div className="card" style={{margin:"2%"}}>
            <div className="card-body">
                <h5 className="card-title">Flight Number: {flight.flightNum}</h5>
                <p className="card-text">Airline: {flight.airline}</p>
                <p className="card-text">Aircraft: {flight.aircraft}</p>
                <p className="card-text">Duration: {flight.duration}</p>
                <p className="card-text">Departure Time: {flight.dTime}</p>
                <p className="card-text">Arrival Time: {flight.aTime}</p>
                <p className="card-text">Departure From: {flight.toName}</p>
                <p className="card-text">Arrival At: {flight.fromName}</p>
            </div>
        </div>
    </div>
);



var arrOfFlights = Array(25)

// arrOfFlights[0] = new PlanObject("SFO", "San Francisco", "ORD", "Chicago", "United", "007", "737", "PT4H46M", "2024-04-18T00:00:00", "2024-04-18T00:00:00");
// arrOfFlights[1] = new PlanObject("JFO", "San Francisco", "ORD", "Chicago", "United", "007", "737", "PT4H46M", "2024-04-18T00:00:00", "2024-04-18T00:00:00");
// arrOfFlights[2] = new PlanObject("JFO", "San Francisco", "ORD", "Chicago", "United", "007", "737", "PT4H46M", "2024-04-18T00:00:00", "2024-04-18T00:00:00");


export default function Page() {
    
    const [flights, setFlights] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const searchParams = useSearchParams();
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // generatePlan()

    generatePlan(searchParams.get("from"),searchParams.get("to"),searchParams.get("date"))
    console.log(arrOfFlights)
    useEffect(()=> {
        async function fetchFlightsWithDelay() {
            await sleep(2000);
        }
        
    })
    
    /*
    useEffect(() => {
        
        setFlights(arrOfFlights);
        async function fetchFlights() {
            const from = searchParams.get("from");
            const to = searchParams.get("to");
            const date = searchParams.get("date");

            try {
                const response = await axios.get(
                    `https://timetable-lookup.p.rapidapi.com/TimeTable/${from}/${to}/${date}/`,
                    {
                        headers: {
                            'X-RapidAPI-Key': 'your-key-here',
                            'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com',
                        },
                        params: { Results: '25', Connection: 'NONSTOP' },
                    }
                );

                const xmlData = response.data;
                const flightDetails = extractFlightDetails(xmlData);

                setFlights(flightDetails);
            } catch (error) {
                console.error("Error fetching flights:", error);
            }
        }

        fetchFlights();
        
    }, [searchParams]); // Dependencies ensure this effect only runs when these values change.
    */

    return (
        <div className='position-relative d-flex align-items-center justify-content-center' style={{backgroundImage:`url(${bg.src})`}}>
            {/* <img src="" className="img-fluid position-absolute top-0 start-0 w-100 h-100" style={{ objectFit: 'cover', zIndex: -10 }} alt="background" /> */}

            <div className="container" id="cardContainer">
                <div className="row mt-5 align-items-center justify-content-center">
                    {arrOfFlights.map((flight, index) => (
                        <FlightCard key={index} flight={flight} />
                    ))}
                </div>
            </div>
        </div>
    );
}





function processFlightDetails(err,result) {
    if (result['OTA_AirDetailsRS']["FLSWarning"]!=null) {
        return null
    }
    var flightRecords = result['OTA_AirDetailsRS']['FlightDetails']
    
    var indexes = Object.keys(flightRecords)
    var resultArr = Array(indexes.length)
    // console.log(flightRecords)
    for (let i = 0; i < indexes.length; i++) {
        // console.log(flightRecords[0]['$'])
        var to = flightRecords[i]['$']['FLSDepartureCode']
        var from_ = flightRecords[i]['$']['FLSArrivalCode']
        var toName = flightRecords[i]['$']['FLSDepartureName']
        var fromName = flightRecords[i]['$']['FLSArrivalName']
        var airline =  flightRecords[i]['FlightLegDetails'][0]['MarketingAirline'][0]['$']['CompanyShortName']
        var flightNum = flightRecords[i]['FlightLegDetails'][0]['$']['FlightNumber']
        var aircraft = convertAircraftType(flightRecords[i]['FlightLegDetails'][0]['Equipment'][0]['$']['AirEquipType'])
        var duration = flightRecords[i]['$']['TotalFlightTime']
        var dTime = flightRecords[i]['$']['FLSDepartureDateTime']
        var aTime = flightRecords[i]['$']['FLSArrivalDateTime']

        var temp = new PlanObject(to,from_, toName,fromName,airline,flightNum,aircraft,duration,dTime,aTime)
        resultArr[i] = temp
    }
    arrOfFlights = resultArr
}

function convertAircraftType(input) {
    if (input[0] == '7') {
        if (input[1] == '3') {
            if (input[2] == 'J') {
                return "Boeing 737-900ER" 
            } else {
                return "Boeing " + input[0]+input[1]+'7-'+input[2]+'00'
            }
            
        } else if (input[1] == 'M') {
            return "Boeing 737 MAX " + input[2]
        } else if (input[1] == '5') {
            return "Boeing " + input[0]+input[1]+'7-'+input[2]+'00'
        } else if (input[1] == '7') {
            return "Boeing 777" 
        } else if (input[1] == '8') {
            return "Boeing 787" + '-'+input[2] + ' Dreamliner'
         } else if (input[1] == '1') {
            return "Boeing " + input[0]+input[1]+'7-'+input[2]+'00'
        }
    } else if (input[0] == '3') {
        if (input[1] == '2') {
            if (input[2] == 'S') {
                return "Airbus A320 Series"
            } else {
                return "Airbus A320"
            }

        }
        return "Airbus A" + input
    } else if (input[0] == '1') {
        return "Embraer " + input
    } else {
        return input
    }
}

async function generatePlan(from,to ,date) {
    // to: string indicating the departure location
    // from: string indicating the arrival location
    // dateTime: dateTime object representing the departure time
    // TODO: implement this function to return a PlanObject representing the plan by requesting from the API
    var searchParams = useSearchParams()

    const options = {
        method: 'GET',
        url: `https://timetable-lookup.p.rapidapi.com/TimeTable/${from}/${to}/${date}/`,
        headers: {
            'X-RapidAPI-Key': 'bc145956d8msh6f48b3898399cb5p1ed48ajsn24f43d925de7',
            'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com'
        },
        params: {
            Results: '25',
            Connection: 'NONSTOP'
          },
    };

    const parseString = require("xml2js").parseString;
    try {
        const response = await axios.request(options);
        parseString(response.data,processFlightDetails);
        // console.log(response.data);
        // console.log(arrOfFlights);
    } catch (error) {
        console.error(error);
    }

    return 
}

function formatPlan(planObject) {
    // planObject: object generated from the generatePlan() function

    // TODO: implement this function to return the html layout with the plan object data integrated

    var formattedHTML = ''
    
    for(let i = 0; i < arrOfFlights.length;i += 2) {
        formattedHTML += `<div className="row mt-5 align-items-center justify-content-center">`;
        formattedHTML += `
                <div className="col-md-6">
                    <div className="card" style="width 18rem; "}}>
                        
                        <div className="card-body">
                            <h5 className="card-title">Flight Number: ${arrOfFlights[i].flightNum}</h5>
                            <p className="card-text">Airline Company: ${arrOfFlights[i].airline}</p>
                            <p className="card-text">Aircraft: ${arrOfFlights[i].aircraft}</p>
                            <p className="card-text">Duration: ${arrOfFlights[i].duration}</p>
                            <p className="card-text">Departure Time: ${arrOfFlights[i].dTime}</p>
                            <p className="card-text">Arrival Time: ${arrOfFlights[i].aTime}</p>
                            <p className="card-text">Departure From: ${arrOfFlights[i].toName}</p>
                            <p className="card-text">Arrival at: ${arrOfFlights[i].fromName}</p>
                        </div>
                    </div>
                </div>`;
        if (i + 1 < arrOfFlights.length) {
            formattedHTML += `
                <div className="col-md-6">
                    <div className="card">
                        <img src="./assets/airline.jpg" style={{ width: '100%', height: '300px', objectFit: 'cover' }} className="card-img-top" alt="Airline" />
                        <div className="card-body">
                            <h5 className="card-title">Flight Number: ${arrOfFlights[i + 1].flightNum}</h5>
                            <p className="card-text">Airline Company: ${arrOfFlights[i + 1].airline}</p>
                            <p className="card-text">Aircraft: ${arrOfFlights[i + 1].aircraft}</p>
                            <p className="card-text">Duration: ${arrOfFlights[i + 1].duration}</p>
                            <p className="card-text">Departure Time: ${arrOfFlights[i + 1].dTime}</p>
                            <p className="card-text">Arrival Time: ${arrOfFlights[i + 1].aTime}</p>
                            <p className="card-text">Departure From: ${arrOfFlights[i + 1].toName}</p>
                            <p className="card-text">Arrival at: ${arrOfFlights[i + 1].fromName}</p>
                        </div>
                    </div>
                </div>`;
        }
        formattedHTML += `</div>`;
                
       
    }

    useEffect(()=> {
        var cardContainer = document.getElementById("cardContainer")
        cardContainer.innerHTML = formattedHTML
    })
    

}