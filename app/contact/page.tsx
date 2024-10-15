

import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/contact.module.css';

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.container}>
        <h1>Contact Us</h1>
        <p>This is the Contact page.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;



