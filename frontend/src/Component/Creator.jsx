import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCreatorAction } from '../Redux/Creator/action'
import { Badge, Box, Button, Flex, Image, Spinner, Text, useColorModeValue } from '@chakra-ui/react'
import "./Creator.css"
import avatar from "../image/sample-avatar.jpg"
import { ViewIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

export default function Creator(){

    const dispatch=useDispatch()
    const allcreators=useSelector((store)=>store.creatorReducer.creators)
    const isLoading=useSelector((store)=>store.creatorReducer.isLoading)

    useEffect(()=>{
        dispatch(getCreatorAction)
    },[])

    // console.log(allcreators);
    return (
    <div>
        <div className="creatorSection">
            <Box className="heading" bg={useColorModeValue('blackAlpha.100', 'blackAlpha.500')}>
                Creators
            </Box>


{/* all profile card */}


    <div className="creatordiv">
    {
    
    isLoading?
    <Spinner size='xl' m={3} />
    :
    allcreators && allcreators.map((el)=>(
        <div key={el._id}>
            <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                p="3"
            >
         
            <Image
                    src={avatar}
                    alt={el.name}
                    borderRadius="full"
                    boxSize="70px" 
                    objectFit="cover" 
                    mx="auto" 
                />
            <Box p="4">
                <Flex align="baseline">

                <Text
                ml="2"
                textTransform="uppercase"
                fontSize="sm"
                fontWeight="bold"
                color="gray.500"
                mx="auto" 
                >
                {el.username}
                </Text>
                </Flex>

                <Text mt="2" fontSize="xl" fontWeight="semibold" lineHeight="short">
                {el.email}
                </Text>
            </Box>

                <Flex justify="center" p="2">

        <Link to={`/creators/${el._id}`}>
                 <Button colorScheme="teal" size='sm'>
                <ViewIcon w={5} h={5} color="white.500" /> &nbsp;View
                </Button>
        </Link>
               
        </Flex>
        </Box>
        </div>

 ))
    
}
    </div>

      


        </div>
          

        </div>
    )
}



