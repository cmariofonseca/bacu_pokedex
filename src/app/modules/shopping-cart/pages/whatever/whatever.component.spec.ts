import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhateverComponent } from './whatever.component';

describe('WhateverComponent', () => {
  let component: WhateverComponent;
  let fixture: ComponentFixture<WhateverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhateverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhateverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
