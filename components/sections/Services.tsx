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
              className="bg-white rounded-2xl overflow-hidden group"
            >
              {/* Фото */}
              <div className="relative h-56 w-full">
                <Image
  src={service.image}
  alt={service.title}
  fill
  className="object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
/>
                
              </div>

              {/* Текст и цены */}
              <div className="p-8 md:p-10">
                <h3 className="text-xl font-medium text-[#1C1C1C]">
                  {service.title}
                </h3>
                <p className="text-sm text-[#6D6D6D] mt-1 mb-6">
                  {service.subtitle}
                </p>

                <div className="border-t border-[#F7F5F1] pt-6 flex flex-col gap-4">
                  {service.prices.map((price, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-base text-[#6D6D6D]">
                        {price.label}
                      </span>
                      <span className="text-base font-medium text-[#1C1C1C]">
                        {price.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}