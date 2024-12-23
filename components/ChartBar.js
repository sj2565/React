import {useState, useEffect} from 'react'
import axios from 'axios'
//import {Table} from 'react-bootstrap'
import {Bar} from 'react-chartjs-2'

function ChartBar(){
  // const [변수이름, setData이름] = useState(변수의 기본값);
  // 통상적으로 set + 변수이름의 첫 글자만 대문자의 형식으로 작성을 한다.

  // data 변수는 장고에서 읽어 들인 데이터 집
  // data 변수의 기본 값은 null이고, setter의 이름은 setData이다.
  const [data, setData] = useState(null);

  // Loading = True이면, 데이터를 받지 못한 상태이다.
  const [loading, setLoading] = useState(false); // 로딩 정보
  const [error, setError] = useState(null);   // 에러 정보

  useEffect(() => {
    const fetchData = async () => {
      try{
        // 요청 시 error와 data를 초기화 한다.
        setError(null);
        setData(null);
        setLoading(true); // true이면, 다운로드 진행 중 이다.

        const url = "http://127.0.0.1:8000/reactapp/";

        // response는 응답 객체이다.
        const response = await axios.get(url);

        console.log('response.data');
        console.log(response.data);
        setData(response.data)

        setLoading(false); // 이상 무
      }catch(e){  //  e는 예외 객체
        setError(e);
      }
    };
    fetchData();
  }, []);

  // 상태에 따른 적절한 메시지 보여 주기
  if(loading){ return <div>데이터 로딩중이다. </div>;}
  if(error){ return <div>문제가 발생했다. </div>;}
  if(!data){
    return null; // 의미없는 데이터가 들어오면 null값 반환
  }

  var chartdata = [];   // 차트를 그릴 수치 데이터(국어 점수)
  var chartlabels = []; // 차트에 표시할 레이블

  var i = 0;
  while (i < data.length) {
    chartlabels.push(data[i].name);
    chartdata.push(data[i].kor);  // 국어 점수 차트 보기
    i = i + 1;
  }
  console.log('chartdata : ' + chartdata);
  console.log('chartlabels : ' + chartlabels);

  const options = {
    scales: {
      y: {
        beginAtzero: true
      }
    }
  } // end const options

  const mydata = {
    labels: [...chartlabels],
    datasets: [
      {
        label:'국어 점수',
        data: [...chartdata],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        backgroundColor:[
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderWidth: 1,
      }
    ]
  }

  return(
    <div style={{width:400}}>
      <Bar data={mydata} options={options} />
    </div>
  );
}

export default ChartBar;
