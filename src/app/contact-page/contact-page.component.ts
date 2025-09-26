import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css',
})
export class ContactPageComponent {
  currentIndex = 0;
  intervalId: any;
  images: string[] = [
    'assets/images/angular.png',
    'assets/images/react.png',
    'assets/images/HTML.png',
  ];
  ngOnInit() {
    this.intervalId = setInterval(() => this.next(), 2000);
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  contactForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const templateParams = this.contactForm.value;

      emailjs
        .send(
          'service_l59of7d',
          'template_3if9n72',
          this.contactForm.value,
          '6rB4QasMNvboyHkUf'
        )
        .then(
          (response) => {
            alert('Message sent successfully!');
            this.contactForm.reset();
          },
          (error) => {
            alert('Failed to send message.');
          }
        );
    } else {
      alert('Please fill all fields correctly.');
    }
  }
}
