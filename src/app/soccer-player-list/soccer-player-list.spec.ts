import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoccerPlayerListComponent } from './soccer-player-list';

describe('SoccerPlayerListComponent', () => {
  let component: SoccerPlayerListComponent;
  let fixture: ComponentFixture<SoccerPlayerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoccerPlayerListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SoccerPlayerListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
