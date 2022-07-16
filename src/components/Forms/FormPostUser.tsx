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
    post:any;
}

const FormPostUser= ({ post }:Props) => {
    const [presentAlert]= useIonAlert();
    const [user, setUser]= useState({
        email:""
        ,firstName:""
        ,lastName:""
        ,direction:""
        ,password: 0
    })
    return (
        <IonCard>
        
            <IonCardHeader>
                <IonCardTitle> User Registry</IonCardTitle>
                <IonCardContent>
                    <IonInput
                    value={user.email}
                    onIonChange={(e)=>{
                        user.email= e.detail.value!
                        setUser(user)    
                    }}>Email: </IonInput>
                    <br />
                    <IonInput
                    value={user.firstName}
                    onIonChange={(e)=>{
                        user.firstName= e.detail.value!
                        setUser(user)    
                    }}>FirstName: </IonInput>
                    <br />
                    <IonInput
                    value={user.lastName}
                    onIonChange={(e)=>{
                        user.lastName= e.detail.value!
                        setUser(user)    
                    }}>LastName: </IonInput>
                    <br />
                    <IonInput
                    value={user.direction}
                    onIonChange={(e)=>{
                        user.direction= e.detail.value!
                        setUser(user)    
                    }}>Direction: </IonInput>
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
                            post(user);
                            setUser({
                                email:""
                                ,firstName:""
                                ,lastName:""
                                ,direction:""
                                ,password: 0
                            });
                        }
                    }}>Register</IonButton>
                    

                </IonCardContent>

            </IonCardHeader>

        </IonCard>
);
};

export default FormPostUser;