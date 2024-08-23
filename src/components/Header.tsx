import { IonHeader, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

const Header = () => {
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Aplicación del clima</IonTitle>
                </IonToolbar>
            </IonHeader>
        </>
    )
}

export default Header