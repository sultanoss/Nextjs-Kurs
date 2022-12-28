import classes from "./hero.module.css"
import Image from "next/image";

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/mypic22.jpg"
                    alt="An image shoming Radwan"
                    width={300}
                    height={300} />
            </div>
            <h1>Hi i&apos;m Sultan</h1>
            <p>I am a Frontend Developer</p>
        </section>
    )
}

export default Hero;