import { Component, State } from '@stencil/core';

import { getDocumentsRootPath, getDocuments } from '../../helpers/filesHelper';

@Component({
    tag: 'app-documents',
    styleUrl: 'app-documents.scss'
})
export class AppDocuments {

    @State() element;

    @State() rootPath: string;

    @State() files: string[];

    componentWillLoad() {
        this.rootPath = getDocumentsRootPath();
        this.files = getDocuments();
    }

    componentDidLoad() {
        console.log('The component has been rendered');
    }

    render() {

        return (

            <ion-content>
                <app-title />
                <ion-list>
                    {this.files ? this.files.map((file) => {

                        return <ion-item>
                            <ion-thumbnail item-start class='margined_thumbnail'>
                                <img src={this.rootPath + 'file3.png'} />
                            </ion-thumbnail>
                            <h2>
                                {file}
                            </h2>

                            <a class='openButton' href={this.rootPath + file}>
                                <ion-icon item-right class='openImg' name='open'> </ion-icon>
                            </a>
                        </ion-item>;


                    }) : ""}

                </ion-list>
            </ion-content>

        );
    }
}