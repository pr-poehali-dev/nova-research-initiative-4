import { useState } from "react";

const MENU = {
  salads: {
    label: "Салаты и закуски",
    items: [
      { name: "Салат с лососем", desc: "Микс салатов, слабосоленый лосось, авокадо, орехи, цитрусовая заправка", price: "490 ₽" },
      { name: "Брускетта с паштетом", desc: "Бородинский хлеб, печёночный паштет, маринованные огурцы, брусничный соус", price: "350 ₽" },
      { name: "Сырная тарелка", desc: "Камамбер, пармезан, дорблю, виноград, мёд, грецкие орехи", price: "590 ₽" },
      { name: "Цезарь с креветками", desc: "Классика с тигровыми креветками, пармезаном и крутонами", price: "620 ₽" },
    ],
  },
  soups: {
    label: "Супы",
    items: [
      { name: "Тыквенный крем", desc: "С имбирём и кокосовым молоком, подаётся с гренками", price: "320 ₽" },
      { name: "Солянка мясная", desc: "Говядина, копчёные рёбра, каперсы, лимон, сметана", price: "390 ₽" },
    ],
  },
  pasta: {
    label: "Паста и ризотто",
    items: [
      { name: "Тальятелле с грибами", desc: "Трюфельное масло, сливки, шампиньоны, пармезан", price: "540 ₽" },
      { name: "Ризотто с грибами", desc: "Арборио, белые грибы, томаты, сливки, козий сыр", price: "520 ₽" },
    ],
  },
  meat: {
    label: "Мясные блюда",
    items: [
      { name: "Говяжья щека", desc: "Томлёная в красном вине, с картофельным гратеном", price: "790 ₽" },
      { name: "Стейк рибай", desc: "Мраморная говядина на гриле, овощи гриль, пряное масло", price: "990 ₽" },
      { name: "Свиная отбивная на кости", desc: "С розмарином и яблочным чатни", price: "690 ₽" },
      { name: "Куриное филе", desc: "Запечённое под сырной корочкой, грибной соус", price: "550 ₽" },
    ],
  },
  pizza: {
    label: "Пицца (30 см)",
    items: [
      { name: "Маргарита", desc: "Томатный соус, моцарелла, базилик, оливковое масло", price: "470 ₽" },
      { name: "Пепперони", desc: "Томатный соус, моцарелла, пепперони, острый перец", price: "540 ₽" },
      { name: "Четыре сыра", desc: "Моцарелла, пармезан, горгонзола, фета, сливочный соус", price: "590 ₽" },
      { name: "Охотничья", desc: "Томатный соус, моцарелла, колбаски, шампиньоны, перец, лук", price: "620 ₽" },
    ],
  },
  sides: {
    label: "Гарниры",
    items: [
      { name: "Картофель фри", desc: "", price: "190 ₽" },
      { name: "Картофель по-деревенски", desc: "С чесноком и тимьяном", price: "230 ₽" },
      { name: "Овощи на гриле", desc: "Цукини, баклажан, перец", price: "210 ₽" },
      { name: "Картофельное пюре", desc: "", price: "160 ₽" },
    ],
  },
  desserts: {
    label: "Десерты",
    items: [
      { name: "Тирамису", desc: "", price: "380 ₽" },
      { name: "Шоколадный фондан", desc: "С пломбиром", price: "420 ₽" },
      { name: "Морковный торт", desc: "С крем-чизом", price: "390 ₽" },
      { name: "Чизкейк «Нью-Йорк»", desc: "С ягодным топингом", price: "370 ₽" },
    ],
  },
  drinks: {
    label: "Напитки",
    items: [
      { name: "Эспрессо", desc: "30 мл", price: "150 ₽" },
      { name: "Американо", desc: "200 мл", price: "190 ₽" },
      { name: "Капучино", desc: "200 мл", price: "230 ₽" },
      { name: "Латте", desc: "250 мл", price: "260 ₽" },
      { name: "Горячий шоколад", desc: "250 мл, с маршмеллоу", price: "290 ₽" },
      { name: "Чай", desc: "350 мл — чёрный / зелёный / травяной", price: "210 ₽" },
      { name: "Вода (газ/негаз)", desc: "500 мл", price: "120 ₽" },
      { name: "Домашний лимонад", desc: "400 мл — лимон-мята", price: "250 ₽" },
      { name: "Морс", desc: "400 мл — клюква или облепиха", price: "230 ₽" },
      { name: "Свежевыжатый сок", desc: "300 мл — апельсин, яблоко", price: "280 ₽" },
    ],
  },
  alcohol: {
    label: "Алкоголь",
    items: [
      { name: "Пиво «Жигули Барное»", desc: "Бут. 0,5 л", price: "280 ₽" },
      { name: "Пиво «Балтика 7»", desc: "Бут. 0,5 л", price: "260 ₽" },
      { name: "Пиво «Гиннесс»", desc: "Бут. 0,44 л", price: "390 ₽" },
      { name: "Пиво разливное «Чешский лев»", desc: "0,5 л", price: "320 ₽" },
      { name: "Глинтвейн", desc: "Бокал 250 мл", price: "330 ₽" },
      { name: "Вино красное / белое", desc: "Сухое, бокал 150 мл", price: "250 ₽" },
    ],
  },
};

