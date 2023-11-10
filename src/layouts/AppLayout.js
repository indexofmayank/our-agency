import '../styles/AppLayout.scss';
import Sidebar from '../components/sidebar/Sidebar'; 
import Header from '../components/header/Header';

const AppLayout = () => {
    return (
    <div>
       <Sidebar ></Sidebar>
       <Header></Header>
    </div>        
    );
};

export default AppLayout;