import s from "./Header.module.scss";

function Header() {
  return (
    <header className={s.header}>
      <div className={s.menu}>
        <button type="button">
          <picture>
            <img
              src="/images/menu-btn-1x.png"
              srcSet="/images/menu-btn-2x.png 2x"
              alt="Menu Button"
            />
          </picture>
        </button>
        <p className={s.menuText}>Menu</p>
      </div>
      <picture>
        <img
          src="/images/CoA_logo@1x.jpg"
          srcSet="/images/CoA_logo@2x.jpg 2x"
          alt="Menu Button"
        />
      </picture>
      <ul className={s.socialMediaList}>
        <li>s</li>
      </ul>
    </header>
  );
}

export default Header;
