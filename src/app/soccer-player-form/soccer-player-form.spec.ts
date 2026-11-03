import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoccerPlayerForm } from './soccer-player-form';

describe('SoccerPlayerForm', () => {
  let component: SoccerPlayerForm;
  let fixture: ComponentFixture<SoccerPlayerForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoccerPlayerForm],
    }).compileComponents();

    fixture = TestBed.createComponent(SoccerPlayerForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
