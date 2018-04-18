import { Component, Prop, Listen } from '@stencil/core';
import { ToastController } from '@ionic/core';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {

  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: ToastController;

  componentDidLoad() {
    /*
      Handle service worker updates correctly.
      This code will show a toast letting the
      user of the PWA know that there is a 
      new version available. When they click the
      reload button it then reloads the page 
      so that the new service worker can take over
      and serve the fresh content
    */
    window.addEventListener('swUpdate', () => {
      this.toastCtrl.create({
        message: 'New version available',
        showCloseButton: true,
        closeButtonText: 'Reload'
      }).then((toast) => {
        toast.present();
      });
    })
  }

  @Listen('body:ionToastWillDismiss')
  reload() {
    window.location.reload();
  }

  render() {
    return (
      <ion-app>
        <main>
          <ion-tabs class="tabs-icon-top tabs-positive tabs">


            <ion-tab title="Accueil" >
              <app-home />
            </ion-tab>


            <ion-tab title="Galerie" icon='md-ion-add'>
             
                <app-photo />
            </ion-tab>

            <ion-tab class='tab-document' title="Documents" icon-on="documentIcon" icon-off="documentIcon" >
              <ion-page class='show-page has-header'>
                <app-title />
              </ion-page>
            </ion-tab>
          </ion-tabs>

        </main>
      </ion-app>
    );
  }
}
