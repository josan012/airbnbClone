import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";
import data from "./data";

const cards = data.map((item) => {
  return <Card key={item.id} item={item} />;
});

const Home: NextPage = () => {
  return (
    <Container>
      <div className={styles.container}>
        <Navbar />
        <Hero />
        <section className="cards-list">{cards}</section>
      </div>
    </Container>
  );
};

export default Home;
