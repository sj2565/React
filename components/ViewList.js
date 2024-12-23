import {useState, useEffect} from 'react'
import axios from 'axios'
import {Table} from 'react-bootstrap'

// 함수형 컴포넌트에서 state 관리는 Hook을 사용한다.
// 내장 Hook인 useState, useEffect를 주로 많이 활용한다.

// npm install chart.js react-chartjs-2

// 비동기 통신 방식) async, await 키워드를 사용한다.
// axios 라이브러리는 웹 API에서 데이터를 얻어 오기 위한 라이브러리이다.
// npm install axios

function ViewList(){
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

  return(
    <div>
      <Table borerded hover size="sm">
        <thead>
          <tr>
            <th className="table_header">이름</th>
            <th className="table_header">성별</th>
            <th className="table_header">나이</th>
            <th className="table_header">국어</th>
            <th className="table_header">영어</th>
            <th className="table_header">수학</th>
          </tr>
        </thead>
        <tbody>
        {data.map(one => (  // data 한 건 한 건에 대해서 mapping
          <tr key={one.id}>
            <td className="cell">{one.name}</td>
            <td className="cell">{one.gender}</td>
            <td className="cell">{one.age}</td>
            <td className="cell">{one.kor}</td>
            <td className="cell">{one.eng}</td>
            <td className="cell">{one.math}</td>
          </tr>
        ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ViewList;
