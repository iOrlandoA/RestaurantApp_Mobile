import { 
    IonCard
    ,IonInput
    ,IonCardHeader
    ,IonCardContent
    ,IonCardTitle,
    IonButton,
    useIonAlert
    } from '@ionic/react';
import { useState } from 'react';
type Props={
    data:any;
    refetch:any;
}

const FormLoginUser= ({ data, refetch}:Props) => {
    const [presentAlert]= useIonAlert();
    const [user, setUser]= useState({
        email:""
        ,password: 0
    })
    return (
        <IonCard>
        
            <IonCardHeader>
                <IonCardTitle> Login</IonCardTitle>
                <IonCardContent>
                    <IonInput
                    value={user.email}
                    onIonChange={(e)=>{
                        user.email= e.detail.value!
                        setUser(user)    
                    }}>Email: </IonInput>
                    <br />
                    <IonInput
                    value={user.password}
                    type= "number"
                    onIonChange={(e)=>{
                        user.password=parseInt(e.detail.value!) 
                        setUser(user)    
                    }}>Password: </IonInput>
                    <br />
                    <IonButton
                    onClick={()=>{
                        if(user.email==="" || user.password===0){
                            presentAlert({
                                header:"Error",
                                message: "Verify User and Password Area",
                                buttons: ["OK"]
                            })
                        }else{
                            refetch();
                            {data?.map((dataUser: any)=>{
                                if(dataUser.email===user.email) {
                                    if(dataUser.password===user.password){
                                        //Abrir el menu con el id de usuario
                                    }
                                } 
                            })}
                            
                        }
                    }}>Log In</IonButton>
                    

                </IonCardContent>

            </IonCardHeader>

        </IonCard>
);
};

export default FormLoginUser;