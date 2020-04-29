import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-expo',
  templateUrl: './expo.component.html',
  styleUrls: ['./expo.component.scss']
})
export class ExpoComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  title = ["Words Beast", "Typing Game", "My Website"];
  description = [
    "A project inspired by Tony Buzan's 'The Speed Reading Book' created as one of the first projects. It is a tool that uses a pointer method technique to increase the speed of reading.  It consists of a pointer that slides along a pasted text. A user should follow this element until it reaches the end of the text.",
    "A game is about typing particular words into desginated field. A player has a couple of seconds till the end of time. The game uses a browser memory to store the previous record. ",
    "A website that I created to store items of information associated with my projects and myslef. All the present and future work will be provide in here."
  ];
  images = [
    "../../assets/Portfolio/word_beast.png",
    "../../assets/Portfolio/typing_game.png",
    "../../assets/Portfolio/web_mat.png"
  ];

}
