import React,{useState} from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header=()=>{
    const [isActive, setIsActive] = useState(false);
    const [isActivee, setIsActivee] = useState(false);
    const navigate = useNavigate();
    const click1=()=>{
        navigate('/');
        setIsActive(true);
        setIsActivee(false);

    }
    const click2=()=>{
        navigate('/blog');
        setIsActivee(true);
        setIsActive(false);
        

    }
    return(
        <div className='my'>
            <div 
            style={{
                backgroundColor: isActive ? 'salmon' : '',
                color: isActive ? 'white' : '',
              }}
            onClick={click1} className='my1'>
                <h3>Register Event</h3>
            </div>
            <div 
            style={{
                backgroundColor: isActivee ? 'salmon' : '',
                color: isActivee ? 'white' : '',
              }}
            onClick={click2} className='my1'>
                <h3>My blog</h3>
            </div>
            

        </div>
    )
}
export default Header;