import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todoList = [
    {
      itemName: 'coding',
      itemDueDate: '13-10-2023',
      itemPriority: 'high',
      itemCategory: 'Work',
      status: 'In-progress' // Added 'status' property
    },
    {
      itemName: 'Design',
      itemDueDate: '14-08-2023',
      itemPriority: 'low',
      itemCategory: 'Work',
      status: 'In-progress' // Added 'status' property
    },
    {
      itemName: 'Shopping',
      itemDueDate: '04-08-2025',
      itemPriority: 'middle',
      itemCategory: 'Personal',
      status: 'In-progress' // Added 'status' property
    },
    {
      itemName: 'Workout',
      itemDueDate: '28-08-2024',
      itemPriority: 'high',
      itemCategory: 'Personal',
      status: 'In-progress' // Added 'status' property
    },
  ];

  today: Date = new Date();

  constructor(public modalCtrl: ModalController) {}

  async addTask() {
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage,
    });

    modal.onDidDismiss().then(newTaskObj => {
      console.log(newTaskObj.data);
      const newTask = newTaskObj.data;
      newTask.status = 'In-progress'; // Set the initial status as "In-progress"
      this.todoList.push(newTask);
    });

    await modal.present();
  }

  delete(index: number) {
    this.todoList.splice(index, 1);
  }

  changeStatus(item: any) {
    if (item.status === 'In-progress') {
      item.status = 'Completed';
    }
  }
  
}
