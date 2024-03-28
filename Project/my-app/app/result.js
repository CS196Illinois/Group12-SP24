export default function Result() {
    return (
        <div>
            {formatPlan(generatePlan("ORD","TPE","202004210938"))}
        </div>
    )
}

class PlanObject{

}

function getInput() {
    //TODO: implement a function that will be called when the form is submitted to get the input
}

function generatePlan(to,from,dateTime) {
    // to: string indicating the departure location
    // from: string indicating the arrival location
    // dateTime: dateTime object representing the departure time

    // TODO: implement this function to return a PlanObject representing the plan by requesting from the API

    return
}

function formatPlan(planObject) {
    // planObject: object generated from the generatePlan() function

    // TODO: implement this function to return the html layout with the plan object data integrated

    return(
        <div>

        </div>
    )
}