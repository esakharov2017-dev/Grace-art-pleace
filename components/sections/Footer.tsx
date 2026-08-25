import { Container } from "../ui/Container";

export default function Footer() {
  return (
    <footer className="py-16 bg-[#1C1C1C] text-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Логотип и описание */}
          <div>
            <div className="flex flex-col leading-none mb-4">
              <span className="text-lg font-semibold tracking-wide text-white">
                GRACE
              </span>
              <span className="text-[10px] tracking-[0.3em] text-white/60 uppercase">
                Art Place
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Современное пространство для красоты, творчества и профессионального роста.
            </p>
          </div>

          {/* Навигация */}
          <div>
            <p className="text-xs tracking-[0.2em] text-white/40 uppercase mb-4">
              Навигация
            </p>
            <nav className="flex flex-col gap-3">
              <a href="#about" className="text-sm text-white/70 hover:text-white transition-colors duration-300">О нас</a>
              <a href="#services" className="text-sm text-white/70 hover:text-white transition-colors duration-300">Услуги</a>
              <a href="#gallery" className="text-sm text-white/70 hover:text-white transition-colors duration-300">Галерея</a>
              <a href="#contacts" className="text-sm text-white/70 hover:text-white transition-colors duration-300">Контакты</a>
            </nav>
          </div>

          {/* Контакты */}
          <div>
            <p className="text-xs tracking-[0.2em] text-white/40 uppercase mb-4">
              Контакты
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:+79990000000" className="text-sm text-white/70 hover:text-white transition-colors duration-300">
                +7 (993) 500-84-40
              </a>
              <p className="text-sm text-white/70">
                улица Мельникова, 38, г.Екатеринбург
              </p>
              <p className="text-sm text-white/70">
                Ежедневно, 10:00 — 21:00
              </p>
            </div>
          </div>
        </div>

        {/* Копирайт */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © 2026 Grace Art Place. Все права защищены.
          </p>
          <p className="text-xs text-white/40">
            Сделано с любовью
          </p>
        </div>
      </Container>
    </footer>
  );
}