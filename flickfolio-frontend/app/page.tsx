/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { EmblaCarousel } from "@/components/EmblaCarousel";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button"
import Footer from "@/components/Footer";
import AnimatedSectionHome1 from "@/components/AnimatedSectionHome1";
import { redirect } from 'next/navigation'
import Link from "next/link";
import AnimatedSectionHome2 from "@/components/AnimartedSectionHome2";

export default async function Home() {
  let slideshowArray:any = []
  await fetch('http://localhost:8080/images/nowplaying', { cache: 'no-store' })
  .then((res) => res.json())
  .then((data) => slideshowArray = data)
  return await (
    // TODO make responsive on zoom
    <main className="">
      <div className="max-h-screen relative h-screen object-none">
        <div className="-z-100 absolute top-0 left-0 object-none max-h-screen h-screen">
          <EmblaCarousel className="object-none" imgArray={slideshowArray}/>
        </div>
        <div className="z-100 relative max-h-full h-full flex flex-col">
          <div className="flex flex-row justify-between">
            <Logo/>
            <Button className=" bg-secondaryBackground rounded-full px-8 py-7 mt-9 mr-8"><Link href="/login"> <p className="text-2xl">Login</p></Link></Button>
          </div>
          <div className="text-white flex items-center h-full mt relative">
            <div className="absolute flex flex-col items-center top-1/4 left-0 right-0">
                <h1 className="text-6xl font-bold">Your Movie Lists, Your Way.</h1>
                <h2 className="text-xl font-extralight mt-5">Curate Your Perfect Movie Lists, Share Your Favorites, and Discover New Must-Sees</h2>

                    <Button className="mt-36 bg-secondaryBackground rounded-full px-10 py-9"><Link href="/toprated"> <p className="text-2xl">Get Started</p></Link></Button>

            </div>
        </div>
      </div>
        
      </div>

      <AnimatedSectionHome1 />
      <AnimatedSectionHome2 />
      <Footer />
    </main>
  );
}
