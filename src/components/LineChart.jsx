import React, { PureComponent } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
} from 'recharts'

const data = [
  {
    name: '1',
    uv: 1,
    pv: 2,
  },
  {
    name: '2',
    uv: 2,
    pv: 3,
  },
  {
    name: '3',
    uv: 4,
    pv: 3,
  },
  {
    name: '4',
    uv: 6,
    pv: 7,
  },
  {
    name: '5',
    uv: 7,
    pv: 7,
  },
  {
    name: '6',
    uv: 8,
    pv: 7,
  },
  {
    name: '7',
    uv: 9,
    pv: 7,
  },
  {
    name: '8',
    uv: 10,
  },
  {
    name: '9',
    uv: 12,
  },
  {
    name: '10',
    uv: 13,
  },
]

export default class ExampleLine extends PureComponent {
  render() {
    return (
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name'>
          <LabelList value='Semana' offset={0} position='insideBottom' />
        </XAxis>
        <YAxis>
          <LabelList dataKey='name' position='insideTop' angle='45' />
        </YAxis>
        <Tooltip />
        <Legend />
        <Line
          name='Metas cumplidas'
          type='monotone'
          dataKey='pv'
          stroke='#8884d8'
          activeDot={{ r: 8 }}
        />
        <Line
          name='Metas programadas'
          type='monotone'
          dataKey='uv'
          stroke='#82ca9d'
        />
      </LineChart>
    )
  }
}
