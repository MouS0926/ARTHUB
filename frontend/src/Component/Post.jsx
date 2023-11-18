import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { RiFolderUserFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function Post({image,title,rating,publisher,_id,category}) {
  return (
    <div>
        <div class="container">
            <img src={image} alt="Avatar" class="image"  />
              <div class="middle">
                  <div class="text">
                      <b>{title}</b>
                       <p style={{ display: 'flex', alignItems: 'center' }}>
                          <AiOutlineStar style={{ marginRight: '8px' ,color:"#30c9c3"}} />
                          {rating}
                        </p>
                    </div>
                         
                     <p style={{ display: 'flex', alignItems: 'center' }}>
                         <RiFolderUserFill style={{ marginRight: '8px',color:"#30c9c3" }} />
                          {publisher}
                      </p>

                      <p style={{ display: 'flex', alignItems: 'center' }}>
                         {/* <RiFolderUserFill style={{ marginRight: '8px',color:"#30c9c3" }} /> */}
                        Category:  {category}
                      </p>
                      <Link to={`/post/${_id}`}>View</Link>
                    </div>
              </div>

        </div>
  )
}
