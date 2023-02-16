import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private storeService: StoreService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.setValueChanges();
  }

  setValueChanges() {
    this.form.valueChanges.subscribe((value) => {
      this.storeService.setNamePokemon(value);
    });
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: [''],
    });
  }
}
