import { Flex, Heading, Button } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import InputSearch from './InputSearch'
import City from './City'

const Home = () => {

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
        mb='60px'
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
        <City apiResponse={apiResponse} />
        <Button colorScheme='red' mx='auto' w='60px' h='50px' onClick={() => setApiResponse([])}>Clear</Button>
    </Flex> 
  )
}

export default Home