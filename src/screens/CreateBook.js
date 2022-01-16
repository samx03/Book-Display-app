import React, { useState } from 'react';
import axios from "axios"
import { useHistory } from 'react-router-dom'


function CreateBook() {

    const history = useHistory("")

    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");
    const [pages, setPages] = useState("");
    const [description, setDescription] = useState("");
    const [cover, setImage] = useState(null);

    const url = "https://floran-book-api.herokuapp.com/"
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    let publishBook = async () => {
        let formData = new FormData()

        if (name !== "" && description !== "" && cover !== null && author !== "" && price !== "" && pages !== null) {


            formData.append("name", name)
            formData.append("description", description)
            formData.append("cover", cover)
            formData.append("author", author)
            formData.append("price", price)
            formData.append("pages", pages)

            await axios.post(url, formData, config).then(
                (res) => {
                    console.log(res)

                    setImage(null)
                    setName("")
                    setAuthor("")
                    setPrice("")
                    setPages("")
                    setDescription("")

                    history.push("/")
                }
            ).catch(
                err => console.log("Error hai",err)
            )
        } else {
            alert("Fill the data properly.")
        }
    }


    
    return (
        <>
            <div className='container mx-auto mt-5 create-container'>
                <h1 className='text-center m-5'>Add Your Own Book!</h1>
                
                <div className="row mb-2">
                    <h4>Name</h4>
                </div>
                <div className="col-12 mb-3">
                    <input type="text"
                        placeholder='Name of the book goes here'
                        className='inputField form-control'
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="row mb-2">
                    <h4>Author</h4>
                </div>
                <div className="col-12 mb-3">
                    <input type="text"
                        placeholder='Author of the book goes here'
                        className='inputField form-control'
                        required
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)} />
                </div>

                <div className="row mb-2">
                    <h4>Description</h4>
                </div>
                <div className="col-12 mb-3">
                    <textarea placeholder='Write your description here...'
                        required
                        value={description}
                        className='form-control'
                        onChange={(e) => setDescription(e.target.value)}>

                    </textarea>
                </div>
                
                <div className="row mb-2">
                    <h4>Price</h4>
                </div>
                <div className="col-12 mb-3">
                    <input type="number"
                        placeholder='Write price of the book here'
                        className='inputField form-control'
                        required
                        value={price}
                        onChange={(e) => setPrice(e.target.value)} />
                </div>
                
                <div className="row mb-2">
                    <h4>Pages</h4>
                </div>
                <div className="col-12 mb-3">
                    <input type="number"
                        placeholder='Number of pages in the book goes here'
                        className='inputField form-control'
                        required
                        value={pages}
                        onChange={(e) => setPages(e.target.value)} />
                </div>

                <div className="row">
                    <div className="col-12 mb-2">
                        <h4>Cover</h4>
                    </div>
                </div>
                <div className="col-12 mb-3">
                    <input type="file"
                        accept="image/*"
                        required
                        className='form-control inputField'
                        onChange={(e) => setImage(e.target.files[0])} />
                </div>

                <div className="float-end">
                    <button type="button" onClick={publishBook} className="btn btn-outline-dark mb-5">Publish</button>
                </div>
            </div>
        </>
    )
}

export default CreateBook
