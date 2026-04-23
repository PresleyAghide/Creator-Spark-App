import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IdeaDetailsPage } from './idea-details.page';

describe('IdeaDetailsPage', () => {
  let component: IdeaDetailsPage;
  let fixture: ComponentFixture<IdeaDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
