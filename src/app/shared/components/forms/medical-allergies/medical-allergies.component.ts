import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { find, get, pull } from 'lodash';

@Component({
  selector: 'app-medical-allergies',
  templateUrl: './medical-allergies.component.html',
  styleUrls: ['./medical-allergies.component.scss']
})
export class MedicalAllergiesComponent implements OnInit {

  @ViewChild('tagInput') tagInputRef: ElementRef;
  tags: string[] = ['html', 'Angular'];
  medicalAllergiesForm: FormGroup;
  editAllergies = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.medicalAllergiesForm = this.fb.group({
      tag: [undefined],
    });
  }

  // Tags Functionality.
  focusTagInput(): void {
    this.tagInputRef.nativeElement.focus();
  }

  onKeyUp(event: KeyboardEvent): void {
    const inputValue: string = this.medicalAllergiesForm.controls.tag.value;
    if (event.code === 'Backspace' && !inputValue) {
      this.removeTag();
      return;
    } else {
      if (event.code === 'Comma' || event.code === 'Space') {
        this.addTag(inputValue);
        this.medicalAllergiesForm.controls.tag.setValue('');
      }
    }
  }

  addTag(tag: string): void {
    if (tag[tag.length - 1] === ',' || tag[tag.length - 1] === ' ') {
      tag = tag.slice(0, -1);
    }
    if (tag.length > 0 && !find(this.tags, tag)) {
      this.tags.push(tag);
    }
  }

  removeTag(tag?: string): void {
    if (!!tag) {
      pull(this.tags, tag);
    } else {
      this.tags.splice(-1);
    }
  }
  // Tags Functionality.

  ExpandAllergiesEdit(): void{
    this.editAllergies = !this.editAllergies;
  }

}
