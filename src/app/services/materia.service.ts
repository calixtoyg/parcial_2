import { Injectable } from '@angular/core';
import {Materia} from '../model/materia';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  constructor() { }

  saveMateria(materia: Materia): Promise<Materia> {
    // Todo change eventualy
    return new Promise((resolve, reject) => {
      const materias =  JSON.stringify(localStorage.getItem('materia')) as unknown as Materia[] ;
      if (materias) {
        materias.push(materia);
        localStorage.setItem('materia', JSON.stringify(materias));
        return resolve(materia);
      }
      return reject('Error');
    });
  }
}
