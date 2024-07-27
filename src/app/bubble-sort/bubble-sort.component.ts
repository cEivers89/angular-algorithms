import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Bubble Sort is the simplest sorting algorithm that works by repeatedly 
 * swapping the adjacent elements if they are in wrong order.
 * 
 * Time Complexity: O(n^2) where n is the number of elements in the array
 * Space Complexity: O(1) as it uses a constant amount of space
 * 
 * @param arr Array of numbers to be sorted
 * @returns Sorted array
 * 
 * @example
 * bubbleSort([64, 34, 25, 12, 22, 11, 90]); 
 * Output: [11, 12, 22, 25, 34, 64, 90]
 */

@Component({
  selector: 'app-bubble-sort',
  standalone: true,
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.css'],
  imports: [CommonModule, FormsModule]
})
export class BubbleSortComponent {
  public unsortedArray: number[] = [];
  public sortedArray: number[] = [];
  public currentIteration: number = 1;
  public correctPos: boolean[] = [];
  public inputArray: string = '';
  public currentI: number = -1;
  public currentJ: number = -1;

  constructor() {}

  animateBubbleSort(arr: number[]): void {
    this.correctPos = new Array(arr.length).fill(false);
    let i = 0;

    const sortStep = () => {
      if (i < arr.length - 1) {
        let j = 0;
        const innerStep = () => {
          if (j < arr.length - i - 1) {
            this.currentI = i;
            this.currentJ = j;
            if (arr[j] > arr[j + 1]) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
            this.sortedArray = [...arr];
            
            j++;
            setTimeout(innerStep, 500); // Pause for 500ms for each step
          } else {
            this.correctPos[arr.length - i - 1] = true; // Mark the last element of this pass as sorted
            i++;
            setTimeout(sortStep, 500); // Pause for 500ms for each step
          }
        };
        this.currentIteration++;
        innerStep();
      } else {
        this.correctPos[0] = true; // Mark the first element as sorted
        this.currentI = -1;
        this.currentJ = -1;
        
      }
    };
    sortStep();
  }

  startSorting() {
    this.unsortedArray = this.inputArray.split(',').map(num => parseInt(num.trim(), 10)).filter(num => !isNaN(num));

    if (this.unsortedArray.length > 20) {
      alert('Please enter a maximum of 20 numbers');
      return;
    }

    this.sortedArray = [...this.unsortedArray];
    this.currentIteration = 1;
    this.correctPos = new Array(this.unsortedArray.length).fill(false);
    this.animateBubbleSort([...this.sortedArray]);
  }

  restartAnimation() {
    this.currentIteration = 1;
    this.sortedArray = [...this.unsortedArray];
    this.correctPos = new Array(this.unsortedArray.length).fill(false);
    this.animateBubbleSort([...this.sortedArray]);
  }
}