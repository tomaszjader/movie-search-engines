import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEnginesComponent } from './search-engines.component';

describe('SearchEnginesComponent', () => {
  let component: SearchEnginesComponent;
  let fixture: ComponentFixture<SearchEnginesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchEnginesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchEnginesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
