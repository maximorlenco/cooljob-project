import cooljobLogo from '../../assets/icons/cooljobLogo.svg'
import Button from '../button'
import styles from "./styles.module.css";

const menuItems =[
    { id: 1, title: "Поиск работы",href: ""},
    { id: 2, title: "Поиск стартапов",href: ""},
  ];
const userMenuItems =[
    { id: 1, title: "Регистрация",href: ""},
    { id: 2, title: "Вход",href: ""},
  ];
function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.container}>
            <img src={cooljobLogo} className={styles.logo} alt="logo" />
            <nav className={styles.nav} >{menuItems.map((item) => (
              <a key={item.id} href={item.href}>
                {item.title}
              </a>
            ))}</nav>
            <div className={styles.userNav}>
               {userMenuItems.map((item) => (
                <Button key={item.id} title={item.title} />
              ))}
            </div>
          </div>
        
        <div></div>
    </header>
    
  )
}
export default Header