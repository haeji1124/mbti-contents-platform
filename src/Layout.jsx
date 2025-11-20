import Footer from "./components/Footer";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return <div className={styles.mainLayout}>
    {children}
    <Footer/>
    </div>;
}
