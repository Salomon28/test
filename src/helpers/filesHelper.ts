
import  {Projet} from '../model/projet';

export function getRootPath() {
  return './assets/pictures/';
}

export function getProjectsRootPath(){
  return './assets/projets/'
}

export function getDocumentsRootPath() {
  return './assets/documents/';
}

export function getFilesExtension() {
  return '.png';
}

export function getPictures() {
  const outputArray = [
    'logo_white',
    'logo_grey',
    'heavy_image'
  ];

  return outputArray;
}


export function getProjets() {
  const outputArray = [
    new Projet('Ceci est une application pour Enedis pour aider les techniciens à planifier leurs journées',2, 'maJournee/'),
    new Projet('Ceci est une application pour Enedis pour aider les techniciens à planifier leurs journées',2,'monBI/'),
    new Projet('Ceci est une application pour Enedis pour aider les techniciens à planifier leurs journées',2,'dipnn/'),
    ];

  return outputArray;
}

export function getDocuments(){
  const outputArray = [
    'file1.pdf',
    'file2.pdf',
    'file3.png'
  ];

  return outputArray;
}
