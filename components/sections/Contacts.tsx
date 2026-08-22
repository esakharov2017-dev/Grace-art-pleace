import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { SectionDescription } from "../ui/SectionDescription";
import { Button } from "../ui/Button";

export default function Contacts() {
  return (
    <section id="contacts" className="py-24 md:py-32 bg-[#F7F5F1]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
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

          <div className="flex flex-col gap-10">
            <div>
              <p className="text-sm text-[#6D6D6D] mb-2">Телефон</p>
              <a
                href="tel:+79990000000"
                className="text-2xl md:text-3xl font-medium text-[#1C1C1C] hover:text-[#B59672] transition-colors duration-300"
              >
                +7 (993) 500-84-40
              </a>
            </div>

            <div>
              <p className="text-sm text-[#6D6D6D] mb-2">Адрес</p>
              <p className="text-xl font-medium text-[#1C1C1C]">
                улица Мельникова, 38, г.Екатеринбург
              </p>
            </div>

            <div>
              <p className="text-sm text-[#6D6D6D] mb-2">Режим работы</p>
              <p className="text-xl font-medium text-[#1C1C1C]">
                Ежедневно, 10:00 — 22:00
              </p>
            </div>

            <div className="pt-4">
              <Button
                variant="outline"
                size="large"
                href="https://t.me/username"
              >
                Написать в Telegram
              </Button>
            </div>

            <div className="mt-4 rounded-2xl overflow-hidden border border-[#1C1C1C]/10">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=60.566940%2C56.831955&mode=poi&poi%5Bpoint%5D=60.566843%2C56.832009&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D133424520848&z=20.79"
                width="100%"
                height="300"
                frameBorder="0"
                allowFullScreen={true}
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}