'use client'

import {motion} from "framer-motion"

const AnimatedSectionHome2 = () => {
    return(
        <div  className="h-screen z-100 relative bg-primaryBackground flex flex-col justify-center items-center">
        <motion.div initial={{opacity: 0}} whileInView={{opacity:1}} transition={{ duration: 0.5 }} viewport={{once: true}} className="flex flex-row">
            <div  className="ml-48 flex flex-col text-white mt-[60px]">
                <h1 className="text-5xl w-[500px]">Share Your Movies With The World. </h1>
                <p className="w-[540px] mt-16 font-thin text-lg">Create custom collections that reflect your personal tastes, whether it's a list of must-see classics, 
                  hidden gems, or the ultimate binge-watch lineup. Once you've curated your perfect lists, share them with friends, family, or 
                  the FlickFolio community. Discover what others are watching and get inspired by their picks. It’s all about connecting through 
                  cinema and celebrating your unique film journey together. Start making and sharing your movie lists today!</p>
            </div>
            <img src="2.jpg" className="w-[850px] ml-28 rounded-3xl"/>
        </motion.div>
        </div>
    )
}

export default AnimatedSectionHome2;