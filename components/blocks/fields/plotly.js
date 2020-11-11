import { useState, useEffect } from "react";
import Plot from 'react-plotly.js';

const Gewicht = () => {
  const [weights, setWeights] = useState();
  const [days, setDays] = useState();

  useEffect(() => {
    const fetchTotals = async () => {
      let response = await fetch(
        `https://dieet-api.herokuapp.com/api/v1/weight/since/2020/1/15`
      ).catch((err) => {
        alert(err);
      });
      let resData = await response.json();
      const days = []
      await resData.map(obj => days.push(obj.day))
      setDays(days);
      const weights = []
      await resData.map(obj => weights.push(obj.weight))
      setWeights(weights);
    };

    // console.log(days)
    fetchTotals();
  }, []);

  return (
    <div class="container">
      <div class="row">
        <div class="col-12 w-100">
          <Plot 
            useResizeHandler
            style={{ width: '100%', minHeight: '700px'}}
            data={[
              {
                x: !!days ? days : console.log("No Data"),
                y: !!weights ? weights : console.log("No Data"),
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'red'},
              },
            ]}
            layout={ {autosize: true, title: 'Gewichts verloop sinds start'} }
          />
        </div>
      </div>
    </div>
  );
};
export default Gewicht;
