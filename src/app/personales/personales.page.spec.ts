import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonalesPage } from './personales.page';

describe('PersonalesPage', () => {
  let component: PersonalesPage;
  let fixture: ComponentFixture<PersonalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
