import Button from '@/components/ui/Buttons/Button';
import styles from '../styles/style.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div>
          <p className={styles.subtitle}>
            We’ve got your morning covered with
          </p>
          <h1 className={styles.title}>
            Coffee
          </h1>
          <p className={styles.description}>
            It is best to start your day with a cup of coffee. Discover the
            best flavours coffee you will ever have. We provide the best
            for our customers.
          </p>
        </div>
        <Button href='/order'>
          Order Now
        </Button>
      </section>

      <section className={styles.discoverSection}>

      </section>
    </main>
  );
}