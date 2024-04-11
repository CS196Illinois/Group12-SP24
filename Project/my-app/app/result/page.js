export default function Page() {
    return (
        <div>
            <h1>Test</h1>
            {formatPlan(generatePlan("ORD", "TPE", "202004210938"))}
        </div>
    )
}

class PlanObject {
    
}

function getInput() {
    //TODO: implement a function that will be called when the form is submitted to get the input
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
 

    const obj = parser.toJson(result, { object: true });

    const testXML = 'Project/my-app/app/testXML.xml'

    const xmlDocument = new DOMParser().parseFromString(testXML, "text/xml")

    console.log(xmlDocument)







    return
}

function formatPlan(planObject) {
    // planObject: object generated from the generatePlan() function

    // TODO: implement this function to return the html layout with the plan object data integrated

    return (
        <div>

        </div>
    )
}