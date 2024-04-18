"use client"
import { useState } from "react"
import React from "react"
import ResultPage from './resultpage';
import { useSearchParams } from "next/navigation";

const xmlFile = `<? xml version = "1.0" encoding = "UTF-8" ?>
<OTA_AirDetailsRS PrimaryLangID="eng" Version="1.0" TransactionIdentifier="" FLSNote="This XML adds attributes not in the OTA XML spec.  All such attributes start with FLS" FLSDevice="ota-xml-expanded" xmlns="http://www.opentravel.org/OTA/2003/05">
    <Success />
    <FLSResponseFields FLSOriginCode="SFO" FLSOriginName="San Francisco International Airport" FLSDestinationCode="ORD" FLSDestinationName="O'Hare International Airport" FLSStartDate="2024-04-11" FLSEndDate="2024-04-11" FLSResultCount="213" FLSRoutesFound="493" FLSBranchCount="2026" FLSTargetCount="1659" FLSRecordCount="2557103" />
    <FlightDetails TotalFlightTime="PT4H21M" TotalMiles="1844" TotalTripTime="PT4H21M" FLSDepartureDateTime="2024-04-11T00:09:00" FLSDepartureTimeOffset="-0700" FLSDepartureCode="SFO" FLSDepartureName="San Francisco International Airport" FLSArrivalDateTime="2024-04-11T06:30:00" FLSArrivalTimeOffset="-0500" FLSArrivalCode="ORD" FLSArrivalName="O'Hare International Airport" FLSFlightType="NonStop" FLSFlightLegs="1" FLSFlightDays="...4..." FLSDayIndicator="">
        <FlightLegDetails DepartureDateTime="2024-04-11T00:09:00" FLSDepartureTimeOffset="-0700" ArrivalDateTime="2024-04-11T06:30:00" FLSArrivalTimeOffset="-0500" FlightNumber="2661" JourneyDuration="PT4H21M" SequenceNumber="1" LegDistance="1844" FLSMeals="G" FLSInflightServices=" " FLSUUID="SFOORD20240411UA2661">
            <DepartureAirport CodeContext="IATA" LocationCode="SFO" FLSLocationName="San Francisco International Airport" Terminal="3" FLSDayIndicator="" />
            <ArrivalAirport CodeContext="IATA" LocationCode="ORD" FLSLocationName="O'Hare International Airport" Terminal="1" FLSDayIndicator="" />
            <MarketingAirline Code="UA" CodeContext="IATA" CompanyShortName="United Airlines" />
            <Equipment AirEquipType="739" />
        </FlightLegDetails>
    </FlightDetails>
    <FlightDetails TotalFlightTime="PT5H11M" TotalMiles="1921" TotalTripTime="PT5H50M" FLSDepartureDateTime="2024-04-11T00:45:00" FLSDepartureTimeOffset="-0700" FLSDepartureCode="SFO" FLSDepartureName="San Francisco International Airport" FLSArrivalDateTime="2024-04-11T08:35:00" FLSArrivalTimeOffset="-0500" FLSArrivalCode="ORD" FLSArrivalName="O'Hare International Airport" FLSFlightType="Connect" FLSFlightLegs="2" FLSFlightDays="...4..." FLSDayIndicator="">
        <FlightLegDetails DepartureDateTime="2024-04-11T00:45:00" FLSDepartureTimeOffset="-0700" ArrivalDateTime="2024-04-11T06:21:00" FLSArrivalTimeOffset="-0500" FlightNumber="761" JourneyDuration="PT3H36M" SequenceNumber="1" LegDistance="1587" FLSMeals="V" FLSInflightServices="  3/  5/ 12/ 15/ 18/ 22/ 27/ 99" FLSUUID="SFOMSP20240411DL761">
            <DepartureAirport CodeContext="IATA" LocationCode="SFO" FLSLocationName="San Francisco International Airport" Terminal="2" FLSDayIndicator="" />
            <ArrivalAirport CodeContext="IATA" LocationCode="MSP" FLSLocationName="Saint Paul International Airport" Terminal="1" FLSDayIndicator="" />
            <MarketingAirline Code="DL" CodeContext="IATA" CompanyShortName="Delta Air Lines" />
            <Equipment AirEquipType="320" />
        </FlightLegDetails>
        <FlightLegDetails DepartureDateTime="2024-04-11T07:00:00" FLSDepartureTimeOffset="-0500" ArrivalDateTime="2024-04-11T08:35:00" FLSArrivalTimeOffset="-0500" FlightNumber="2946" JourneyDuration="PT1H35M" SequenceNumber="2" LegDistance="334" FLSMeals="" FLSInflightServices="  3/ 18/ 22/ 27/ 99" FLSUUID="MSPORD20240411DL2946">
            <DepartureAirport CodeContext="IATA" LocationCode="MSP" FLSLocationName="Saint Paul International Airport" Terminal="1" FLSDayIndicator="" />
            <ArrivalAirport CodeContext="IATA" LocationCode="ORD" FLSLocationName="O'Hare International Airport" Terminal="5" FLSDayIndicator="" />
            <MarketingAirline Code="DL" CodeContext="IATA" CompanyShortName="Delta Air Lines" />
            <Equipment AirEquipType="717" />
        </FlightLegDetails>
    </FlightDetails>
</OTA_AirDetailsRS>`

