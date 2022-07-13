import { Header } from "./components/Header";
import { Task } from "./components/Task";

import styles from './App.module.css'
import "./global.css";
export const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.mainContent}>
        
        <Task />
      </main>
    </div>
  );
};
