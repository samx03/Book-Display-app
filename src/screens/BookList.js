import axios from 'axios';
import React, { useState } from 'react'
import BookCard from '../component/BookCard'
import LatestBook from '../component/LatestBook'

function BookList() {

    const [book, setBook] = useState("")
    const [latestBook, setlatestBook] = useState("")



    const BASE_URL = "https://floran-book-api.herokuapp.com/"
    React.useEffect(() => {
        axios.get(BASE_URL).then(
            (res) => {
                console.log(res.data)
                setBook(res.data.reverse())
                setlatestBook(res.data.shift())
            }
        ).catch(
            err => console.log(err)
        )
    }, []);

    console.log("Latest Book",latestBook)

    if (book) {
        return (
            <div className='container mx-auto mt-5'>
                <h1>Latest Book:</h1>
                <LatestBook bookid={latestBook.id} title={latestBook.name} content={latestBook.description} img={latestBook.cover} />
                <div className="row">
                    <h1>Other Books:</h1>
                   {
                       book.map((value, index) => (
                           <BookCard bookid={value.id} title={value.name}
                           img={value.cover}
                           content={value.description}/>
                       ))
                   }
                </div>
            </div>
        );
    } else {
        return <>
            <div className='loader'>
                <img src="https://c.tenor.com/FIzWAbQcjpYAAAAC/loading-splash.gif" alt="" />
            </div>
        </>
    }
}

export default BookList
