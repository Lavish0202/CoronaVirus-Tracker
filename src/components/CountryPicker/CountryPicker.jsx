import React,{useState,useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import {countries} from '../../api';
import styles from './CountryPicker.module.css'

const CountryPicker = ({handlecountrychange})=> {
    const [fetchedCountries,setfetchcountries]=useState([]);
    useEffect(()=>{
        const fetchcountries=async()=>{
        setfetchcountries(await countries());
        } 
    fetchcountries();
    },[setfetchcountries] );
    
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e)=> handlecountrychange(e.target.value)}>
            <option value="">Global</option>
    {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
} 
export default CountryPicker;