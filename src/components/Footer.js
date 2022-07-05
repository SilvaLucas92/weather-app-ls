import { Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { AiFillHeart } from 'react-icons/ai'

const Footer = () => {
  return (
    <Flex
    justifyContent='center'
    alignItems='center'
    w='100%'
    m='5px'
    position='fixed'
    bottom='0'
    >
        <Text
        alignItems='center'
        color='gray.500'
        >
            Made with   
            <Icon
            textAlign='center'
            m={2}
            color='red'
            >
                <AiFillHeart 
                size='20px'
                />
            </Icon>
            by Lucas Silva
        </Text>

    </Flex>
    )
}

export default Footer