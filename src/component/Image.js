import React, { Component } from 'react';
import './Image.css';

import { IoMdCreate  } from 'react-icons/io';

export class Image extends Component {
  state={
    profileImg:''
  }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };
  
	render() {
    const { profileImg} = this.state
		return (
			<div className="page">
				<div className="container">
					<div className="img-holder">
						<img src={profileImg} alt="" id="img" className="img" />
					</div>
                    <div className="label">
                        <label className="image-upload" htmlFor="input">
						<i className="material-icons"><IoMdCreate/></i>
						</label>
                    </div>
                    <input type="file" accept="image/*" name="image-upload" id="input" className='inputt' onChange={this.imageHandler} />
					
					
          
				</div>
                <h5>Name:surname</h5>
                <p>This is about profile page</p>
			</div>
		);
	}
}
export default Image;