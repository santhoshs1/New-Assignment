import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagecartComponent } from './pagecart.component';

describe('PagecartComponent', () => {
  let component: PagecartComponent;
  let fixture: ComponentFixture<PagecartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagecartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagecartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
