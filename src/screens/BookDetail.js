import React, { Component } from 'react'
import axios from 'axios'

export class BookDetail extends Component {


    state = {
        bookDetail: ""
    }

    componentDidMount() {
        const { id } = this.props.match.params
        const url = `https://floran-book-api.herokuapp.com/${id}`

        const fetchBookDetail = () => {
            axios.get(url).then(
                (res) => {
                    this.setState({
                        bookDetail: res.data
                    })
                }
            ).catch(
                err => console.log(err)
            )
        }

        fetchBookDetail()
    }

    render() {

        let bookDetail = this.state.bookDetail

        if (!bookDetail) {
            return <div className='loader'>
                <img src="https://c.tenor.com/FIzWAbQcjpYAAAAC/loading-splash.gif" alt="" />
            </div>
        } else {
            return (
                <div>
                    <div className="container mx-auto mt-5">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className='detailHeader'>
                                    {bookDetail.title}
                                </h1>
                            </div>
                            <div className="col-12 text-center">
                                <img src={bookDetail.cover} alt="Book" className='detailImg' />
                            </div>
                            <div className="col-12">
                                <p className='detailParagraph'>
                                    <b> Description: </b>{bookDetail.description}
                                </p>
                            </div>
                            <div className="col-12">
                                <p className='detailParagraph'>
                                    <b> Author: </b>{bookDetail.author}
                                </p>
                            </div>
                            <div className="col-12">
                                <p className='detailParagraph'>
                                    <b> Price: </b>&#8377;{bookDetail.price}
                                </p>
                            </div>
                            <div className="col-12">
                                <p className='detailParagraph'>
                                    <b> Pages: </b>{bookDetail.pages}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

    }
}

export default BookDetail
