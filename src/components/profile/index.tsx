import React from "react";
import styles from "./styles.module.css";

const Profile = () => {
  return (
    <React.Fragment>
      <footer className={styles.profile}>
        <div className="containerMDX">
          <section>
            <h2>Ola!, sou Edson Costa 👋🏼</h2>

            <span>
              <h3>Capanema-PA, Brasil</h3>
            </span>

            <p>

              Me chamo Edson Costa. Desde os 11 anos, desenvolvo minha paixão pela tecnologia, embarcando em uma jornada de programação freelancer. Atualmente, sou estudante de Sistemas de Informação na Universidade Federal de Pará, almejando tornar-me um arquiteto em nuvem. Possuo habilidades intermediárias em inglês, buscando constantemente aprimorá-las. Minha dedicação à aprendizagem contínua visa expandir meu conjunto de habilidades e acompanhar as tendências do setor.
            </p>
          </section>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Profile;
