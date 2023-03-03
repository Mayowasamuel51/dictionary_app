import { Container, TextField, Typography, Button } from "@mui/material";
import React, { useEffect, useState, useCallback } from "react";
import './Api.css'
import SendIcon from '@mui/icons-material/SearchOutlined';
import axios from "axios";
import ApiList from "./ApiList";

function Api() {
    const [datas, setData] = useState([]);
    const [input, setInput] = useState('')
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState(false)
    const inputHandler = (e) => {
        setInput(e.target.value)
    }
    const baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
    const fetchData =async (searchWord) => {
        try {
            const response = await axios(`${baseUrl}${searchWord}`);
            if (!response.status === 401) {
                throw new Error('something is worng')
            }
            if (!response.status === 404) {
                throw new Error('Word not found please try another one ')
            }
            if (!response.status === 500) {
                throw new Error('Server Error ')
            }
            const data = await response.data;
            setData(data)
            setIsLoading(false)
            setError(false)
        } catch (error) {
            setError(true)
        }
       
    } 
    const Btn = () => {
        setIsLoading(true)
        fetchData(input)
    }
   
    let content = <p>Empty  Search</p>
    if (error) {
        content = <h1 style={{color:'red' ,fontSize:'60px'}}>Error With Network</h1>
    } else {
        if (isloading) {
            content = <h1>LOADING RESULT .................</h1>
        }else {
            content = <div>
                {datas.map((item, index) => {
                    return (
                        <ApiList key={index} dictionary={item} />
                    )
                })}
            </div>
        }

    }
    return (
        <React.Fragment>
            <main>
                <Container style={{ margin: 'auto', width: '80%' }}>
                    <Typography align="center" gutterBottom color="info" fontSize="meduim" variant="h4">DICTIONARY APP</Typography>
                    <TextField required onChange={inputHandler} value={input} fullWidth id="fullWidth" placeholder="Search Your word" />
                    <div styles={{ paddingTop: '40px' }}>
                        <Button onClick={Btn} variant="contained" endIcon={<SendIcon />}>
                            Send Request
                        </Button>
                    </div>
                    <div style={{ marginTop: '40px' }} className="box">
                        <Typography align="left" gutterBottom color="info" fontSize="meduim" variant="h4">Result </Typography>
                        <br />
                        {content}
                    </div>
                </Container>
            </main>
        </React.Fragment>
    )
}
export default Api;