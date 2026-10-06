import { TestBed } from '@angular/core/testing';
import { SoccerPlayer } from './soccer-player';

describe('SoccerPlayer', () => {
  let service: SoccerPlayer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoccerPlayer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
