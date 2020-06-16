import React from 'react';
import SEO from '../shared/Seo';
import Navbar from '../shared/Navbar';
import { useLayoutStyles } from '../../styles';

function Layout({ children, title, marginTop = 60 }) {
  const classes = useLayoutStyles();

  return (
    <section className={classes.section}>
      <SEO title={title}/>
      <Navbar />
      <main className={classes.main} style={{ marginTop }}>
        <section className={classes.childrenWrapper}>
          <div className={classes.children}>{children}</div>
        </section>
      </main>
    </section>
  );
}

export default Layout;
