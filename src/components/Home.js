import { Flex, Heading, Button } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import InputSearch from './InputSearch'
import City from './City'

const Home = () => {
    const [error, setError] = useState(false)
    const [query, setQuery] = useState('');
    const [apiResponse, setApiResponse] = useState([]);
    const apiCall = () => {
        fetch(`https://api.weatherapi.com/v1/current.json?key=38d8acf92d4b49bf87e133351220407&q=${query}`)
            .then(response => {
                return (
                response.json()
                )
            } )
            .then(data => {
                setApiResponse(data)
                setError(true)
                })
            .catch((err) => {
                console.log(err)
            })    
    }
    const handleReset = () => {
        setError(false);
        setApiResponse([])
    }
    useEffect(() => {
        if(query) {
            apiCall()
        }
    }, [query]);

    console.log(apiResponse)

  return (
    <Flex
    w={['90%', '80%', '75%', '70%']}
    m='auto'
    direction='column'
    p={5}
    >
        <Heading
        as='h1' 
        size='3xl' 
        my='80px'
        textAlign='center' 
        py='25px'
        color='#232323'
        opacity='0.9'
        >The Weather App</Heading>
        <InputSearch 
        setQuery={ setQuery }
        w='100%'
        mx='auto'
        />
        {error && <City apiResponse={apiResponse} error={error} />}
        <Button mt={!error? '100px' : '30px'} colorScheme='red' mx='auto' w={{base:'60px', md:'80px'}} h='50px' onClick={handleReset}>Clear</Button>
    </Flex> 
  )
}

export default Home