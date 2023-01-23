import React from 'react';
// import image from '../backgroundFlag.png'




function Home() {



    return(
        <article className = "article-circle">
            <div className = "circle"
                 style={{
                     backgroundColor: "#343a40",
                     justifyContent: 'center',
                     color: 'whitesmoke',
                     textShadow: '4px 4px 5px #000000',
                     borderRadius: '50%',
                     border: '5px double white'}}
            >
                <h1 className = "welcomeHeader"> Welcome to Community Disc </h1>


            </div>

            {/*<div className = "golfFlagLogo">*/}
            {/*     <img src = {image}*/}
            {/*     alt ="discGolfFlag"*/}
            {/*     style ={{  width: '50px', marginLeft: '50%', marginRight: '80%'}}/>*/}
            {/*</div>*/}
        </article>
    );
}

export default Home;