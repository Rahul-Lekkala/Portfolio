// CRIO_SOLUTION_START_MODULE_CREATE_PROFILE
// CRIO_SOLUTION_END_MODULE_CREATE_PROFILE
import React from "react";
import { Layout } from "components/common";
import { Intro, Contact, Projects, Experience, Abilities } from "components/landing";
import Head from "components/head";
import "./styles.css";
//import "https://fonts.googleapis.com/css2?family=Merriweather&family=Montserrat:wght@500&family=Rammetto+One&family=Sacramento&display=swap"

export default () => (
  <Layout>
    <Head />
    <Intro />
    <Experience/>
    <Abilities/>
    <Projects />
    <Contact />
  </Layout>
);
