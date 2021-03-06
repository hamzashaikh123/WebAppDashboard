// CHART STYLING ---------------------
const chartData=
{
    labels:["16-22","23-29","30-5","6-12","13-19","20-26","27-3","4-10"],
    points:
        [[1000, 200, 450, 389, 239, 150, 489, 500],
        [500, 850, 2050, 250, 1500, 300, 2100, 1000],
        [384, 291, 150, 989, 138, 500, 643, 123],
        [234, 525, 657, 135, 160, 100, 900, 590]
    ]
};

let trafficSetting=document.getElementsByClassName("activated")[0].textContent;

function chartLayout(){
    for(let x=0; x<chartData.length; x+=1){
        trafficSetting=document.getElementsByClassName("activated")[0].textContent;
        if (chartData[x][0]===trafficSetting){
            return(chartData[x][1]);
        }
    }
};

function addData(chart, data) {
    chart.data.datasets.data = [];
    chart.data.datasets.forEach((dataset) => {
        dataset.data = data;
    });
    chart.update();
}


const buttonsList = document.getElementsByClassName("traffic-nav");
for(let x = 0; x<buttonsList.length; x+=1){
    buttonsList[x].addEventListener('click',()=>{
        for(let i = 0; i<buttonsList.length; i+=1){
            if (buttonsList[i].classList.contains('activated')){
                buttonsList[i].classList.remove('activated');
            }
        }
        buttonsList[x].classList.toggle('activated');
        addData(trafficChart, chartData.points[x]);

    });
}



//CHART DATA ------------------------------------------------------------
const lineChart = document.getElementById('lineChart').getContext('2d');
const trafficChart = new Chart(lineChart, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data:  {
         labels: chartData.labels,
    datasets: [{
        data: chartData.points[0],
        backgroundColor: 'rgba(116, 119, 191, .5)',
        borderColor: '#A9ACE5',
        borderWidth: 2,
        lineTension: 0,
        pointBackgroundColor: '#FFFFFF',
        pointBorderColor: '#7477BF',
        pointBorderWidth: 2,
        pointRadius: 4
    }]
},
    // Configuration options go here
    options: {
    aspectRatio: 2.75,
    animation: {
        duration: 1000
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    legend : {
        display: false
    }
}
});

const barChart = document.getElementById('barChart').getContext('2d');
const DailyTrafficChart = new Chart(barChart, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data:  {
         labels: ["S","M",'T','W','T','F','S'],
    datasets: [{
        data: [75, 100, 175, 125, 225, 300, 200, 100],
        backgroundColor: '#7477bf',
        borderWidth: 2,
        lineTension: 0,
        pointBackgroundColor: '#FFFFFF',
        pointBorderColor: '#7477BF',
        pointBorderWidth: 2,
        pointRadius: 4
    }]
},
    // Configuration options go here
    options: {
    aspectRatio: 2,
    animation: {
        duration: 1000
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    legend : {
        display: false
    }
}
});

const pieChart = document.getElementById('pieChart').getContext('2d');
const MobileUsersChart = new Chart(pieChart, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data:  {
         labels: ["Desktop","Tablet","Phones"],
    datasets: [{
        data: [65,20,15],
        backgroundColor: ['#7477bf','#74aabf','#74bf8c'],
        borderColor: '#A9ACE5',
        borderWidth: 2,
        lineTension: 0,
        pointBackgroundColor: '#FFFFFF',
        pointBorderColor: '#7477BF',
        pointBorderWidth: 2,
        pointRadius: 4
    }]
},
    // Configuration options go here
    options: {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 15,
            fontStyle: 'bold',
            fontSize: 16
        }
        
        
    }
    
}
});

//RESPONSIVE CODING  ------------------------------------------------------------
const alertClose = document.getElementById("close");
const alertBar=document.getElementsByClassName("alert")[0];



//when 'X' is clicked on alert bar//
alertClose.addEventListener('click',()=>{
    alertBar.style.display="none";
});


//determine if user message is properly included//
const messageBox= document.getElementById("user-message");
const userField=document.getElementById("search-input");
const submitButton = document.getElementsByClassName("send-button")[0];

submitButton.addEventListener("click",()=>{
    if (userField.value=="" || messageBox.value==""){
        alert("Please add all required information (user and message).");
    }
    else {
        alert("Thank you for sending in your message!");
        messageBox.value="Message has been sent.";
        userField.value="";
        messageBox.style.backgroundColor='#b5b5b5';
        userField.style.backgroundColor='#b5b5b5';
        messageBox.disabled=true;
        userField.disabled=true;
    }       
});

function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick =function(event){
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
    }
}

//autocomplete
 
