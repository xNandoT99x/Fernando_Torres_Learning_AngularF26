import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoccerPlayerList } from './soccer-player-list';

describe('SoccerPlayerList', () => {
  let component: SoccerPlayerList;
  let fixture: ComponentFixture<SoccerPlayerList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoccerPlayerList],
    }).compileComponents();

    fixture = TestBed.createComponent(SoccerPlayerList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
