import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginopPage } from './loginop.page';

describe('LoginopPage', () => {
  let component: LoginopPage;
  let fixture: ComponentFixture<LoginopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
