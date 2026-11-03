import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoccerPlayerDetail } from './soccer-player-detail';

describe('SoccerPlayerDetail', () => {
  let component: SoccerPlayerDetail;
  let fixture: ComponentFixture<SoccerPlayerDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoccerPlayerDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(SoccerPlayerDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
