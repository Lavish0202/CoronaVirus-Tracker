import React, {useState, useEffect} from 'react';
import {fetchdailydata} from '../../api';
import {Line, Bar} from 'react-chartjs-2';
import styles from './Charts.module.css'

const Charts = ({data,country})=> {
    const [dailydata,setDailydata] = useState([]);
    useEffect(()=> {
        const fetchAPI = async() =>{
            setDailydata(await fetchdailydata());
        }
        fetchAPI();
    },[] 
    );
    const linechart=(
        dailydata.length 
        ?
       ( <Line
        data={{
            labels: dailydata.map(({date})=>date),
            datasets: [
                {data: dailydata.map(({confirmed})=>confirmed),
                label:'Infected',
                borderColor: '#3333ff',
                fill:true,
            
            }
                ,
                {data: dailydata.map(({deaths})=>deaths),
                label:'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255,0,0,0.5)',
                fill:true,
            }],
        }}
        />) : null

    );

    const barchart=(
        data.confirmed
        ?(<Bar 
        data={{
            labels:['Total Corona Patients','Total Recovered','Total Deaths'],
            datasets:[{
                label: 'Total People',
                backgroundColor:['rgba(0,0,255,0.5)', 'rgba(0,255,0,0.5)', 'rgba(255,0,0,0.5)'],
                data: [data.confirmed.value ,data.recovered.value ,data.deaths.value]
            }]
        }}
        options={{
            legend: {display:false},
            title: {display:true, text:`Current data from ${country}` }
        }}
        />
            ):null
    );

    return(
        <div className={styles.container}>
            {country? barchart: linechart}
        </div>
    )
} 
export default Charts;