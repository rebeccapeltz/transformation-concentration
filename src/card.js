import React from "react";
import classnames from "classnames";
import "./card.scss";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled,logo }) => {
    // const logo = "https://res.cloudinary.com/picturecloud7/image/upload/h_500,w_500,c_pad,e_replace_color:blue/v1625159580/logo.png";
    const handleClick = () => {
        !isFlipped && !isDisabled && onClick(index);
    };

    return (
        <div
            className={classnames("card", {
                "is-flipped": isFlipped,
                "is-inactive": isInactive
            })}
            onClick={handleClick}
        >
            <div className="card-face card-font-face">
                <img src={logo} alt="logo" />
            </div>
            <div className="card-face card-back-face">
                <img src={card.image} alt="guessing image" />
            </div>
        </div>
    );
};

export default Card;
