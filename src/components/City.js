import { Heading, Box, Text, Image, Flex } from '@chakra-ui/react'
import React from 'react'

const City = ({ apiResponse }) => {
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    if(apiResponse.length === 0 || apiResponse.error) {
        return(
            <Box
            w='100%'
            my={20}
            >
                <Heading textAlign='center' mx='auto' w='100%' opacity='0.8'>
                    No city Found
                </Heading>
            </Box>
        )
    }
    if(!apiResponse.error) {
        return (
            <Box
            align='center'
            py={4}
            direction='column'
            my={10}
            boxShadow='xl'
            rounded='md'
            w={['90%', '300px', '320px', '350px']}
            mx='auto'
            >
                <Flex
                justify='space-around'
                opacity='0.8'
                >
                    <Text>{ weekDays[apiResponse.current.is_day] }</Text>
                    <Text> {apiResponse.location.localtime.slice(11, apiResponse.location.localtime.length)} hs </Text>
                </Flex>
                <Image 
                src={ apiResponse.current.condition.icon }
                w='80px'    
                />
                <Heading size='md' textAlign='center' opacity='0.8'>
                    { apiResponse.location.name } ({apiResponse.location.country})
                </Heading>
                <Text fontSize='40px' fontWeight='600'> { apiResponse.current.temp_c } °C</Text>
                <Text opacity='0.8'>{ apiResponse.current.condition.text }</Text>
            </Box>
          )
    }

}

export default City