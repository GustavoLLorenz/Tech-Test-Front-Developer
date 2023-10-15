import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed , tick, fakeAsync} from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { MockPipe } from '../../utils/mocks/mockPipe';
import { Router } from '@angular/router';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let component: HomeComponent;
  let router: Router;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent,MockPipe  ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });


  it('should have a button', () => {
    const buttonElement = fixture.debugElement.query(By.css('button'));

    expect(buttonElement).toBeTruthy();
  });


  it('should navigate to job route on button click', (() => {
    const navigateSpy = jest.spyOn(router, 'navigate')
    component.goToJob();

    expect(navigateSpy).toHaveBeenCalledWith(['job']);
  }));
 
});
