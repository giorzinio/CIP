import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginvfPage } from './loginvf.page';

describe('LoginvfPage', () => {
  let component: LoginvfPage;
  let fixture: ComponentFixture<LoginvfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginvfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginvfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
