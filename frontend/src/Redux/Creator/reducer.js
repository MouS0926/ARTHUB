import { CREATOR_ERROR, CREATOR_POST_ERROR, CREATOR_POST_REQUEST, CREATOR_POST_SUCCESS, CREATOR_REQUEST, CREATOR_SUCCESS } from "./actionType"

const initialState={
    isLoading:false,
    isError: false,
    creators:[],
    
    isDeatilsLoading:false,
    isDetailsError:false,
    userpost:[]
}

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){


        case CREATOR_REQUEST:{
            return{
                ...state,isLoading:true
            }
        }
        case CREATOR_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                creators:payload
            }
        }
        case CREATOR_ERROR:{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }

        case CREATOR_POST_REQUEST:{
            return{
                ...state,
                isDeatilsLoading:true
            }
        }
        case CREATOR_POST_SUCCESS:{
            return{
                ...state,
                isDeatilsLoading:false,
                userpost:payload
            }
        }
        case CREATOR_POST_ERROR:{
            return{
                ...state,
                isDeatilsLoading:false,
                isDetailsError:true
            }
        }

        default:{
            return state
        }



    }


}