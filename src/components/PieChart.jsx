import React, { PureComponent } from 'react'
import { PieChart, Pie, Sector, Cell, Tooltip } from 'recharts'

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 100 },
  { name: 'Group C', value: 500 },
]
const COLORS = ['#272c67', '#7a8087', '#e94560']

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'
    >
      {`${(percent * 100).toFixed(0)} % Completados`}
    </text>
  )
}

export default class Example extends PureComponent {
  render() {
    return (
      <PieChart width={300} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={50}
          outerRadius={80}
          label={renderCustomizedLabel}
          fill='#8884d8'
          paddingAngle={5}
          dataKey='value'
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    )
  }
}
