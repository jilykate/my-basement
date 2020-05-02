import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollyFlatbed } from '@fortawesome/free-solid-svg-icons'
import '../stylesheets/header.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('====Header didmount====');
  }

  render() {
    return (
      <div className="bs-wrapper">
        <header className="bs-header">
          <div className="bs-header-icon">
              <FontAwesomeIcon icon={faDollyFlatbed} />
          </div>
          <span className="bs-header-text">My Basement</span>
        </header>
      </div>
    );
  }
}

// function Header() {
//   return (
//     <div className="bs-wrapper">
//       <header className="bs-header">
//         <div className="bs-header-icon">
//             <FontAwesomeIcon icon={faDollyFlatbed} />
//         </div>
//         <span className="bs-header-text">My Basement</span>
//       </header>
//     </div>
//   );
// }

// export default Header;
