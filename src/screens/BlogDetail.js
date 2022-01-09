import React, { Component } from 'react'
import axios from 'axios'

export class BlogDetail extends Component {


    // test = () => {
    //     //GET     => To fetch the data from api
    //     //POST    => To give data to api
    //     //PATCH   => To change the already existing data
    //     //PUT     => To either give data or change the already existing data
    //     //DELETE  => To delete the data

    //     axios.get("url").then().catch()

    // }


    state = {
        blogDetail: ""
    }

    componentDidMount() {
        const { id } = this.props.match.params
        const url = `https://floran-blog-api.herokuapp.com/${id}`

        const fetchBlogDetail = () => {
            axios.get(url).then(
                (res) => {
                    this.setState({
                        blogDetail: res.data
                    })
                }
            ).catch(
                err => console.log(err)
            )
        }

        fetchBlogDetail()
    }

    render() {

        let blogDetail = this.state.blogDetail

        if (!blogDetail) {
            return <h1>Loading......</h1>
        } else {
            return (
                <div>
                    <div className="container mx-auto mt-5">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className='detailHeader'>
                                    {blogDetail.title}
                                </h1>
                            </div>
                            <div className="col-12 text-center">
                                <img src={blogDetail.image} alt="Image" className='detailImg' />
                            </div>
                            <div className="col-12">
                                <p className='detailParagraph'>
                                    {blogDetail.description}
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

    }
}

export default BlogDetail
