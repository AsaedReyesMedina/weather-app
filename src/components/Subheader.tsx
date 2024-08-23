import { IonHeader, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

const Subheader = () => {
    return (
        <>
            <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">Aplicación del clima</IonTitle>
                </IonToolbar>
            </IonHeader>
        </>
    )
}

export default Subheader