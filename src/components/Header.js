import logo from '../reactjs-icon.png';

function Header() {
   return (
      <header>
         <div className="container">
            <nav className="header__nav">
               <div className="header__logo">
                  <img className="header__icon" src={logo} alt="React" width="40" />
                  <span className="header__title">ReactFacts</span>
               </div>
               <div className="header__project">
                  React Course - Project 1
               </div>
            </nav>
         </div>
      </header>
   );
}

export default Header;