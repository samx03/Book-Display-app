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
                setBook(res.data)
            }
        ).catch(
            err => console.log(err)
        )
    }, []);


    const LATEST_URL = "https://floran-book-api.herokuapp.com/latest"
    React.useEffect(() => {
        axios.get(LATEST_URL).then(
            (res) => {
                console.log(res.data)
                setlatestBook(res.data)
            }
        ).catch(
            err => console.log(err)
        )
    }, []);

    console.log("Latest Book", latestBook)

    if (book) {
        return (
            <div className='container mx-auto mt-5'>
                <div className="row">
                    <h1>Latest Books:</h1>
                    {
                        latestBook.map((value, index) => (
                            <LatestBook bookid={value.id} title={value.name}
                                img={value.cover}
                                content={value.description} />
                        ))
                    }
                </div>
                <div className="row">
                    <h1>Other Books:</h1>
                    {
                        book.map((value, index) => (
                            <BookCard bookid={value.id} title={value.name}
                                img={value.cover}
                                content={value.description} />
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
