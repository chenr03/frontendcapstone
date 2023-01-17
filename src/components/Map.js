import React from 'react';


const Map = (props) => {
    console.log('Props from Map Comp: ', props)
    const addressParam = [props.name, props.address].join(" ").split(' ').join('+');

    // const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

    return (
        <iframe
            title="Google Maps Business About Page"
            width="600"
            height="450"
            // style="border:0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAdBAS4-749z4VwbdU9cmgucC7s5t1jrhc&q=${addressParam}`}>
        </iframe>
    )};

export default Map;