import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

interface ExperienceItem {
  name: string;
  src: string;
  index?: number;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  private experienceItems: ExperienceItem[] = [
    {name: "Kafka", src: "/kafka.png"},
    {name: "RabbitMQ", src: "rabbit.png"},
    {name: "AWS", src: "aws.png"},
    {name: "Golang", src: "go.png"},
    {name: "PostgreSQL", src: "/postgresql.png"},
    {name: "Redis", src: "/redis.png"},
    {name: "MongoDB", src: "/mongo.png"},
    {name: "Javascript", src: "/javascript.png"},
    {name: "Typescript", src: "/typescript.png"},
    {name: "React", src: "/react.png"},
    {name: "Next.js", src: "/next.png"},
    {name: "Tailwind CSS", src: "/tailwindcss.png"},
    {name: "Kubernetes", src: "k8s.png"},
    {name: "Docker", src: "docker.png"},
    {name: "GIT", src: "/git.png"},
    {name: "Python", src: "/python.png"},
    {name: "Nest JS", src: "/nestjs.png"},
    {name: "Node JS", src: "/nodejs.png"},
  ];

  get getExperience(): ExperienceItem[] {
    return Array.from({ length: 10 }, (_, i: number) =>
      this.experienceItems.map((item: ExperienceItem, index: number) => ({
        ...item, index: i * this.experienceItems.length + index
      }))
    ).flat();
  }
}
