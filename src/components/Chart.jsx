import React from 'react'
import { LineChart, Line, XAxis, YAxis } from "recharts";
import styled from 'styled-components';

const data = [];

const rand = 300;
for (let i = 0; i < 7; i++) {
  let d = {
    year: 2000 + i,
    value: Math.random() * (rand + 50) + 100
  };

  data.push(d);
}

const Chart = () => {
  return (
    <Container>
    <LineChart
      width={600}
      height={500}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
      <XAxis dataKey="year" />
      <YAxis />
    </LineChart>
  </Container>
  )
}

export default Chart

const Container = styled.div`
    flex: 1;
`