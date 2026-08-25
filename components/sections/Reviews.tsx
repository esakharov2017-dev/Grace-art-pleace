import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { SectionDescription } from "../ui/SectionDescription";

const reviews = [
  {
    name: "Анна К.",
    date: "15 августа 2026",
    rating: 5,
    text: "Отличное пространство для работы! Чисто, стильно и удобно. Арендовала место для маникюра, всё понравилось.",
  },
  {
    name: "Марина С.",
    date: "3 августа 2026",
    rating: 5,
    text: "Прекрасная атмосфера и продуманный интерьер. Клиенты всегда довольны. Обязательно буду продолжать сотрудничество.",
  },
  {
    name: "Елена В.",
    date: "22 июля 2026",
    rating: 5,
    text: "Хожу на стрижку к мастеру в Grace Art Place. Очень уютно, приятная обстановка и профессиональный подход.",
  },
];

export default function Reviews() {
  return (
    <section className="py-24 md:py-32 bg-[#F7F5F1]">
      <Container>
        <div className="mb-16 md:mb-20">
          <p className="text-sm tracking-[0.2em] text-[#B59672] uppercase mb-6">
            Отзывы
          </p>
          <SectionTitle>Что говорят клиенты</SectionTitle>
          <div className="mt-6">
            <SectionDescription>
              Реальные отзывы с Яндекс.Карт. Мы ценим каждое мнение.
            </SectionDescription>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-[#B59672]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-base text-[#1C1C1C] leading-relaxed mb-6 flex-1">
                «{review.text}»
              </p>

              <div className="pt-4 border-t border-[#F7F5F1]">
                <p className="text-sm font-medium text-[#1C1C1C]">
                  {review.name}
                </p>
                <p className="text-xs text-[#6D6D6D] mt-1">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://yandex.ru/maps/org/grace_art_place/133424520848/reviews/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#6D6D6D] hover:text-[#1C1C1C] transition-colors duration-300"
          >
            Смотреть все отзывы на Яндекс.Картах
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
}