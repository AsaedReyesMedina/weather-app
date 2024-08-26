import { IonCol, IonContent, IonGrid, IonRow, IonText } from '@ionic/react'
import Subheader from './Subheader'

const Body = () => {
  return (
    <>
      <IonContent fullscreen>
        <Subheader />
        <IonGrid>
          <IonRow >
            <IonCol size='12' >

            </IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>
    </>
  )
}

export default Body