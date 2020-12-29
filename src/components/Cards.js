import React from 'react';
import './Cards.css';
import CardItem from './Carditem';

function Cards() {
    return (
        <div className="cards">
            <h1>Same menu as above but more stylish</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <CardItem 
                        src="images/img-1.jpg"
                        text="Learn some things about me! You can see it as a Personal Letter or just a brief introduction"
                        label="Who?"
                        path="/who"
                        />
                        <CardItem 
                        src="images/img-2.jpg"
                        text="Take a look at what i've done. At the moment it's not much though :("
                        label="What?"
                        path="/what"
                        />
                        <CardItem 
                        src="images/img-3.jpg"
                        text="Here you will find my CV, with Educations, Work Experience and Merits"
                        label="Why?"
                        path="/why"
                        />
                        <CardItem 
                        src="images/img-4.jpg"
                        text="Contact Information"
                        label="How"
                        path="/how"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards