// SinglePost.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Heading, Image, Skeleton, Text, Textarea, useColorModeValue } from '@chakra-ui/react';
import axios from 'axios';
import { AiOutlineStar } from 'react-icons/ai';
import { RiFolderUserFill } from 'react-icons/ri';
import { BiChat, BiLike, BiShare, BiSolidLike } from "react-icons/bi";
import "./SinglePost.css"
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import { FaUser } from "react-icons/fa";

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [newComment, setNewComment] = useState('');

  const token = useSelector((store) => store.Loginreducer.token);
 


  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://arthub-be.onrender.com/posts/post/${id}`);
        setPost(response.data);
        setIsLoading(false);
        console.log(response);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id,isLiked]);



  const handleLikeClick = async () => {
    try {
      const response = await axios.post(`https://arthub-be.onrender.com/posts/like/${id}`, null, {
        headers: {
          Authorization: `Bearer ${token}`, // Replace with your actual token
        },
      });

      if (response.data.msg == 'Post liked') {
        setIsLiked(true);
      } else {
        setIsLiked(false);
      }
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleCommentSubmit = async () => {
    try {
      const response = await axios.post(
        `https://arthub-be.onrender.com/posts/comment/${id}`,
        { comment: newComment },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Replace with your actual token
          },
        }
      );

      if (response.data.msg === 'Comment added successfully') {
        // Update local state with the new comment
        setPost((prevPost) => ({
          ...prevPost,
          comments: [...prevPost.comments, response.data.comments.pop()],
        }));
        setNewComment(''); // Clear the comment input
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <div>
      <Box className="heading" bg={useColorModeValue('blackAlpha.100', 'blackAlpha.500')}>
        Post Details
      </Box>
      {isLoading ? (
        <Skeleton height="200px" />
      ) : (
        post && (
          <>
          <div className="single-container">
          
       <Card maxW='xll'>
  <CardHeader>
   
  </CardHeader>

  <Image
    objectFit='cover'
    src={post.image}
    alt='ARTHUB'
  />
  <CardBody>
  <Heading as='h4' size='md'>
    {post.title} &nbsp; &nbsp;Category: {post.category}
  </Heading>
  </CardBody>
  <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        minW: '136px',
      },
    }}
  >
    <Button flex="1" variant="ghost" 
    leftIcon={isLiked ? <BiSolidLike /> : <BiLike />}
    onClick={handleLikeClick} >
        {post.likecount}
   </Button>

    <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
      Comments
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<RiFolderUserFill />}>
    {post.publisher}
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<AiOutlineStar />}>
    {post.rating}
    </Button>
  </CardFooter>
</Card>

{token && (
                <Box mt="4">
                <Heading as="h3" size="md" mb="2">
                  Add a Comment
                </Heading>
                <Textarea
                  placeholder="Write your comment here..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <Button mt="2" onClick={handleCommentSubmit}>
                  Submit Comment
                </Button>
              </Box>
              )}


<Box mt="4">
  <Heading as="h3" size="md" mb="2">
    Comments
  </Heading>
  {post.comments.length == 0 ? (
    <Text>No comments yet.</Text>
  ) : (
    post.comments.map((comment) => (
      <Box
        key={comment._id}
        borderWidth="1px"
        p="3"
        rounded="md"
        mb="2"
        display="flex"
        alignItems=""
      >
        <Box mr="2">
          <FaUser />
        </Box>
        <Box flex="1">
          <Text fontWeight="bold">
            {comment.username}
          </Text>
          <Text>
            {comment.comment}
          </Text>
        </Box>
      </Box>
    ))
  )}
</Box>



          </div>







</>

        )
      )}
    </div>
  );
};

export default SinglePost;
