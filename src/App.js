import React, { Component } from 'react';
import Cards from './components/Cards/Cards' ;
import Charts from './components/Charts/Charts' ;
import CountryPicker from './components/CountryPicker/CountryPicker' ;
import style from './App.module.css';
import {fetchData} from './api';
import CoronaImg from './Images/Corona_img.png'
import { StylesProvider } from '@material-ui/core';


export default class App extends Component {
    state={
        data:{},
        country:''
    }
    handlecountrychange=async(country)=>{
        const fetcheddata= await fetchData(country);
        this.setState({data:fetcheddata, country:country});
    }

   async componentDidMount(){
        const fetcheddata= await fetchData();
        this.setState({data:fetcheddata});
    }
    render() {
        const { data,country} = this.state;
        return (
            <div className= {style.container} >
                <img className={style.image} src ={CoronaImg} alt='COVID-19'/>
                <Cards data={data}/>
                <CountryPicker handlecountrychange={this.handlecountrychange}/>
                <Charts data={data} country={country}/>
                

            </div>
        )
    }
}
