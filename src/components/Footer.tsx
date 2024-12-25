import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { MailIcon } from "lucide-react";
import Image from 'next/image';
export default function Footer() {
  // get the current time in UTC+1 time zone
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      date.setHours(date.getHours());
      setTime(
        date.toLocaleTimeString("pt-BR", {
          hour12: false, // Usa o formato 12 horas (AM/PM)
          hour: "numeric",
          minute: "numeric",
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-gradient-to-t from-primary/[1%] to-transparent">
      <div className="container mx-auto flex flex-row items-center justify-between py-6">
        <span className="flex flex-row items-center space-x-4">
        <Link href="/">
          <div className="flex flex-row gap-2 items-center">
                  <Image
                    src="/assets/logo.png"
                    alt="Exemplo de imagem"
                    width={30}
                    height={30}
                  />
                  <span className="text-lg font-semibold">Soluções</span>
                  <span className="text-lg font-semibold text-gradient">{'Web'}</span>
          </div>
        </Link>
          <hr className="hidden h-6 border-l border-muted md:flex" />
          <span className="flex hidden flex-row items-center space-x-2 md:flex">
            <p className="text-xs text-muted-foreground">Horário Local:</p>
            <p className="text-sm font-semibold">{time}</p>
          </span>
        </span>
        <Link
          href="growthdt@gmail.com"
          passHref
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          <Button variant={"outline"}>
            <MailIcon className="h-4 w-4 md:mr-2" />
            <span className="hidden md:flex">martinssolucoesweb@gmail.com</span>
          </Button>
        </Link>
      </div>
      <div className="h-1 bg-[radial-gradient(closest-side,#8486ff,#42357d,#5d83ff,transparent)] opacity-50" />
    </footer>
  );
}
