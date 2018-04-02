import { Injectable } from '@angular/core';

/*
  Generated class for the SampleDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SampleDataProvider {


  getData(){

    let footballTeams = [
      {
        title: "Chelsea Football Club",
        stadium: "Stamford Bridge",
        rank:"1",
        description:"Chelsea Football Club is a professional football club in London, England, that competes in the Premier League",
        image: "/assets/imgs/a.jpg",
        link:"https://www.chelseafc.com/"
      },
      {
        title: "Real Madrid",
        stadium: "Santiago Bernabéu Stadium",
        rank:"2",
        description:"Real Madrid Club de Fútbol, commonly known as Real Madrid, or simply as Real, is a professional football club based in Madrid, Spain.",
        image: "/assets/imgs/b.jpg",
        link:"https://www.realmadrid.com/en"
      },
      {
        title: "FC Barcelona",
        stadium: "Camp Nou",
        rank:"3",
        description:"Futbol Club Barcelona, commonly known as Barcelona and familiarly as Barça, is a professional football club based in Barcelona, Catalonia, Spain",
        image: "/assets/imgs/c.jpg",
        link:"https://www.fcbarcelona.com/"
      }
    ];

return footballTeams;

  }

}
