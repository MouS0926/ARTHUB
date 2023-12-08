import axios from "axios"
import { CREATOR_ERROR, CREATOR_POST_ERROR, CREATOR_POST_REQUEST, CREATOR_POST_SUCCESS, CREATOR_REQUEST, CREATOR_SUCCESS } from "./actionType"

const apiURL=`https://arthub-be.onrender.com`


export const getCreatorAction=(dispatch)=>{

dispatch({type:CREATOR_REQUEST})

    axios.get(`${apiURL}/users/creators`)
    .then((res)=>{
        dispatch({type:CREATOR_SUCCESS,payload:res.data})
        // console.log(res.data);
    })
    .catch((err)=>{
        dispatch({type:CREATOR_ERROR})
    })

} 


export const getCreatorPostAction=(id)=>(dispatch)=>{

    dispatch({type:CREATOR_POST_REQUEST})
    
        axios.get(`${apiURL}/users/creators/post/${id}`)
        .then((res)=>{
            dispatch({type:CREATOR_POST_SUCCESS,payload:res.data})
            // console.log(res.data);
        })
        .catch((err)=>{
            dispatch({type:CREATOR_POST_ERROR})
        })
    
    } 