const TOP5 = [
  {
    tag: "Хит вечера",
    tagStyle: {},
    img: "https://cdn.poehali.dev/projects/2cf2eb17-f3bb-4f41-9315-4ea2a9865b19/files/333c9531-d8b7-4ed8-a440-ffd869b8b486.jpg",
    name: "Стейк рибай",
    price: "990 ₽",
    desc: "Мраморная говядина на гриле, овощи гриль, пряное масло.",
  },
  {
    tag: "Популярное",
    tagStyle: { background: "var(--secondary)" },
    img: "https://cdn.poehali.dev/projects/2cf2eb17-f3bb-4f41-9315-4ea2a9865b19/files/ea6c2b24-0ee8-46de-903d-502f6f01f21f.jpg",
    name: "Четыре сыра",
    price: "590 ₽",
    desc: "Моцарелла, пармезан, горгонзола, фета, сливочный соус.",
  },
  {
    tag: "Must try",
    tagStyle: { background: "#1a1a2e", color: "var(--accent)" },
    img: "https://cdn.poehali.dev/projects/2cf2eb17-f3bb-4f41-9315-4ea2a9865b19/files/f7616432-8cd0-46af-8515-5f372e91fbfe.jpg",
    name: "Шоколадный фондан",
    price: "420 ₽",
    desc: "Тёплый кекс с жидким шоколадом и шариком пломбира.",
  },
  {
    tag: "Фаворит",
    tagStyle: { background: "#2a2a2a" },
    img: "https://cdn.poehali.dev/projects/2cf2eb17-f3bb-4f41-9315-4ea2a9865b19/files/9a5a54cc-5aeb-4ec3-8749-1eb62e9110d7.jpg",
    name: "Капучино",
    price: "230 ₽",
    desc: "Насыщенный эспрессо, бархатистая молочная пена, 200 мл.",
  },
  {
    tag: "Премиум",
    tagStyle: { background: "#7c3aed" },
    img: "https://cdn.poehali.dev/projects/2cf2eb17-f3bb-4f41-9315-4ea2a9865b19/files/c5e13458-3fe3-4b54-9c30-9d48128520c2.jpg",
    name: "Говяжья щека",
    price: "790 ₽",
    desc: "Томлёная в красном вине, подаётся с картофельным гратеном.",
  },
];

const TAB_KEYS = Object.keys(MENU) as (keyof typeof MENU)[];

