
        const bigchart = document.getElementById('statechart').getContext('2d');
        const smallchart = document.getElementById('professionchart').getContext('2d');
        
        const myChart = new Chart(bigchart, {
            type: 'line',
            data: {
                labels: ['Alaska','Florida','Kansas','Nevada','Texas','Utah','Palau','Vermond','Oregon','Arizona'],
                datasets: [{
                    label: 'Jobs Available Based on States',
                    data: [150, 120, 110, 105, 90 , 80, 70, 60, 50, 40],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    borderColor:'red',
                    fill: true
                }]
            }
        });

        const myChart2 = new Chart(smallchart, {
            type: 'line',
            data: {
                labels: ['RN','LPN','LVN','Tech','NP'],
                datasets: [{
                    label: 'Jobs Available Based on Profession',
                    data: [100,85,70,60,40],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    borderColor: 'red',
                    fill: true
                }]
            }
        });
