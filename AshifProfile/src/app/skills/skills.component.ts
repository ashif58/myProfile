import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit{
  skills=["ASP.NET MVC","ASP.NET Core","Web API Development","C#","JavaScript","HTML","CSS","Angular","Entity Framework","SQL Server","ERP Software"];
  skillPositions : string[][] =[];
  // isDragging = false;
  currentlyDragging: number | undefined;
  mouseX: number | undefined;
  mouseY: number | undefined;

  ngOnInit() {
    for (let i=0; i < this.skills.length; i++){
      let pos : string[] =[i * (90 / this.skills.length) + '%',((i+1) % 3) * 33 + '%', this.getRandomRotation()];
      this.skillPositions.push(pos);
        
      

    }

  }
  getRandomRotation(){
    let randomVal =(Math.random() * 30) - 15;
    return `rotate(${randomVal}deg)`;
  }

  startDragging(i: number){
    this.currentlyDragging = i;
    console.log("start dragging");
  }
mouseMove(event : MouseEvent) {
  console.log("mouse move");
  if(this.currentlyDragging === undefined) {return; }
  this.skillPositions[this.currentlyDragging][0] = event.pageX - 70 + 'px';
  this.skillPositions[this.currentlyDragging][1] = event.pageY - 30 + 'px';

  this.mouseX =event.pageX - 70;
  this.mouseY = event.pageY - 30;

  }
  stopDragging(){
    this.currentlyDragging = undefined;
  }

}

