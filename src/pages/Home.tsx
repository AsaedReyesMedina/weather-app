import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Home.css';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <IonPage>
        <Header />
        <Body />
        <Footer />
      </IonPage>
    </>
  );
};

export default Home;
