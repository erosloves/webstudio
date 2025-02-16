import Link from "next/link";
import styles from "./page.module.css";
import Slider from "./components/Slider";
export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <section
          className={`${styles.section} ${styles.sectionAboutUs}`}
          id="sectionAboutUs"
        >
          <span className={styles.title}>Welcome to Our Modern Oasis</span>
          <h1>Discover the Power of Minimalism</h1>
          <p className={styles.desc}>
            Immerse Yourself in our Responsive, One-Page Wonder - Crafted to
            Elevate Your Online Presence and Captivate Your Audience
          </p>
          <Button>Узнать больше</Button>
        </section>
        <section
          className={`${styles.section} ${styles.sectionCases}`}
          id="sectionCases"
        >
          <div className={styles.textWrapper}>
            <span className={styles.title}>Our Passion, Your Vision</span>
            <h2>Портфолио</h2>
            <p className={styles.text}>
              At the Forefront of Digital Innovation, We Seamlessly Blend
              Cutting-Edge Design, Responsive Development, and Strategic
              Insights to Elevate Your Online Presence. Unlock the Power of a
              Visually Stunning, User-Centric Website that Captivates and
              Converts
            </p>
            <Button>Discover more</Button>
          </div>
          <div className={styles.slider}>
            <Slider />
          </div>
        </section>
        <section
          className={`${styles.section} ${styles.sectionStat}`}
          id="sectionStat"
        >
          <div className={styles.stat}></div>
          <div className={styles.textWrapper}>
            <span className={styles.title}>
              Более 2623748 довольных клиентов
            </span>
            <h2>Отчёт о выполненных проектах</h2>
            <p className={styles.text}>
              At the Forefront of Digital Innovation, We Seamlessly Blend
              Cutting-Edge Design, Responsive Development, and Strategic
              Insights to Elevate Your Online Presence. Unlock the Power of a
              Visually Stunning, User-Centric Website that Captivates and
              Converts
            </p>
            <Button>Discover more</Button>
          </div>
        </section>
        <section
          className={`${styles.section} ${styles.sectionTeam}`}
          id="sectionTeam"
        ></section>
        <section
          className={`${styles.section} ${styles.sectionServices}`}
          id="sectionServices"
        ></section>
        <section
          className={`${styles.section} ${styles.sectionContacts}`}
          id="sectionContacts"
        ></section>
      </main>
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        logo
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#sectionAboutUs">О нас</a>
          </li>
          <li>
            <a href="#sectionCases">Портфолио</a>
          </li>
          <li>
            <a href="#sectionStat">Статистика</a>
          </li>
          <li>
            <a href="#sectionTeam">Команда</a>
          </li>
          <li>
            <a href="#sectionServices">Услуги</a>
          </li>
          <li>
            <a href="#sectionContacts">Контакты</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Footer = () => {
  return <footer className={styles.footer}></footer>;
};

const Button = ({ children }: { children: string }) => {
  return <div className={styles.button}>{children}</div>;
};
