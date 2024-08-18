import Image from "next/image";
import { EmblaCarousel } from "@/components/EmblaCarousel";
import Logo from "@/components/Logo";
export default function Home() {
  return (
    <main className="">
      <div className="max-h-screen max-w-screen relative h-screen object-none">
        <div className="-z-100 absolute top-0 left-0 object-none">
          <EmblaCarousel className="object-none" />
        </div>
        <div className="z-100 relative">
          <div className="pt-8 pl-12">
            <Logo/>
          </div>
          <div className="text-white flex flex-col justify-center items-center pt-24 h-full align-middle">
            <h1 className="text-6xl">Your Movie Lists, Your Way.</h1>
            <h2>Curate Your Perfect Movie Lists, Share Your Favorites, and Discover New Must-Sees</h2>
          </div>
          
        </div>
        
      </div>
      
    </main>
  );
}
