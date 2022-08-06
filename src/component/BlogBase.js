import React,{useState} from 'react';
import {Button} from 'react-bootstrap';
import {  FcLike  } from 'react-icons/fc';
import { FaComment ,  FaRegBookmark } from 'react-icons/fa';
import './BlogBase.css';
//import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
 
const BlogBase=(props)=>{
    
    const [isActive, setIsActive] = useState(false);
    const [buttonLike , setButtonLikes] = useState(100);
    const [button , setButton] = useState(3);
    
    const handleClickLikeButton = () => {
        setButtonLikes((linkk) => linkk + 1)
    }
    const handleClick = () => {
        setButton((comm) => comm + 1)
    }
    const click2=()=>{
        setIsActive(true);
    }
    return(
        <div className='containe'>
            <div className='headd'>
                <h3>{props.title}</h3>
                <p>{props.date}</p>
            </div>
            <div className='bodyy'>
                <p>{props.text}</p>
            </div>
            <div className='footerr'>
                <div className='foote'>
                    <FcLike onClick={handleClickLikeButton}/><p>{buttonLike}</p>
                    <br/>
                    <FaComment onClick={handleClick}/><p>{button}</p>

                </div>
                <FaRegBookmark
                
                color={isActive ? 'blue' : 'black'}  
                
              
            onClick={click2} />

            </div>

        </div>
    )
}
export default BlogBase;