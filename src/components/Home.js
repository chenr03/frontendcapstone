import React from 'react';
import image from '../backgroundFlag.png'




function Home() {



    return(
        <article>
            <div>
                <h1 style={{
                    paddingRight: '50px',
                    paddingLeft: '50px',
                    paddingTop: '50px',
                    paddingBottom: '50px',
                    backgroundColor: "#343a40" ,
                    fontSize: '3.7em',
                    color: 'whitesmoke',
                    textShadow: '4px 4px 5px #000000',
                    textAlign: 'center',
                    position: "relative",
                    height: "auto",
                    marginLeft: '40%',
                    marginRight: "40%",
                    marginTop: "15%",
                    borderRadius: '60%',
                    border: '5px double white'}}
                > Welcome to Community Disc </h1>

                <img src = {image}
                     alt ="discGolfFlag"
                     style ={{  width: '50px', marginLeft: '28%', marginRight: '80%', position: "absolute"}}/>
            </div>
        </article>
    );
}

export default Home;