export default function Index() {
  const [activeTab, setActiveTab] = useState<keyof typeof MENU>("salads");
  const [booking, setBooking] = useState({ name: "", phone: "", date: "", guests: "" });
  const [booked, setBooked] = useState(false);

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
    setTimeout(() => setBooked(false), 4000);
    setBooking({ name: "", phone: "", date: "", guests: "" });
  };

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">NERWIXX</div>
        <nav>
          <a href="#menu">Меню</a>
          <a href="#about">О нас</a>
          <a href="#gallery">Атмосфера</a>
          <a href="#booking">Бронь</a>
        </nav>
        <a href="#booking">
          <button className="btn-cta">Забронировать</button>
        </a>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ЕДА НА
              <br />
              ОДНОЙ <span>ВОЛНЕ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed" style={{ color: "#888" }}>
              Кафе Nerwixx — городское пространство с авторским меню, живой атмосферой и кофе, которым хочется наслаждаться медленно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a href="#menu">
                <button className="btn-cta">Смотреть меню</button>
              </a>
              <a href="#booking">
                <button className="btn-cta" style={{ background: "transparent", border: "3px solid #2a2a2a", color: "#e5e5e5" }}>
                  Забронировать стол
                </button>
              </a>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              СВЕЖЕЕ
              <br />
              КАЖДЫЙ ДЕНЬ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%", background: "#0f0f0f", color: "var(--accent)", borderColor: "var(--primary)" }}>
              #NERWIXX
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%", background: "#0f0f0f", color: "white", borderColor: "#2a2a2a" }}>
              УРБАН КАФЕ
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * СТЕЙК РИБАЙ * ПИЦЦА ЧЕТЫРЕ СЫРА * ЗАВТРАК ДО 12:00 * БИЗНЕС-ЛАНЧ 12–16 * ПИВНОЙ СЕТ С 18:00 * ОТКРЫТЫ ЕЖЕДНЕВНО *
            СТЕЙК РИБАЙ * ПИЦЦА ЧЕТЫРЕ СЫРА * ЗАВТРАК ДО 12:00 * БИЗНЕС-ЛАНЧ 12–16 * ПИВНОЙ СЕТ С 18:00 * ОТКРЫТЫ ЕЖЕДНЕВНО *
          </div>
        </div>

        {/* TOP-5 */}
        <section className="section-padding" id="menu">
          <div className="section-header">
            <h2 className="section-title">ТОП БЛЮД</h2>
            <span style={{ color: "#888", fontWeight: 700, textTransform: "uppercase", fontSize: "14px" }}>
              Выбор гостей
            </span>
          </div>
          <div className="menu-grid">
            {TOP5.map((item) => (
              <div className="menu-card" key={item.name}>
                <span className="menu-tag" style={item.tagStyle}>{item.tag}</span>
                <img src={item.img} alt={item.name} />
                <div className="menu-card-body">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                    <h3 style={{ color: "#e5e5e5" }}>{item.name}</h3>
                    <span className="price">{item.price}</span>
                  </div>
                  <p style={{ fontSize: "14px", color: "#666" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FULL MENU */}
        <section className="section-padding" style={{ borderTop: "var(--border)" }}>
          <div className="section-header">
            <h2 className="section-title">ПОЛНОЕ МЕНЮ</h2>
          </div>

          <div className="menu-tabs">
            {TAB_KEYS.map((key) => (
              <button
                key={key}
                className={`menu-tab${activeTab === key ? " active" : ""}`}
                onClick={() => setActiveTab(key)}
              >
                {MENU[key].label}
              </button>
            ))}
          </div>

          <div className="menu-table-section">
            <h3>{MENU[activeTab].label}</h3>
            <table className="menu-table">
              <tbody>
                {MENU[activeTab].items.map((item) => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    {item.desc ? <td className="dish-desc">{item.desc}</td> : <td />}
                    <td>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Combos */}
          <h3 style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "18px", fontWeight: 800, textTransform: "uppercase", color: "var(--accent)", marginBottom: "20px" }}>
            Комплексы
          </h3>
          <div className="combos-grid">
            <div className="combo-card">
              <h4>Завтрак «Nerwixx»</h4>
              <p>Каша + тост с джемом + капучино. Доступен до 12:00.</p>
              <div className="combo-price">390 ₽</div>
            </div>
            <div className="combo-card">
              <h4>Бизнес-ланч</h4>
              <p>Суп дня + салат дня + напиток. Доступен с 12:00 до 16:00.</p>
              <div className="combo-price">520 ₽</div>
            </div>
            <div className="combo-card">
              <h4>Пивной сет</h4>
              <p>Разливное пиво + фри + острые крылья. Доступен с 18:00.</p>
              <div className="combo-price">590 ₽</div>
            </div>
          </div>
        </section>

        {/* ABOUT / VIBE */}
        <section className="retro-vibe" id="about">
          <div>
            <h2 className="vibe-title">МЕСТО, ГДЕ ХОЧЕТСЯ ОСТАТЬСЯ.</h2>
            <p className="vibe-text">
              Nerwixx — это не просто кафе. Это городское пространство, где вкусная еда встречается с живой атмосферой. Минималистичный интерьер, правильный свет, плейлист на одной волне с тобой. Просто приходи.
            </p>
            <a href="#booking">
              <button className="btn-cta" style={{ background: "white", color: "var(--primary)", border: "3px solid white" }}>
                Забронировать стол
              </button>
            </a>
          </div>
          <div className="vibe-img"></div>
        </section>

        {/* GALLERY */}
        <section className="section-padding" id="gallery">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @NERWIXX.CAFE
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img src="https://cdn.poehali.dev/projects/2cf2eb17-f3bb-4f41-9315-4ea2a9865b19/files/333c9531-d8b7-4ed8-a440-ffd869b8b486.jpg" alt="Стейк рибай" />
            </div>
            <div className="social-item">
              <img src="https://cdn.poehali.dev/projects/2cf2eb17-f3bb-4f41-9315-4ea2a9865b19/files/ea6c2b24-0ee8-46de-903d-502f6f01f21f.jpg" alt="Пицца" />
            </div>
            <div className="social-item">
              <img src="https://cdn.poehali.dev/projects/2cf2eb17-f3bb-4f41-9315-4ea2a9865b19/files/9a5a54cc-5aeb-4ec3-8749-1eb62e9110d7.jpg" alt="Кофе" />
            </div>
            <div className="social-item">
              <img src="https://cdn.poehali.dev/projects/2cf2eb17-f3bb-4f41-9315-4ea2a9865b19/files/88c75830-d197-4f59-ace2-5c47279ba90a.jpg" alt="Атмосфера" />
            </div>
          </div>
        </section>

        {/* BOOKING */}
        <section className="booking-section" id="booking">
          <h2>ЗАБРОНИРОВАТЬ СТОЛИК</h2>
          <p>Оставьте заявку — мы свяжемся и подтвердим бронь</p>
          {booked ? (
            <div style={{ color: "white", fontWeight: 800, fontSize: "18px", padding: "20px", background: "rgba(255,255,255,0.15)", maxWidth: "500px", margin: "0 auto" }}>
              Заявка принята! Мы скоро свяжемся с вами.
            </div>
          ) : (
            <form className="booking-form" onSubmit={handleBook}>
              <input
                placeholder="Ваше имя"
                value={booking.name}
                onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                required
              />
              <input
                placeholder="Телефон"
                value={booking.phone}
                onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                required
              />
              <input
                type="date"
                value={booking.date}
                onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                required
                style={{ colorScheme: "dark" }}
              />
              <input
                placeholder="Количество гостей"
                value={booking.guests}
                onChange={(e) => setBooking({ ...booking, guests: e.target.value })}
                required
              />
              <button type="submit">Забронировать</button>
            </form>
          )}
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">NERWIXX</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Кафе на одной волне с тобой. Авторское меню, живая атмосфера, правильный кофе.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li><a href="#menu" style={{ color: "#888", textDecoration: "none" }}>Меню</a></li>
            <li><a href="#about" style={{ color: "#888", textDecoration: "none" }}>О нас</a></li>
            <li><a href="#gallery" style={{ color: "#888", textDecoration: "none" }}>Атмосфера</a></li>
            <li><a href="#booking" style={{ color: "#888", textDecoration: "none" }}>Бронирование</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li><a href="#" style={{ color: "#888", textDecoration: "none" }}>Instagram</a></li>
            <li><a href="#" style={{ color: "#888", textDecoration: "none" }}>Telegram</a></li>
            <li><a href="#" style={{ color: "#888", textDecoration: "none" }}>VK</a></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>© 2024 Кафе Nerwixx. Все права защищены.</span>
          <span>Пн–Вс: 08:00 – 00:00</span>
        </div>
      </footer>
    </>
  );
}
