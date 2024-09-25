import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbListaComponent } from './thumb-lista.component';

describe('ThumbListaComponent', () => {
  let component: ThumbListaComponent;
  let fixture: ComponentFixture<ThumbListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThumbListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThumbListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
