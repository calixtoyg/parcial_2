import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MateriaService} from '../../services/materia.service';
import {Materia} from '../../model/materia';

@Component({
  selector: 'app-alta-materia',
  templateUrl: './alta-materia.component.html',
  styleUrls: ['./alta-materia.component.css']
})
export class AltaMateriaComponent implements OnInit {
  cuatrimestres: ['1º Cuatri', '2º Cuatri', '3º Cuatri', '4º Cuatri'];
  years: ['2020', '2021', '2022', '2023', '2024', '2025', '2026'];
  profesor = 'profesor';
  materiaForm: FormGroup;

  constructor(private fb: FormBuilder, private materiaService: MateriaService) { }

  ngOnInit(): void {
    this.materiaForm = this.fb.group({
      materia: ['', Validators.required],
      cuatrimestre: ['', Validators.required],
      cupo: ['', Validators.required],
      email: ['', Validators.required],
      ano: ['', Validators.required],
    });
  }

  setSelectedProfesor({email}: User) {
    this.materiaForm.setValue({email});
  }

  submit() {
    if (this.materiaForm.valid) {
      const materia = {} as Materia;
      materia.ano = this.materiaForm.get('ano').value;
      materia.cuatrimestre = this.materiaForm.get('cuatrimestre').value;
      materia.cupo = this.materiaForm.get('cupo').value;
      materia.email = this.materiaForm.get('email').value;
      materia.materia = this.materiaForm.get('materia').value;
      this.materiaService.saveMateria(materia);
    }
  }
}
