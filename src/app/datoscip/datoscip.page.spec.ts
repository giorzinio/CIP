import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatoscipPage } from './datoscip.page';

describe('DatoscipPage', () => {
  let component: DatoscipPage;
  let fixture: ComponentFixture<DatoscipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatoscipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatoscipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
