import React from 'react';
import Footer from './Footer';
import '../App.css'

const Card = (props) => {
    return (
        <div className={props.displayCss ? "container" : ""}>
            <div className="col-md-3 col-sm-6">
                <figure className="card " data-name={props.first_name}>
                    <img src={props.avatar} className="card-img-top" alt="Derrek Gaskin" />
                    <div className="card-body">
                        <h2 className="card-title">{props.first_name} {props.last_name}</h2>
                        <address className="card-text">{props.email}</address>
                    </div>
                    <button className="btn btn-primary">Greeting <span aria-label="greeting" role="img">  ✋ </span></button>
                </figure>
                <Footer footerMessage={props.footerMessage} />
            </div>
        </div>
    )
}

export default Card;