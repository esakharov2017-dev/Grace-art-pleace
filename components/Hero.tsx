import Image from "next/image";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";

export default function Hero() {
  return (
    <section className="py-4 md:py-6">
      <Container>
        <div className="relative rounded-3xl overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
          {/* Фоновое фото */}
          <Image
            src="/hero.jpg"
            alt="Интерьер Grace Art Place"
            fill
            className="object-cover"
            priority
          />

          {/* Градиент снизу для читаемости текста */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Контент поверх фото */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16">
            <p className="text-sm tracking-[0.25em] text-white/70 uppercase mb-4">
              Beauty Coworking
            </p>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium text-white max-w-3xl leading-tight">
              Пространство, где мастера работают с удовольствием.
            </h1>

            <p className="mt-4 md:mt-6 text-base md:text-lg text-white/80 max-w-xl leading-relaxed">
              Рабочие места, услуги парикмахеров, мероприятия и современное пространство для развития бьюти-индустрии.
            </p>

            <div className="mt-8 md:mt-10 flex flex-wrap gap-4">
              <Button variant="light" size="large" href="#contacts">
                Забронировать
              </Button>
              <Button variant="light" size="large" href="#about">
                Подробнее
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}