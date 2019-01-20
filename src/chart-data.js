export const skillsChartData = {
  type: 'bar',
  data: {
    labels: ['Vue.js', 'HTML', 'CSS', 'JavaScript', 'Less', 'Git', 'Terminal', 'MongoDB', 'Node'],
    datasets: [
      {
        label: 'Skill level 1 - 5',
        data: [2, 3, 4, 3, 3, 2, 2, 1, 1, 1],
        //Beginner, elementary, intermediate, advanced, expert
        backgroundColor: [
          'rgba(54,73,93,.5)', // Blue
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)'
        ],
        borderColor: [
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
        ],
        borderWidth: 3
      },
    ]
  },
  options: {
    legend: {
      display: true,
          labels: {
              fontColor: '#FFF',
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
