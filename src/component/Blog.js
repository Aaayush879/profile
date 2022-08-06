import React from 'react';
import BlogBase from './BlogBase.js';

const Blog=()=>{
    return(
        <div>
            <BlogBase title="Name Surname"  date='August 17 ' text='Pumping lemma for context free language (CFL) is used to prove that a language is not a Context free language'
            like= {250} comment='40'/>
            <br/>
            <BlogBase title="Name Surname"  date='August 17 ' text='Pumping lemma for context free language (CFL) is used to prove that a language is not a Context free language'
            like='250' comment='40'/>
            <br/>
            <BlogBase title="Name Surname"  date='August 17 ' text='Pumping lemma for context free language (CFL) is used to prove that a language is not a Context free language'
            like='250' comment='40'/>
            <br/>
            
        </div>
    )
}
export default Blog;