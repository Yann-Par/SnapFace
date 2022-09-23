import {Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';


@Injectable({
  providedIn:'root'
})

export class FaceSnapsService {


  faceSnaps: FaceSnap[] = [
    {
      id : 1,
      title : "Pikachu",
      description : "Mon meilleur ami depuis tout petit !",
      imgUrl : "https://assets.puzzlefactory.com/puzzle/254/191/original.jpg",
      createdDate : new Date(),
      snaps : 10,
      location: "paris"
  },
  {
    id : 2,
    title : "bulbizare",
    description : "Mon meilleur ami depuis tout petit !",
    imgUrl : "https://www.nationhive.com/sites/www.nationhive.com/files/pokemon-go/pokemon-001-bulbizarre.png",
    createdDate : new Date(),
    snaps : 0,
    location : "la montagne"
  },
  {
    id : 3,
    title :"Salameche",
    description :"Mon meilleur ami depuis tout petit !",
    imgUrl :"http://pm1.narvii.com/7372/24c2ec236d79eeaec1400297a2378e44b3e0c02br1-400-400v2_00.jpg",
    createdDate :new Date(),
    snaps :0
  }


  ];

  getAllFaceSnaps(): FaceSnap[]{
    return this.faceSnaps;
  }


  getFaceSnapById(faceSnapId: number) : FaceSnap{
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if(!faceSnap) {
      throw new Error('FaceSnap not found!');
    }else{
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
}




}
