import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-expereience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expereience.component.html',
  styleUrl: './expereience.component.css'
})
export class ExpereienceComponent {
  experienceList = [
    {
      title: 'Software Developer',
      company: 'HCL Canada',
      location: 'Toronto, ON',
      period: 'May 2022 - Present',
      description: [
      "Developed and optimized client websites using Angular CLI, enhancing performance, user experience, and overall site functionality. Demonstrated strong analytical skills and meticulous attention to detail in coding and testing, leading to robust and error-free applications. Focused on mobile-first application development.",
      "Experienced in Continuous Integration and Continuous Deployment (CI/CD) methodologies using tools like Jenkins and GitHub for automated build and deployment pipelines",
      "We utilized PL/SQL to write stored procedures and SQL to develop and execute complex queries for database management and data analysis.",
      "Demonstrated strong communication and presentation skills by leading team meetings and delivering presentations to internal and external clients, effectively conveying project updates, technical concepts, and business requirements.",
      "Created plugin customization using C# to implement desired custom features, and created customized reports using Power BI. Deployed multiple projects on Microsoft Azure. Certified in PL 900, PL 200, and PL100 for Power Apps.",
      "He led a P&G project, implementing business requirements and support requests in Power Apps, resulting in an 80% improvement in workflow efficiency. Proficient in JavaScript, TypeScript, and Angular; currently expanding expertise in React, Redux, Webpack, and Jest to enhance front-end development capabilities."
   ] },
    {
      title: 'Software Engineer',
      company: 'Guidewire Software',
      location: 'Mississauga, ON',
      period: 'March 2021 - May 2022',
      description: [
        "Resolved software issues, reducing average resolution time by 20% through efficient use of Salesforce, JIRA, Sentry, and PagerDuty. Gained experience with streaming technologies such as Kafka, Flink, and Spark, utilizing them to manage and process large-scale data streams in real-time environments",
        "Analyzed stack traces and app logs, leading to a 25% improvement in identifying and addressing performance and configuration issues.",
        "Delivered exceptional technical support by effectively communicating with customers in English, conducting online research, and applying strong analytical and problem-solving skills. Ensured high customer satisfaction through attention to detail and teamwork",
        "Experienced in Agile methodology with strong interpersonal skills, fostering collaboration and efficient project delivery"]   }
  ];

  selectedJob = this.experienceList[0];  // Default to the first job

  constructor() { }
  isArray(value: any): value is string[] {
    return Array.isArray(value);
  }
  ngOnInit(): void {
  }

  selectJob(index: number): void {
    this.selectedJob = this.experienceList[index];
  }
}
