import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { SectionDescription } from "../ui/SectionDescription";
import { Button } from "../ui/Button";

export default function Contacts() {
  return (
    <section id="contacts" className="py-24 md:py-32 bg-[#F7F5F1]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Левая колонка */}
          <div>
            <p className="text-sm tracking-[0.2em] text-[#B59672] uppercase mb-6">
              Контакты
            </p>
            <SectionTitle>Свяжитесь с нами</SectionTitle>
            <div className="mt-6">
              <SectionDescription>
                Запишитесь на аренду, уточните детали или просто приходите знакомиться.
              </SectionDescription>
            </div>
          </div>

          {/* Правая колонка */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-sm text-[#6D6D6D] mb-2">Телефон</p>
              <a
                href="tel:++79935008440"
                className="text-2xl md:text-3xl font-medium text-[#1C1C1C] hover:text-[#B59672] transition-colors duration-300"
              >
                +7 993 500 84 40
              </a>
            </div>

            <div>
              <p className="text-sm text-[#6D6D6D] mb-2">Адрес</p>
              <p className="text-xl font-medium text-[#1C1C1C]">
                г. Москва, ул. Примерная, 15
              </p>
            </div>

            <div>
              <p className="text-sm text-[#6D6D6D] mb-2">Режим работы</p>
              <p className="text-xl font-medium text-[#1C1C1C]">
                Ежедневно, 10:00 — 21:00
              </p>
            </div>

            <div className="pt-4">
              <Button
                variant="outline"
                size="large"
                href="https://t.me/@art_grace"
              >
                Написать в Telegram
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}