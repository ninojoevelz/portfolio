import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  contactFormGroup: FormGroup;

  constructor(private formBuild: FormBuilder) {
    this.contactFormGroup = this.formBuild.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      message: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
    const skillSectionEl = document.querySelector('.skill-section') as HTMLElement;
    const skillSectionElPos = skillSectionEl.getBoundingClientRect();

    window.addEventListener('scroll', () => {
      if (!skillSectionEl.classList.contains('visible') && (skillSectionElPos.top - (skillSectionElPos.top / 2)) < window.pageYOffset) {
        skillSectionEl.classList.add('visible');
        this.animateCounters();
      }
    });
  }

  onSubmitContact() {}

  private animateCounters() {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }

      const progress = Math.min((timestamp - startTimestamp) / 2000, 1);

      document.querySelectorAll('.counter').forEach(el => {
        el.innerHTML = Math.floor(progress * parseInt(el.getAttribute('data-count') as string)) + '%';
      });

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
}
