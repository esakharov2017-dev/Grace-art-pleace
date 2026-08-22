import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { SectionDescription } from "../ui/SectionDescription";

const features = [
  {
    number: "01",
    title: "Продуманный интерьер",
    text: "Каждая деталь создана для комфорта мастеров и их клиентов.",
  },
  {
    number: "02",
    title: "Гибкие условия",
    text: "Аренда от одного часа. Нет депозитов и скрытых платежей.",
  },
  {
    number: "03",
    title: "Сообщество",
    text: "Регулярные мероприятия, обучение и обмен опытом.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#F7F5F1]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Левая колонка */}
          <div>
            <p className="text-sm tracking-[0.2em] text-[#B59672] uppercase mb-6">
              О пространстве
            </p>
            <SectionTitle>Место, где работают профессионалы</SectionTitle>
            <div className="mt-6">
              <SectionDescription>
                Grace Art Place — это современное пространство для мастеров beauty-индустрии. 
                Мы создали атмосферу, в которой хочется творить и развиваться.
              </SectionDescription>
            </div>
          </div>

          {/* Правая колонка */}
          <div className="flex flex-col gap-10">
            {features.map((feature) => (
              <div key={feature.number} className="flex gap-6">
                <span className="text-sm text-[#B59672] font-medium">
                  {feature.number}
                </span>
                <div>
                  <h3 className="text-lg font-medium text-[#1C1C1C] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-base text-[#6D6D6D] leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}