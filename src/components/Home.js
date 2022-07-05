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
            .then(response => response.json())
            .then(data => {
                setApiResponse(data)
                })
    }
    useEffect(() => {
        if(query) {
            return apiCall();
        }
    }, [query]);

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
        <City apiResponse={apiResponse} error={error} />
        <Button colorScheme='red' mx='auto' w={{base:'60px', md:'80px'}} h='50px' onClick={() => setApiResponse([])}>Clear</Button>
    </Flex> 
  )
}

export default Home