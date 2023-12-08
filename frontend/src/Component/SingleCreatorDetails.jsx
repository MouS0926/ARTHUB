import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCreatorPostAction } from '../Redux/Creator/action'
import "./Creator.css"
import { Box, Heading, Image, Spinner, useColorModeValue } from '@chakra-ui/react'
import CreatorsPost from './CreatorsPost'

export default function SingleCreatorDetails() {

    const {id}=useParams()
    const dispatch=useDispatch()

    const userpost=useSelector((store)=>store.creatorReducer.userpost)
    const isLoading=useSelector((store)=>store.creatorReducer.isDeatilsLoading)
    
    console.log(userpost);
    useEffect(()=>{
        dispatch(getCreatorPostAction(id))
    },[id])


  return (
     <>

        <div className="creatorSection">
            <Box className="heading" bg={useColorModeValue('blackAlpha.100', 'blackAlpha.500')}>
                Creators Post
            </Box>
           

{/* all-posts */}

<div className="creatordiv">
    {
    
    isLoading?
    <Spinner size='xl' m={3} />
    :
     
        userpost.length==0?
        <Heading as='h3' size='lg'>No Post added yet</Heading>
      :
      
         userpost && userpost.map((el)=>(
      
        <CreatorsPost  key={el._id} {...el}  />
       

 ))
    
}
    </div>



    </div>



 </>
)
}
