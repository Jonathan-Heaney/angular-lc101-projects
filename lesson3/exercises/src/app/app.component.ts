import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Exercises: Angular Lesson 3";

  color = "green";
  height = 0;
  width = 0;
  message = "Space shuttle ready for takeoff!";

  takeoffEnabled: boolean = true;

  handleTakeoff() {
    let result = window.confirm(
      "Are you sure the shuttle is ready for takeoff?"
    );
    if (result) {
      this.color = "blue";
      this.height = 10000;
      this.width = 0;
      this.message = "Shuttle in flight.";
    }
  }

  handleLanding(img) {
    alert("The shuttle is landing. Landing gear engaged.");
    this.message = "The shuttle has landed.";
    this.color = "green";
    this.height = 0;
    this.width = 0;
    img.style.bottom = "0px";
  }

  abortMission(img) {
    let result = window.confirm("Are you sure you want to abort the mission?");
    if (result) {
      this.color = "red";
      this.height = 0;
      this.message = "Mission aborted.";
      img.style.bottom = "0px";
    }
  }

  moveRocket(img, direction) {
    if (direction === "right") {
      let movement = parseInt(img.style.left) + 10 + "px";
      img.style.left = movement;
      this.width = this.width + 10000;
    } else if (direction === "left") {
      let movement = parseInt(img.style.left) - 10 + "px";
      img.style.left = movement;
      this.width = this.width - 10000;
    } else if (direction === "up") {
      let movement = parseInt(img.style.bottom) + 10 + "px";
      img.style.bottom = movement;
      this.height = this.height + 10000;
    } else if (direction === "down") {
      let movement = parseInt(img.style.bottom) - 10 + "px";
      img.style.bottom = movement;
      this.height = this.height - 10000;
    }
  }

  edgeWarning() {
    if (
      this.height < 0 ||
      this.width < 0 ||
      this.height > 330000 ||
      this.width > 460000
    ) {
      this.color = "orange";
    } else {
      this.color = "blue";
    }
  }
}
