import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-gray-500 overflow-hidden">
      <div className="flex justify-around items-center h-[100%]">
        <Image src="/ash.png" className="object-cover" width={500} height={200} alt="image"/>
          <div>
            <div className="text-white text-xl font-semibold text-center flex justify-center items-center">
              <p>Lets Dive in the world of Pokemons. Click the pokeball</p>
              <Link className="animate-spin hover:animate-pulse" href={'/pokemon'}><Image src="/pokeball.png" width={200} height={200} alt="image"/></Link>
            </div>
          </div>
        <Image src="/pikachu-t.png" className="" width={500} height={200} alt="image"/>
      </div>
    </div>
  );
}
