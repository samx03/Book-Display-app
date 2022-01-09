import axios from 'axios';
import React, { useState } from 'react'
import BlogCard from '../component/BlogCard'
import LatestBlog from '../component/LatestBlog'

function BlogList() {

    const [blog, setBlog] = useState("")
    const [latestBlog, setlatestBlog] = useState("")

    // const article = [
    //     {
    //         title: 'My first Dynamic Card',
    //         content: 'jyviuviuiububiu',
    //         img: 'https://tse4.mm.bing.net/th?id=OIP.5iMThpltwKo127uM2r1UsAHaDt&pid=Api&P=0&w=325&h=162',
    //     },
    //     {
    //         title: 'My second Dynamic Card',
    //         content: 'jyviuviuiububiu',
    //         img: 'https://tse4.mm.bing.net/th?id=OIP.5iMThpltwKo127uM2r1UsAHaDt&pid=Api&P=0&w=325&h=162',
    //     }
    // ];



    const BASE_URL = "https://floran-blog-api.herokuapp.com/"
    React.useEffect(() => {
        axios.get(BASE_URL).then(
            (res) => {
                console.log(res.data)
                setBlog(res.data.reverse())
                setlatestBlog(res.data.shift())
            }
        ).catch(
            err => console.log(err)
        )
    }, []);

    console.log("Latest Blog",latestBlog)

    if (blog) {
        return (
            <div className='container mx-auto mt-5'>
                <LatestBlog blogid={latestBlog.id} title={latestBlog.title} content={latestBlog.description} img={latestBlog.image} />
                <div className="row">
                   {
                       blog.map((value, index) => (
                           <BlogCard blogid={value.id} title={value.title}
                           img={value.image}
                           content={value.description}/>
                       ))
                   }
                </div>
            </div>
        );
    } else {
        return "Loading.."
    }
}

export default BlogList
