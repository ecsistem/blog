import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import Menu from "../components/menu";
import { personalLinkItems, socialLinkItems } from '../data/linkertree';
import Head from "../infra/head";
import styles from "../styles/linkertree.module.css";

interface LinkItemProps {
  item: {
    href: string;
    gradientColors: string[];
    icon: string;
    label: string;
  };
}

const LinkItem: React.FC<LinkItemProps> = ({ item }) => (
  <Link href={item.href} passHref className={styles.link} style={{ background: `linear-gradient(90deg, ${item.gradientColors[0]} 0%, ${item.gradientColors[1]} 100%)` }}>
      {/* You can replace the following image with your specific icon */}
      <Image src={`/icons/${item.icon}`} alt={`ícone ${item.label}`} width={28} height={28} />
      <h2>{item.label}</h2>
  </Link>
);

const LinkTree = () => {

  return (
    <>
      <Head title="Blog // Edson Costa - Social" />
        <Menu />
      <div className={`containerFlexBox ${styles.linkTreeContainer}`}>
        <section className="containerMDX containerPadding">
          <div className={styles.linkTreeContainer}>
            <Image src="/profile/profile-edson-costa.png" className={styles.profilePicture} alt="Edson Costa" width={100} height={100} />
              <h1>Edson Costa</h1>
              <p className={`${styles.linkAtSign}`}>@ofc_edson_costa</p>

            <main>
              <section>
                <h2>Pessoais</h2>
                <div className={`${styles.linkContainer} ${styles.link}`}>
                  {personalLinkItems.map((item, index) => (
                    <LinkItem key={index} item={item} />
                  ))}
                </div>
              </section>
              <section>
                <h2>Rede sociais</h2>
                <div className={`${styles.linkContainer} ${styles.link}`}>
                  {socialLinkItems.map((item, index) => (
                    <LinkItem key={index} item={item} />
                  ))}
                </div>
              </section>
            </main>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default LinkTree;
