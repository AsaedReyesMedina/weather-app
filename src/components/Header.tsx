import { IonHeader, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

const Header = () => {
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Aplicación del clima</IonTitle>
                </IonToolbar>
                <IonToolbar>
                    <IonSearchbar placeholder="Buscar por ciudad"></IonSearchbar>
                </IonToolbar>
            </IonHeader>
        </>
    )
}

export default Header