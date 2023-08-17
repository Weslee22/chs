function showtimesheet(job){
    if(job === '1'){
        const mediumchart = document.getElementById('medchart').getContext('2d');
        const myChart3 = new Chart(mediumchart, {
            type: 'line',
            data: {
                labels: ['Saturday','Monday','Tuesday','Wednesday','Thursday','Friday','Sunday'],
                datasets: [{
                    label: '30/07/2023 - 5/8/2023',
                    data: [8,12,8,6,8,8,10],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    borderColor: 'maroon',
                    fill: true
                }]
            }
        });
    } else if(job === '2'){
        const mediumchart = document.getElementById('medchart').getContext('2d');
        const myChart3 = new Chart(mediumchart, {
            type: 'line',
            data: {
                labels: ['Saturday','Monday','Tuesday','Wednesday','Thursday','Friday','Sunday'],
                datasets: [{
                    label: '23/07/2023 - 29/07/2023',
                    data: [0,8,7,6,8,8,0],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    borderColor: 'maroon',
                    fill: true
                }]
            }
        });
    }


}


