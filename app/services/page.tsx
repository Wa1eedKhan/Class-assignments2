

import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/services.module.css';

const Service = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.container}>
        <h1>Our Services</h1>
        <p>This is the Services page.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Service;




