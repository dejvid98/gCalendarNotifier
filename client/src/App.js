import React from 'react';
import styles from './App.module.scss';
import Navbar from './Layout/Navbar';
import Form from './Form/Container';

function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Form />
    </div>
  );
}

export default App;
