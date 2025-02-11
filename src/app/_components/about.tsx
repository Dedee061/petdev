import Image from "next/image";
import React from "react";
import imgAbout1 from "../../../public/about-1.png";
import imgAbout2 from "../../../public/about-2.png";
import { Check } from "lucide-react";
import { MapPin, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export default function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={imgAbout1}
                className="object-cover hover:scale-110 duration-300"
                alt="Foto do cachorro"
                fill
                quality={100}
                priority
              />
            </div>
            <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg overflow-hidden border-white border-4">
              <Image
                src={imgAbout2}
                className=""
                alt="Foto do cachorro"
                fill
                quality={100}
                priority
              />
            </div>
          </div>

          <div className="space-y-6 mt-10">
            <h2 className="text-4xl font-bold">Sobre</h2>
            <p>
              Aqui no nosso petshop, cuidamos do seu pet com muito carinho e
              dedicação! 💖 Oferecemos serviços de banho, tosa, produtos de
              qualidade e atendimento especializado para garantir o bem-estar do
              seu amigo de quatro patas.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-800" />
                Aberto des de 2006
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-800" />
                Equipe Com mais de 10 colaboradores
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-800" />
                Qualidade Nossa Prioridade
              </li>
            </ul>

            <div className="flex gap-2">
              <a
                href="#"
                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogo className="w-5 h-5 text-white" />
                Contato via WhatsApp
              </a>
              <a
                href="#"
                className=" flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <MapPin className="w-5 h-5 text-black" />
                Endereço da Loja
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
