import Image from "next/image";
import { EmblaCarousel } from "@/components/EmblaCarousel";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="">
      <div className="max-h-screen max-w-screen relative h-screen object-none">
        <div className="-z-100 absolute top-0 left-0 object-none max-h-full h-full">
          <EmblaCarousel className="object-none" />
        </div>
        <div className="z-100 relative max-h-full h-full flex flex-col">
          <div className="pt-8 pl-12">
            <Logo/>
          </div>
          <div className="text-white flex flex-col items-center flex-1 h-full mt">
            <h1 className="text-6xl">Your Movie Lists, Your Way.</h1>
            <h2 className="text-xl">Curate Your Perfect Movie Lists, Share Your Favorites, and Discover New Must-Sees</h2>
            <Button className="mt-5">Get Started</Button>
          </div>
          
        </div>
        
      </div>
      
    </main>
  );
}
