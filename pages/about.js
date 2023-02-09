// this is going to be our /about route
// import css module

import styles from "../styles/About.module.css"

export default function About(){
    return(
        <div>
            <h1>About me</h1>
            {/*more than one sytle can use string interpolation*/}
            <p className ={styles.coolColor}>I am now a super cool software engineer.</p>
        
        
            <p>{`don't use apostophes unless they are in backticks`}</p>
        
        <h2>I'm a different color</h2>
        <style jsx>{`
            h2{
                color:purple; 
            }
        `}</style>

        {/* two ways of rendering images: stored locally and a url */}
        <img
            src='/next.svg'
            alt="logo of my nex fav framework"
        />

        {/*getting image from outside source*/}
        <img
            src="https://placekitten.com/300/600"
            alt="kitten"
        />
        
        </div>
    )
}

