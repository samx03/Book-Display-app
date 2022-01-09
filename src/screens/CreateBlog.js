import React, { useState } from 'react';
import axios from "axios"
import { useHistory } from 'react-router-dom'


function CreateBlog() {

    const history = useHistory("")

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [images, setImage] = useState(null);

    const url = "https://floran-blog-api.herokuapp.com/"
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    let publishBlog = async () => {
        let formData = new FormData()

        if (title !== "" && content !== "" && images !== null) {
          

            formData.append("title", title)
            formData.append("description", content)
            formData.append("image", images)

            await axios.post(url,formData,config).then(
                (res) => {
                  console.log(res)

                  setImage(null)
                  setTitle("")
                  setContent("")
                    
                  history.push("/")
                }
              ).catch(
                err => console.log(err)
              )
        } else {
            alert("Fill the data properly.")
        }
    }

    return (
        <div className='container mx-auto mt-5'>
            <div className="row">
                <div className="float-end">
                    <button type="button" onClick={publishBlog} class="btn btn-outline-dark">Publish</button>
                </div>
                <div className="col-12">
                    <h4>Image</h4>
                </div>
            </div>
            <div className="col-12">
                <input type="file"
                    accept="image/*"
                    className='form-control inputField'
                    onChange={(e) => setImage(e.target.files[0])} />
            </div>
            <div className="row">
                <h4>Title</h4>
            </div>
            <div className="col-12">
                <input type="text"
                    placeholder='Write title here'
                    className='inputField'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="row">
                <h4>Content</h4>
            </div>
            <div className="col-12">
                <textarea id='blog' placeholder='Write your content here...'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}>

                </textarea>
            </div>
        </div>
    )
}

export default CreateBlog
