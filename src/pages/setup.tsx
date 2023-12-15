import Footer from "@/components/footer";
import React from "react";
import Menu from "../components/menu";
import Head from "../infra/head";
import styles from "../styles/setup.module.css";

const Setup = () => {
  return (
    <React.Fragment>
      <Head title="Blog // Edson Costa - Setup" />
      <div className="containerFlexBox">
        <Menu />
        <section className="containerMDX containerPadding">
          <div className={styles.setup}>
            <h2>Setup</h2>

            <p>
              Sempre recebo muitas mensagens perguntando sobre meu setup e quais
              softwares, serviços e equipamentos utilizo em meu dia a dia.
              Então, resolvi listar tudo aqui em um só lugar.
            </p>

            <div>
              <h3>Equipamentos</h3>
              <ul>
              <li>
                  <a
                    href="https://produto.mercadolivre.com.br/MLB-1553276440-notebook-acer-aspire-3-a315-42g-r7nb-ryzen-5-8gb-1tb-128gb-_JM"
                    target="_blank"
                   rel="noreferrer"
                  >
                 Notebook  - Acer Aspire 3, A315-42g-r7nb, Ryzen 5, 12gb 1tb(HD)+128gb(SSD)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.amazon.com.br/Headphone-HV-H2232d-Ilumina%C3%A7%C3%A3o-Microfone-Conector/dp/B07N78G8GB"
                    target="_blank"
                     rel="noreferrer"
                  >
                    Headset -Havit HV-H2232d
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.magazineluiza.com.br/cadeira-gamer-xt-racer-reclinavel-preta-e-branca-armor-series-xta150/p/222068400/mo/moec/"
                    target="_blank"
                     rel="noreferrer"
                  >
                    Cadeira Gamer - XT Racer - Armor Series XTA150
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.amazon.com.br/Monitor-LCD-AOC-E1670SWU-15-6/dp/B074JL8NL4/ref=asc_df_B074JL8NL4/?tag=googleshopp00-20&linkCode=df0&hvadid=379787187059&hvpos=&hvnetw=g&hvrand=14063947356305786738&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9101658&hvtargid=pla-810066207482&psc=1&mcid=d9110985be30343fbc1e6a533245145d"
                    target="_blank"
                     rel="noreferrer"
                  >
                  Monitor LED AOC 15,6” Widescreen VESA - E1670SWU-WM
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.amazon.com.br/Teclado-Mec%C3%A2nico-T-dagger-Bora-Switch/dp/B0833F1KQ3/ref=asc_df_B0833F1KQ3/?tag=googleshopp00-20&linkCode=df0&hvadid=379708004298&hvpos=&hvnetw=g&hvrand=1347635645544012544&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9101658&hvtargid=pla-934156114290&psc=1&mcid=d3f2a9c91bc038a8a29516aa34af02a5"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Teclado Mecânico Gamer - T-DAGGER T-tgk315, RGB, Switch Outemu
                    Blue
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.magazineluiza.com.br/mouse-gamer-multilaser-2400dpi-6-botoes-led-laranja-mo270/p/kdhd696k14/in/mger/?seller_id=taemcontacomerciovarejistaltda&srsltid=AfmBOopqdRLhXTepOy2I-edhKJbS0BxB_zCxBbgot5sdPl2PThq5OP5A_x0"
                    target="_blank"
                     rel="noreferrer"
                  >
                    Mouse Gamer -  Multilaser 2400dpi, 6 Botões, Led, Mo270
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.magazineluiza.com.br/mousepad-xtrike-me-770x295x3mm-mp-204/p/fbk04f8c0b/in/mspd/?seller_id=hunogamesinformatica&srsltid=AfmBOopkmintvHflWNLQf6mcz1TmfGk0K-Ua-lAUz-T65TNBaxUkevdRo3U"
                    target="_blank"
                     rel="noreferrer"
                  >
                    Mousepad - xtrike me 770x295x3mm mp-204
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3>Ferramentas</h3>
              <ul>
                <li>
                  <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
                    VS Code
                  </a>
                </li>
                <li>
                  <a href="https://trello.com/pt-BR" target="_blank" rel="noreferrer">
                    Trello
                  </a>
                </li>
                <li>
                  <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
                    Figma
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.atlassian.com/br/software/jira"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Jira
                  </a>
                </li>
                <li>
                  <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                    Git
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3>VS Code</h3>
              <ul>
                <li>
                  <a
                    href="https://marketplace.visualstudio.com/items?itemName=ryanolsonx.solarized"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Tema - Solarized Dark
                  </a>
                </li>
                <li>
                  <a href="https://github.com/tonsky/FiraCode" target="_blank" rel="noreferrer">
                    Fonte - Fira Code
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3>Livros</h3>
              <ul>
                <li>
                  <a
                    href="https://www.amazon.com.br/gp/product/8532520839/ref=ppx_yo_dt_b_asin_title_o00_s01?ie=UTF8&psc=1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    O design do dia a dia
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.amazon.com.br/gp/product/8576088509/ref=ppx_yo_dt_b_asin_title_o00_s01?ie=UTF8&psc=1"
                    target="_blank"
                   rel="noreferrer"
                  >
                    Não me faça pensar
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.amazon.com.br/gp/product/8576082675/ref=ppx_yo_dt_b_asin_title_o02_s00?ie=UTF8&psc=1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Código limpo: Habilidades práticas do agile software
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.amazon.com.br/gp/product/8532530907/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Mostre seu trabalho: 10 maneiras de compartilhar sua
                    criatividade e ser descoberto
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.amazon.com.br/gp/product/6555320109/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Siga em frente: 10 maneiras de manter a criatividade nos
                    bons e maus momentos
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.amazon.com.br/gp/product/8532528422/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Roube como um artista: 10 dicas sobre criatividade
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.amazon.com.br/gp/product/857416836X/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Design para quem não é designer: Princípios de design e
                    tipografia para iniciantes
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Setup;
