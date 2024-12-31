import { Link } from "react-router-dom";
import { Button } from "../components/ui/button.tsx";

function Home() {
  return (
    <main className="container mx-auto px-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-white leading-tight">
            Empowering Builders of the Web.
          </h1>

          <p className="text-gray-400 text-lg">
            BUIDL Domains is your platform for crafting, managing, and owning
            your unique digital space. Designed for creators, innovators, and
            visionaries, it’s the gateway to building a resilient and
            decentralized web presence.
          </p>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">
              With Build Domains, you can:
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4989a7]"></div>
                Effortlessly register, manage, and renew domains.
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4989a7]"></div>
                Enjoy enhanced security and privacy for your online presence.
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4989a7]"></div>
                Unlock powerful tools tailored for a decentralized and scalable
                web.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center space-y-10">
          <img src="gm.svg" alt="GM NFT" className="border-2 border-white" />
          <Link to="/claim">
            <Button size="lg">Claim Your Name</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home;
