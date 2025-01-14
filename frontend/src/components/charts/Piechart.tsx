import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
} from 'recharts';

interface PiechartProps {
  data: {
    status: string;
    total: number;
  }[];
}

const COLORS = ['#0E9CFF', '#1D7AFC', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = (props: any) => {
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
    colors,
  } = props;
  const radius = outerRadius + 10;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const lineEndPointX =
    cx + (outerRadius + 5) * Math.cos(-midAngle * RADIAN);
  const lineEndPointY =
    cy + (outerRadius + 5) * Math.sin(-midAngle * RADIAN);

  return (
    <>
      <line
        x1={cx + outerRadius * Math.cos(-midAngle * RADIAN)}
        y1={cy + outerRadius * Math.sin(-midAngle * RADIAN)}
        x2={lineEndPointX}
        y2={lineEndPointY}
        stroke={colors[index % colors.length]}
      />
      <text
        x={x}
        y={y}
        fill={colors[index % colors.length]}
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    </>
  );
};

export default function Piechart({ data }: PiechartProps) {
  return (
    <ResponsiveContainer width="100%" height="90%">
      <PieChart
        width={200}
        height={200}
        margin={{ top: 10, bottom: 10, right: 10, left: 10 }}
      >
        <Legend align="center" />
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={(props) =>
            renderCustomizedLabel({ ...props, colors: COLORS })
          }
          fill="#8884d8"
          dataKey="total"
          nameKey="status"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
