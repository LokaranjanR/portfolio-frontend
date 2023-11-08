import React from "react";
export default function PortfolioItemDetail({ item }) {

    //Check if the item is defined before rendering
    if (!item) {
        return <div>Loading.......</div>;
    }
    return (
        <div className="portfolio-item-detail">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            {/*  Adding more details here */}
        </div>
    );

}