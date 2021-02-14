import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventdetPage } from './eventdet.page';

describe('EventdetPage', () => {
  let component: EventdetPage;
  let fixture: ComponentFixture<EventdetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventdetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventdetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
