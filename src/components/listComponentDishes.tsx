import { 
    IonCard
    ,IonContent
    ,IonRefresher
    ,IonRefresherContent
    ,IonItem
    ,IonCardSubtitle
    ,IonInput
    ,IonCardHeader
    ,IonCardContent
    ,IonCardTitle
    ,IonButton
    ,useIonAlert
    ,IonPage
    ,RefresherEventDetail
    } from '@ionic/react';
import { useState } from 'react';
type Props={
    dishList:any;
    refetch:any;
    cartList:any;
}

const listComponentDishes= ({ dishList, refetch }:Props) => {
    
    return (
        <IonPage>
       
            <IonContent >
                <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
                    <IonRefresherContent refreshingText="Refreshing...">

                    
                    </IonRefresherContent>
                </IonRefresher>
                {dishList?.map((dish: any)=>{
                    if(dish.state===1){
                        return (
                        
                            <IonCard  key={dish.id} >
                                
                                <IonCardHeader>
                                    <IonCardSubtitle>{dish?.name}</IonCardSubtitle>  
                                    <IonCardContent>
                                        <p>Price : {dish.price}</p>
                                    </IonCardContent>
                                    <IonItem>
                                        
                                    </IonItem>
                                    
                                    

                                    
                                </IonCardHeader>
                                
                            </IonCard>
                        
                        )
                    }        
                })}
            </IonContent>
        </IonPage>
    );
    function doRefresh(event: CustomEvent<RefresherEventDetail>) {
        refetch();
  
        setTimeout(() => {
            event.detail.complete();
    }, 1000);}
};

export default listComponentDishes;