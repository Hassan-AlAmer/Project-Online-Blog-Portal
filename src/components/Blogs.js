import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Row} from 'react-bootstrap';
import BlogsData from '../blogs'
import { setBlogs, removeBlog } from "../actions/blogsActions";
import Blogslist from './Blogslist';

function Blogs() {
    const blogs = useSelector((state) => state.blogs);
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(setBlogs(BlogsData));
      }, []);

const handleDelete =(id)=>{
        dispatch(removeBlog(id));      
    }
   
    return (
        <Row>
            <Blogslist blogs={blogs} handleDelete={handleDelete}/>
        </Row>
    )
}

export default Blogs
