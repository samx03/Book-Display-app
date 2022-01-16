import React from 'react'

function LatestBook(props) {
    return (
        <a href={'/detail/' + props.bookid}>
            <div className='row latest-book'>
                <div className="col-lg-8">
                    <img className='bookCardImg' src={props.img} alt="Scenary" />
                </div>
                <div className="col-lg-4">
                    <div className="row">
                        <div className="col-12">
                            <h1>
                                {props.title}
                            </h1>
                        </div>
                        <div className="col-12">
                            <p>{props.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default LatestBook
