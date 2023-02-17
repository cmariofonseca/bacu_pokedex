import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  form!: FormGroup;
  pokemonName!: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private storeService: StoreService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.setValueChanges();
  }

  setValueChanges() {
    this.form.valueChanges.subscribe((value) => {
      this.pokemonName = value.name;
    });
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: [''],
    });
  }

  toPokemonDetail() {
    if (this.form.get('name')?.value) {
      this.storeService.setPokemonName(this.pokemonName);
      this.router.navigate(['/detail']);
    }
  }
}
