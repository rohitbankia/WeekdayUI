import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DisplayComponent } from './display.component';

describe('DisplayComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        DisplayComponent
      ],
    }).compileComponents();
  }));

});
