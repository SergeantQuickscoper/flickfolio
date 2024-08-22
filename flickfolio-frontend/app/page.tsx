import Image from "next/image";
import { EmblaCarousel } from "@/components/EmblaCarousel";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="">
      <div className="max-h-screen relative h-screen object-none">
        <div className="-z-100 absolute top-0 left-0 object-none max-h-screen h-screen">
          <EmblaCarousel className="object-none" />
        </div>
        <div className="z-100 relative max-h-full h-full flex flex-col">
          <div className="pt-8 pl-12">
            <Logo/>
          </div>
          <div className="text-white flex items-center h-full mt relative">
            <div className="absolute flex flex-col items-center top-1/4 left-0 right-0">
                <h1 className="text-6xl font-bold">Your Movie Lists, Your Way.</h1>
                <h2 className="text-xl font-extralight mt-5">Curate Your Perfect Movie Lists, Share Your Favorites, and Discover New Must-Sees</h2>
                <Button className="mt-36 bg-secondaryBackground rounded-full px-10 py-9"><p className="text-2xl">Get Started</p></Button>
            </div>
            
            
          </div>
        </div>
      </div>
      <div className="min-h-screen h-fit z-100 relative bg-secondaryBackground flex flex-col justify-items-center items-center justify-center">
          <div className="flex flex-row justify-center mt-24">
              <div className="mr-24 mt-8">
                <h1 className=" text-5xl font-extrabold w-96 leading-normal">Find your Favorite Movies</h1>
                <p className="w-96 mt-8">Whether you’re into heart-pounding thrillers, 
                  heartwarming dramas, or side-splitting comedies. 
                  Dive into our extensive collection, where you can 
                  find movies you already love. 
                </p>
              </div>
              <img className="w-[610px] rounded-3xl ml-24" src="3.jpg"/>
          </div>
          <hr className="w-[1220px] my-24 border-black "/>
          <div className="flex flex-row justify-center mb-24">
              <img className="w-[610px] rounded-3xl mr-24" src="4.jpg"/>
              <div className="ml-24 mt-2">
                <h1 className=" text-5xl font-extrabold w-96 leading-normal text-white">Discover New Favorites</h1>
                <p className="w-96 mt-8 text-white">At FlickFolio, discovering new movies is an adventure waiting to unfold! 
                   Immerse yourself in a vast library of films spanning genres, eras, and styles.
                   Our platform makes it easy to uncover hidden gems and fresh releases tailored 
                   to your interests. 
                </p>
              </div>
              
          </div>
      </div>
      <div className="h-screen z-100 relative bg-primaryBackground flex flex-col justify-center items-center">
        <div className="flex flex-row">
            <div className="ml-48 flex flex-col text-white mt-[60px]">
                <h1 className="text-5xl w-[500px]">Share Your Movies With The World. </h1>
                <p className="w-[540px] mt-16 font-thin text-lg">Create custom collections that reflect your personal tastes, whether it's a list of must-see classics, 
                  hidden gems, or the ultimate binge-watch lineup. Once you've curated your perfect lists, share them with friends, family, or 
                  the FlickFolio community. Discover what others are watching and get inspired by their picks. It’s all about connecting through 
                  cinema and celebrating your unique film journey together. Start making and sharing your movie lists today!</p>
            </div>
            <img src="2.jpg" className="w-[850px] ml-28 rounded-3xl"/>
        </div>
      </div>
      <div className="h-96 bg-secondaryBackground relative z-100 ">
        <div className="flex flex-row justify-center h-full w-full pt-16">
          <div>
              <h1 className="text-xl text-white font-bold">A website by Don Chacko</h1>
              <div className="flex flex-row mt-2">
                  <img src="Instagram.svg"/>
                  <img src="GitHub.svg" className="px-4"/>
                  <img src="Linkedin.svg"/>
              </div>

          </div>
          <div className="w-[1px] bg-white h-72 mx-48">

          </div>
          <div>
              <h1 className="text-xl text-white font-bold">Movies</h1>
              <div className=" font-light pt-4 text-white">
                  <h2 className="py-4">Top Rated</h2>
                  <h2 className="py-4">Trending</h2>
                  <h2 className="py-4">In Theaters</h2>
                  <h2 className="py-4">Movie Search</h2>
              </div>
          </div>
          <div className="w-[1px] bg-white h-72 mx-48">

          </div>
          <div>
              <h1 className="text-xl text-white font-bold">Social</h1>
              <div className=" font-light pt-4 text-white">
                  <h2 className="py-4">Top Rated</h2>
                  <h2 className="py-4">Trending</h2>
                  <h2 className="py-4">In Theaters</h2>
                  <h2 className="py-4">Movie Search</h2>
              </div>
          </div>
        </div>
        
      </div>
      
    </main>
  );
}
