import cooljobLogo from '../../assets/icons/cooljobGrayLogo.svg'
import styles from "./styles.module.css";
import fLogo from "../../assets/icons/feFacebookLogo.svg"
import twLogo from "../../assets/icons/twitterLogo.svg"
import goLogo from "../../assets/icons/googleLogo.svg"
import liLogo from "../../assets/icons/linkInLogo.svg"

const citiesItems =[
    { id: 1, title: "Осака",href: ""},
    { id: 2, title: "Коясан",href: ""},
    { id: 3, title: "Токио",href: ""},
    { id: 4, title: "Хаконэ",href: ""},
    { id: 5, title: "Наэба",href: ""},
    { id: 6, title: "Томаму",href: ""},
    { id: 7, title: "Йокогама",href: ""},
    { id: 8, title: "Нагоя",href: ""},
    { id: 9, title: "Саппоро",href: ""},
    { id: 10, title: "Кобе",href: ""}
  ];
const socialMenuItems =[
    { id: 1, title: "fb",href: fLogo},
    { id: 2, title: "tw",href: twLogo},
    { id: 2, title: "google",href: goLogo},
    { id: 2, title: "linkedin",href: liLogo},
  ];
function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.cities}> 
                <h3 className={styles.title}>
                Популярные города
                </h3>
            <nav className={styles.nav} >{citiesItems.map((item) => (
              <a key={item.id} href={item.href}>
                {item.title}
              </a>
            ))}</nav></div>
           
            <div className={styles.socials}>
            <img src={cooljobLogo} className={styles.logo} alt="logo" />
            <nav className={styles.socialsNav}>
               {socialMenuItems.map((item) => (
                <img src={item.href} alt={item.title} />
              ))}
              </nav>
            </div>
          </div>
        
        <div></div>
    </footer>
    
  )
}
export default Footer