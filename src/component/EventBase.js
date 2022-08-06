import React,{useState} from 'react';
import {Button} from 'react-bootstrap';
import './EventBase.css';
 
const EventBase=(props)=>{
    const [isActive, setIsActive] = useState(false);
    
    const onSubmitt=()=>{
        setIsActive(true);
    }
    return(
        <div className='containerr'>
            <div className='head'>
                <h3>{props.title}</h3>
                <div className='head1'>
                    <p>{props.timee}</p>
                    <br/>
                    <p>{props.date}</p>

                </div>
            </div>
            <div className='body'>
                <p>{props.text}</p>
            </div>
            <div className='footer'>
                <p>Mode:{props.mode}</p>
                <Button className='btn btn-light btn-outline-success' onClick={onSubmitt} >{isActive ? 'registed' : 'register'}</Button>

            </div>

        </div>
    )
}
export default EventBase;