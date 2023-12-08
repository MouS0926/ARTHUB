import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { IoChatboxOutline } from "react-icons/io5";
import "./Creator.css"
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function CreatorsPost({_id,title,image,publisher,category,likecount,comments,username}) {
  return (
  


   

        <Card maxW='md'>
        <CardHeader>
            <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                

                <Box>
                <Heading size='sm'>{title}</Heading>
                <Text>Category: {category}</Text>
                </Box>
            </Flex>
            <IconButton
                variant='ghost'
                colorScheme='gray'
                aria-label='See menu'
            
            />
            </Flex>
        </CardHeader>
        
        <Image
            objectFit='cover'
            src={image}
            alt='Post'
        />

        <CardFooter
           
            justify='space-between'
            flexWrap='wrap'
            sx={{
            '& > button': {
                minW: '136px',
            },
            }}
        >
            <Button flex='1' variant='ghost' leftIcon={<AiOutlineLike />}>
            {!likecount?0:likecount}
            </Button>
            <Button flex='1' variant='ghost' leftIcon={<IoChatboxOutline />}>
          {comments.length}
            </Button>

            <Link to={`/post/${_id}`}>
            <Button flex='1' variant='ghost' leftIcon={<FaEye />}></Button>
            </Link>
            
        
        </CardFooter>
        </Card>




  )
}
