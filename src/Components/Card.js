import React from "react";
import "../scss/card.scss";

class Card extends React.Component {

    render(){
        return (
            <div id="f1_container" >
                <div id="f1_card" className="shadow">
                    <div className="front face">
                        <img src={this.props.img} className={this.props.imgClassName} />
                    </div>

                    <div className="back face center">
                        <p>{this.props.content}</p>
                    </div>
                </div>
            </div>
        );
    }
};

export default Card;
