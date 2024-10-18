/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
'use client'
import {motion} from "framer-motion"

const AnimatedSectionHome1 = () => {
    return(
    <div className="min-h-screen h-fit z-100 relative bg-secondaryBackground flex flex-col justify-items-center items-center justify-center">
          <motion.div initial={{opacity: 0}} whileInView={{opacity:1}} transition={{ duration: 0.5 }} viewport={{once: true}} className="flex flex-row justify-center mt-24">
              <div className="mr-24 mt-8">
                <h1 className=" text-5xl font-extrabold w-96 leading-normal">Find your Favorite Movies</h1>
                <p className="w-96 mt-8">Whether you’re into heart-pounding thrillers, 
                  heartwarming dramas, or side-splitting comedies. 
                  Dive into our extensive collection, where you can 
                  find movies you already love. 
                </p>
              </div>
              <img className="w-[610px] rounded-3xl ml-24" src="3.jpg"/>
          </motion.div>
          <motion.div initial={{opacity: 0}} transition={{ duration: 0.7 }} whileInView={{opacity:1}}>
            <hr className="w-[1220px] my-24 border-black "/>
          </motion.div>
          <motion.div initial={{opacity: 0}} whileInView={{opacity:1}} transition={{duration: 0.7}} viewport={{once: true}} className="flex flex-row justify-center mb-24">
              <img className="w-[610px] rounded-3xl mr-24" src="4.jpg"/>
              <div className="ml-24 mt-2">
                <h1 className=" text-5xl font-extrabold w-96 leading-normal text-white">Discover New Favorites</h1>
                <p className="w-96 mt-8 text-white">At FlickFolio, discovering new movies is an adventure waiting to unfold! 
                   Immerse yourself in a vast library of films spanning genres, eras, and styles.
                   Our platform makes it easy to uncover hidden gems and fresh releases tailored 
                   to your interests. 
                </p>
              </div>
              
          </motion.div>
      </div>
    )
}

export default AnimatedSectionHome1;