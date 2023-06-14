import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {
  categories = ['work', 'personal', 'home'];
  Category: string;
  taskName: string;
  taskPriority: string;
  taskDate: string;
  taskCategory: string;
  taskObject: any;

  constructor(private modalCtrl: ModalController) {
    this.Category = '';
    this.taskName = '';
    this.taskPriority = '';
    this.taskDate = '';
    this.taskCategory = '';
  }

  ngOnInit() {
    
      this.categories = ['work', 'personal', 'home'];
  }
  
  async dismiss() {
    await this.modalCtrl.dismiss(this.taskObject);
  }

  selectedCategory(index: number) {
    this.taskCategory = this.categories[index];
  }

  AddTask() {
    this.taskObject = {
      itemName: this.taskName,
      itemDueDate: this.taskDate,
      itemPriority: this.taskPriority,
      itemCategory: this.taskCategory,
    };

    this.dismiss();
  }
}
