import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //修改构造函数，添加一个 public 的 messageService 属性。 Angular 将会在创建 MessagesComponent 的实例时 把 MessageService 的实例注入到这个属性中。
  //这个 messageService 属性必须是公共属性，因为你将会在模板中绑定到它。
  //Angular 只会绑定到组件的公共属性。
  constructor(public messageService: MessageService) { }

  ngOnInit() {

  }

}
