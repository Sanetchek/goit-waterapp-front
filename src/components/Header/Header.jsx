import Header from 'react-header-responsive';
import logo1x from './src/assets/logo.png';
import logo2x from './src/assets/logo2x.png';


function App() {
  const pages = [
    {
      name: 'Home',
      link: '/HomePage'
    },
    {
      name: 'RegisterPage',
      link: '/RegisterPage',
    },
    {
        name: 'Login',
        link: '/Login',
      },
  ];
  
  const Access = () => {
    return (
      <div>
        <button>Sign Up</button>
        <button>Sign In</button>
      </div>
    );
  };

  return (
    <Header
      home={
        <img 
          src={logo1x} 
          srcSet={`${logo1x} 1x, ${logo2x} 2x`} 
          alt="Logo" 
        />
      }
      pages={pages}
      anchor={(link, name, className) => (
        <a href={link} className={className}>
          {name}
        </a>
      )}
      access={<Access />}
      overlap={true}  
    />
  )
}