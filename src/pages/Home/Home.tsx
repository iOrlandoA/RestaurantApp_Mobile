import { IonContent
        , IonHeader
        , IonPage
        , IonTitle
        , IonToolbar } from '@ionic/react';
import FormLoginUser from '../../components/Forms/FormLoginUser';
import UseApi from '../../components/UseApi';

const Home: React.FC = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { data, refetch, post, remove, put } = UseApi(`${apiUrl}/users`);
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <FormLoginUser data={data} refetch={refetch}></FormLoginUser>
        

        </IonHeader>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
