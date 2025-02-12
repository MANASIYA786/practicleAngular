import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-increment',
  imports: [FormsModule,NgIf,CommonModule],
  templateUrl: './increment.component.html',
  styleUrl: './increment.component.css'
})
export class IncrementComponent {
// Array to store the list of items (for demonstration purposes)
items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
];

// For adding a new item
newItemName: string = '';

// Edit variables
editItemId: number | null = null;
editItemName: string = '';

// Add new item to the list
addItem() {
  if (this.newItemName.trim()) {
    const newItem = {
      id: this.items.length + 1,
      name: this.newItemName
    };
    this.items.push(newItem);
    this.newItemName = ''; // Reset input field
  }
}

// Prepare for editing an item
editItem(itemId: number, itemName: string) {
  this.editItemId = itemId;
  this.editItemName = itemName;
}

// Update an existing item
updateItem() {
  if (this.editItemName.trim()) {
    const item = this.items.find(item => item.id === this.editItemId);
    if (item) {
      item.name = this.editItemName;
      this.resetEdit();
    }
  }
}

// Delete an item
deleteItem(itemId: number) {
  this.items = this.items.filter(item => item.id !== itemId);
}

// Reset the edit mode
resetEdit() {
  this.editItemId = null;
  this.editItemName = '';
}

}
