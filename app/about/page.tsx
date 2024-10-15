

import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/about.module.css';

const About = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.container}>
        <h1>About Us</h1>
        <p>This is the About page.</p>
      </main>
      <Footer />
    </div>
  );
};

export default About;


