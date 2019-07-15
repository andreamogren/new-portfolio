export const skillsChartData = {
  type: 'bar',
  data: {
    labels: ['Vue.js', 'HTML', 'CSS', 'JavaScript', 'Less', 'Git', 'Terminal', 'MongoDB', 'Node'],
    datasets: [
      {
        label: 'Skill level 1 - 5',
        data: [3, 3, 4, 3, 3, 2, 2, 1, 1, 1],
        //Beginner, elementary, intermediate, advanced, expert
        backgroundColor: [
          'rgba(139,0,255,.5)',
          'rgba(139,0,255,.5)',
          'rgba(139,0,255,.5)',
          'rgba(139,0,255,.5)',
          'rgba(139,0,255,.5)',
          'rgba(139,0,255,.5)',
          'rgba(139,0,255,.5)',
          'rgba(139,0,255,.5)',
          'rgba(139,0,255,.5)',        
        ],
        borderColor: [
          '#8B00FF',
          '#8B00FF',
          '#8B00FF',
          '#8B00FF',
          '#8B00FF',
          '#8B00FF',
          '#8B00FF',
          '#8B00FF',
          '#8B00FF',
        ],
        borderWidth: 3
      },
    ]
  },
  options: {
    legend: {
      display: true,
          labels: {
              fontColor: '#000',
          }
      },
      scales: {
          yAxes: [{
            ticks: {
                beginAtZero: true,
                stepSize: 1,
                max: 5,
            },
            scaleLabel: function (valuePayload) {
            if(Number(valuePayload.value)===1)
            return 'Beginner';
            if(Number(valuePayload.value)===2)
            return 'Elementary';
            if(Number(valuePayload.value)===3)
            return 'Intermediate';
            if(Number(valuePayload.value)===4)
            return 'Advanced';
            if(Number(valuePayload.value)===5)
            return 'Expert';
            }
          }]
      }
  }
}

export default skillsChartData;
