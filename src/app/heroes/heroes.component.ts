import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  oml: Hero = {
    id: 1,
    name: '欧名亮'
  };
  // heroes =HEROES
  heroes: Hero[]

  selectedHero: Hero;
  myVal:number = 0;
   deepClone(obj:Hero):Hero{
  let _obj:any = JSON.stringify(obj),
    objClone :Hero= JSON.parse(_obj);
  return objClone
}
  changeValue($event):void {
    console.log($event.target.value);// 输出选中的值设给myVal
    this.myVal = $event.target.value;
  }

  onSelect(hero: Hero): void {
    // this.selectedHero =hero)
     this.selectedHero =this.deepClone(hero);
    //在教程里，是写的  this.selectedHero =hero; 看上去很正常，但是在实际操作中，会发现，子组件的prop值改变后，父组件发生了改变
    //问题来源：引用类型的浅拷贝 导致的。
  }
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
    this.heroes.push(this.oml)
  }


  constructor(private heroService: HeroService) { }

  ngOnInit() {
    // HEROES
    this.getHeroes();
  }

}
