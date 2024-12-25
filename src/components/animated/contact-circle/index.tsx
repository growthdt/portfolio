import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";


export default function ContactCircle() {
    const str = "ENTRE EM CONTATO ";
    const radius = 80; // Raio do círculo (opcional para referência)
    const wppContact = process.env.NEXT_PUBLIC_WHATSAPP_CONTACT;

    return (
        <Link href={wppContact as Url} passHref>
            <div className="fixed top-[600px] left-[1320px] h-[100px] w-[100px] flex items-center justify-center animate-[effect_8s_linear_infinite] cursor-pointer z-40">
                <img
                    src="/assets/wpp.jpg"
                    alt="Imagem central"
                    className="absolute h-[100px] w-[100px] rounded-full object-cover"
                />
                {str.split("").map((char, index) => {
                    const angle = (360 / str.length) * index; // Ângulo para cada letra

                    return (
                        <span
                            key={index}
                            className={`absolute text-white text-lg font-bold`}
                            style={{
                                transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                            }}
                        >
                            {char}
                        </span>
                    );
                })}
            </div>
      </Link>
        
    );
}