import { Button, Input, HStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const InputSearch = ({ setQuery }) => {

    const [inputValue, setInputValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue) {
            setQuery(inputValue);
            setInputValue('')
        }
    }
    
  return (
            <form onSubmit={ handleSubmit }>
                <HStack
                mx='auto'
                w={['90%', '80%', '60%', '50%']}
                my='10px'
                >
                    
                        <Input
                        placeholder='Paris, New York, Buenos Aires, etc..'
                        value={inputValue}
                        onChange={(e) => {return setInputValue(e.target.value)} }
                        variant='filled'
                        h='50px'
                        />
                        {/* <Button
                        type='submit'
                        h='50px'
                        variant='filled'
                        >submit</Button> */}
                </HStack>
            </form>
  )
}

export default InputSearch