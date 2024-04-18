"use client"
import { useState } from "react"
import React from "react"
import ResultPage from './resultpage';
import { useSearchParams } from "next/navigation";

const xmlFile = `<?xml version="1.0" encoding="UTF-8"?>
<OTA_AirDetailsRS PrimaryLangID="eng" Version="1.0" TransactionIdentifier="" xmlns="http://www.opentravel.org/OTA/2003/05">
  <Success/>
  <FLSWarning FLSWarningCode="-6" FLSWarningName="No flights found"/>
  <!--  Warning: No flights found  -->
</OTA_AirDetailsRS>`

var arrOfFlights

export default function Page() {
    generatePlan()
    formatPlan()

    var searchParams = useSearchParams()
    console.log(searchParams.get("to"))
    console.log(searchParams.get("from"))
    // processFlightDetails()
    return (
        <div>
            {/*<h1>Test</h1> */}
            {/* {formatPlan(generatePlan("ORD", "TPE", "202004210938"))} */}
            < ResultPage/>
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
    if (result['OTA_AirDetailsRS']["FLSWarning"]!=null) {
        return null
    }
    var flightRecords = result['OTA_AirDetailsRS']['FlightDetails']
    
    //var indexes = Object.keys(flightRecords)
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