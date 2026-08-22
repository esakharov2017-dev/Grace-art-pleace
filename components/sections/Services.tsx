import Image from "next/image";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { SectionDescription } from "../ui/SectionDescription";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#F7F5F1]">
      <Container>
        <div className="mb-16 md:mb-20">
          <p className="text-sm tracking-[0.2em] text-[#B59672] uppercase mb-6">
            Услуги и цены
          </p>
          <SectionTitle>Прайс-лист</SectionTitle>
          <div className="mt-6">
            <SectionDescription>
              Прозрачное ценообразование без скрытых платежей. 
              Выберите подходящий формат аренды.
            </SectionDescription>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-[480px] rounded-2xl overflow-hidden group"
            >
              {/* Фото на всю карточку */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Эффект замороженного стекла */}
              <div className="absolute left-4 right-4 bottom-4 md:left-6 md:right-6 md:bottom-6">
                <div className="bg-white/30 backdrop-blur-xl border border-white/50 rounded-2xl p-6 md:p-8 shadow-lg">
                  <h3 className="text-xl font-medium text-[#1C1C1C] mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#6D6D6D] mb-6">
                    {service.subtitle}
                  </p>

                  <div className="border-t border-[#1C1C1C]/10 pt-4 flex flex-col gap-3">
                    {service.prices.map((price, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-sm text-[#6D6D6D]">
                          {price.label}
                        </span>
                        <span className="text-sm font-medium text-[#1C1C1C]">
                          {price.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}