import React from "react";
import styles from "./styles.module.css";

const Profile = () => {
  return (
    <React.Fragment>
      <footer className={styles.profile}>
        <div className="containerMDX">
          <section>
            <h2>Bem-vindo ao universo tecnológico!, sou Edson Costa 👋🏼</h2>
            <span>
              <h3>Capanema-PA, Brasil</h3>
            </span>
            <p>
  Estudante de Sistemas de Informação e entusiasta da tecnologia, estou aqui para compartilhar meu conhecimentos, a jornada em busca da arquitetura em nuvem e muito mais. Seja bem-vindo ao meu blog, onde a tecnologia encontra a paixão pela aprendizagem constante!
</p>
          </section>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Profile;
