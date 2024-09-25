import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosAlbumComponent } from './fotos-album.component';

describe('FotosAlbumComponent', () => {
  let component: FotosAlbumComponent;
  let fixture: ComponentFixture<FotosAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FotosAlbumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FotosAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
