import Footer from "@/components/footer";
import Link from "next/link";
import React from "react";
import Menu from "../components/menu";
import Head from "../infra/head";
import styles from "../styles/sobre.module.css";

const Sobre = () => {
  return (
    <React.Fragment>
      <Head title="Blog // Edson Costa - Sobre" />
      <div className="containerFlexBox">
        <Menu />
        <section className="containerMDX containerPadding">
          <div className={styles.about}>
            <h2>Sobre mim</h2>

            <p>
            Minha paixão pela tecnologia surgiu aos 11 anos, marcando o início de uma jornada de programação cheia
com projetos freelancers que mostram minha aplicação prática de habilidades. Atualmente, sou um estudante de
Sistemas de informação da Universidade Federal de Pará, com o objetivo de evoluir para um arquiteto em nuvem de
excelência.
Eu possuo habilidades intermediárias em inglês, concentrando -se ativamente em melhorá -las. Minha paixão por contínua
A aprendizagem visa expandir meu conjunto de habilidades e me manter atualizado com as tendências do setor.
Nas experiências anteriores, destaquei meu papel de desenvolvedor, aprimorando a experiência em tecnologias como
React, Docker, Kubernetes, AWS e Ações do Github. Eu contribuí para a implementação de CI/CD,
Promoção da automação para entregas mais rápidas e consistentes. Envolvimento em metodologias ágeis
sublinhou minha abordagem colaborativa e iterativa, com considerações de segurança como prioridade.
Explorando sistemas de design, criei interfaces intuitivas, priorizando a clareza por meio da documentação.
A padronização de compromissos garantiu consistência na história do projeto. Esta jornada foi transformadora,
Enfatizando a agilidade, adaptabilidade e trabalho em equipe
            </p>

            <p>
              Hoje você pode ver meu castelo de código através do meu{" "}
              <Link href="https://edsoncosta.online/" target="_blank">
                portfólio
              </Link>
              . Mas se sinta livre para conhecer minhas outras construções além
              do castelo no {" "}
              <Link href="https://www.instagram.com/ofc_edson_costa/" target="_blank">
                Instagram
              </Link>
              ,{" "}
              <Link href="https://github.com/ecsistem" target="_blank">
                GitHub
              </Link>{" "}
              e{" "}
              <Link
                href="https://www.linkedin.com/in/edsoncostadev/"
                target="_blank"
              >
                Linkedin
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Sobre;
