import React, { useState } from "react";

export default function LikeButton() {
    let [isLiked, setIsLiked] = useState(false);

    let toggleLike = () => {
        setIsLiked(!isLiked);
    };

    return (
        <div>
            <p onClick={toggleLike}>
                {isLiked ? (
                    <i className="fa-solid fa-heart" style={{ color: "#e12d84" }}></i>
                ) : (
                    <i className="fa-regular fa-heart"></i>
                )}
            </p>
        </div>
    );
}
