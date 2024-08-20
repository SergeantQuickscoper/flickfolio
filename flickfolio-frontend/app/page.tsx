import Image from "next/image";
import { EmblaCarousel } from "@/components/EmblaCarousel";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="">
      <div className="max-h-screen max-w-screen relative h-screen object-none">
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
      <div className="h-screen z-100 relative bg-secondaryBackground">

      </div>
      <div className="h-screen z-100 relative bg-primaryBackground">

      </div>
      <div className=" h-96 bg-secondaryBackground relative z-100">
      
      </div>
      
    </main>
  );
}
