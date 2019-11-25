//-------------------------------------------------------------------------------------
// 概要 : グラフに関する処理を記述したファイル
//-------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------
// 概要 : 出勤可能者のグラフ
// 形状 : 棒グラフ
//-------------------------------------------------------------------------------------
var ctx = document.getElementById("AttendanceBarChart");
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['生産部', '生技部', '品質保証部'],
    datasets: [
      {
        label: '出勤可能者',
        data: [50, 40, 90],
        backgroundColor: "rgba(192,192,192,1)"

      }
    ]
  },
  options: {
    title: {
      display: true,
      text: '出勤可能者グラフ'
    },
    scales: {
      yAxes: [{
        ticks: {
          suggestedMax: 100,
          suggestedMin: 0,
          stepSize: 10,
          callback: function(value, index, values){
            return  value +  '人'
          }
        }
      }]
    },
  }
});

//-------------------------------------------------------------------------------------
// 概要 : 回答状況のグラフ
// 形状 : 円グラフ
//-------------------------------------------------------------------------------------
var ctx = document.getElementById("AnswerPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["回答済み", "未回答"],
    datasets: [{
        backgroundColor: [
            "#c0c0c0",
            "#FF0000",
        ],
        data: [90, 4]
    }]
  },
  options: {
    title: {
      display: true,
      text: '回答状況'
    }
  }
});
