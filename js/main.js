/**
 * Your JS code here
 */

/**
 * Sample code
 */
/**
document.addEventListener('DOMContentLoaded', function() {
  var ulElement = document.getElementById('links');
  var liElement = document.createElement('li');
  liElement.appendChild(document.createTextNode('created by main.js'));

  ulElement.appendChild(liElement);
});
*/

// Our labels along the x-axis
var years = [2010,2011,2012, 2013, 2014, 2015, 2016];
// For drawing the lines
var unitedStates = [60.01,62.82,66.7, 70, 75, 77.5, 77.9];
var france = [76.65,80.5,81.98, 83.63, 83.7, 84.45, 82.57];
var spain = [52.68,56.18,57.46,57.47, 60.68, 64.94, 68.18, 75.32];

var ctx = document.getElementById("myChart");
//var cnv;

//function centerCanvas() {
//    var x = (windowWidth - width) / 2;
//    var y = (windowHeight - height) / 2;
//    cnv.position(x, y);
//}

//function setup() {
//    cnv = createCanvas(100, 100);
//    centerCanvas();
//    background(255, 0, 200);
//}

//function windowResized() {
//    centerCanvas();
//}
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: years,
        datasets: [
            {
                data: unitedStates,
                label: "United States",
                borderColor: "#FFAD60",
                fill: false
            },
            {
                data: france,
                label: "France",
                borderColor: "#C9E3AC",
                fill: false
            },
            {
                data: spain,
                label: "Spain",
                borderColor: "#C793FF",
                fill: false
            }
        ]
    }
});
