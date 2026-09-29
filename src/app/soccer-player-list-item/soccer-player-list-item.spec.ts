import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoccerPlayerListItem } from './soccer-player-list-item';

describe('SoccerPlayerListItem', () => {
  let component: SoccerPlayerListItem;
  let fixture: ComponentFixture<SoccerPlayerListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoccerPlayerListItem],
    }).compileComponents();

    fixture = TestBed.createComponent(SoccerPlayerListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