var arrOfFlights

export default function Page() {
    generatePlan()
    formatPlan()

    var searchParams = useSearchParams()
    console.log(searchParams.get("to"))
    console.log(searchParams.get("from"))
    console.log(searchParams.get("date"))
    // processFlightDetails()
    return (
        <div className='position-relative d-flex align-items-center justify-content-center vh-100'>
            <img src="./hnbay.jpg" className="img-fluid position-absolute top-0 start-0 w-100 h-100" style={{ objectFit: 'cover' }} alt="background" />
            
            <div className="container">
                <div className="row mt-5 align-items-center justify-content-center">
                    <div className="col-md-6">
                        <h4>Airline Information</h4>
                        <div className="card">
                            <img src="./assets/airline.jpg" style={{ width: '100%', height: '300px', objectFit: 'cover' }} className="card-img-top" alt="Airline" />
                            <div className="card-body">
                                <h5 className="card-title">Airline Name</h5>
                                <p className="card-text">Flight details, timings, and price.</p>
                                <a href="#" className="btn btn-primary">Select</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <h4>Bus Route Information</h4>
                        <div className="card">
                            <img src="./assets/bus.jpg" style={{ width: '100%', height: '300px', objectFit: 'cover' }} className="card-img-top" alt="Bus" />
                            <div className="card-body">
                                <h5 className="card-title">Bus Company Name</h5>
                                <p className="card-text">Route details, timings, and price.</p>
                                <a href="#" className="btn btn-primary">Select</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="row mt-5">
                    <div className="col text-right">
                        <button type="button" className="btn btn-primary btn-lg">Next</button>
                    </div>
                </div>       */}
            </div>
        </div>
    )
}

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

function getInput() {
    //TODO: implement a function that will be called when the form is submitted to get the input
}

function processFlightDetails(err,result) {
    var flightRecords = result['OTA_AirDetailsRS']['FlightDetails']
    var indexes = Object.keys(flightRecords)
    var resultArr = Array(indexes.length)
    console.log(flightRecords)
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
            return "Boeing " + input[0]+input[1]+'7-'+input[2]+'00'
        }
        if (input[1] == 'M') {
            return "Boeing 737 MAX " + input[2]
        }
    } else if (input[0] == '3') {
        return "Airbus A" + input
    } else if (input[0] == '1') {
        return "Embraer " + input
    } else {
        return input
    }
}

export function generatePlan() {
    // to: string indicating the departure location
    // from: string indicating the arrival location
    // dateTime: dateTime object representing the departure time
    // TODO: implement this function to return a PlanObject representing the plan by requesting from the API

    // const options = {
    //     method: 'GET',
    //     url: 'https://timetable-lookup.p.rapidapi.com/TimeTable/SFO/LAX/202404/',
    //     headers: {
    //         'X-RapidAPI-Key': 'a7905cdcfbmsh0ec22c6630dd2dep14234ajsn084ced1ba76b',
    //         'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com'
    //     }
    // };


    // try {
    //     const response = await axios.request(options);
    //     console.log(response.data);
    // } catch (error) {
    //     console.error(error);
    // }
    const parseString = require("xml2js").parseString;
    parseString(xmlFile,processFlightDetails)

    return 
}

function formatPlan(planObject) {
    // getState(arrOfFlights)
    // planObject: object generated from the generatePlan() function

    // TODO: implement this function to return the html layout with the plan object data integrated

    console.log(arrOfFlights)
    return (
        <div>

        </div>
    )
}