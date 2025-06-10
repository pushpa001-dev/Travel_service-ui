import Book_trip from "@/components/Book_trip";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Subscription from "@/components/Subscription";
import Testimonals from "@/components/Testimonals";
import Top_destinations from "@/components/Top_destinations";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Service/>
      <Top_destinations/>
      <Book_trip/>
      <Testimonals/>
      <Subscription/>
    </div>
  );
}
