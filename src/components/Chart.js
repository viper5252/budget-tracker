import './Ac.css'
import { useState } from 'react';
import { BarChart,XAxis,CartesianGrid,YAxis,Tooltip,Legend,Bar } from 'recharts'
const Chart = () => {
    const [transactions, setTransactions] = useState(JSON.parse(localStorage.getItem("transactions"))||[]);
    return (
    <div contentContainerStyle={{justifyContent:'center',alignItems:'center'}} className="ac">
    <BarChart  className='bar' width={730} height={250} data={transactions}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="category" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="amount" fill="#000000" />
    </BarChart>
        
        </div>
    )
}
export default Chart;