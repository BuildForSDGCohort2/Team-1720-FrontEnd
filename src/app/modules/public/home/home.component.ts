import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  closeResult = '';
  helpRequestForm: FormGroup;
  findDoctorForm: FormGroup;
  findHospitalForm: FormGroup;
  submittedGetHelp = false;
  submittedFindDoc = false;
  submittedFindHosp = false;
  showFindDocForm = true;
  showFindHospital = true;
  autoCompleteDocs = [];
  autoCompleteHosp = [];

  doctorsNames = [
    { docId: 1, doctorName: 'Amare Abdoul', location: 'Johannesburg', officeNumber: '+27 (0) 12 345 6789', typeOfDoctor: 'General Practioner' },
    { docId: 2, doctorName: 'Abidemi Abeni', location: 'Johannesburg', officeNumber: '+27 (0) 12 345 6789', typeOfDoctor: 'Dentist' },
    { docId: 3, doctorName: 'Abidun Chidum', location: 'Cape Town', officeNumber: '+27 (0) 12 345 6789', typeOfDoctor: 'Psychologist' },
    { docId: 4, doctorName: 'Amare Abdoul', location: 'Johannesburg', officeNumber: '+27 (0) 12 345 6789', typeOfDoctor: 'Psychatrist' },
  ];

  hospitalNames = [
    { doctorName: 'Amare Abdoul', location: 'Johannesburg', officeNumber: '+27 (0) 12 345 6789' },
    { doctorName: 'Abidemi Abeni', location: 'Johannesburg', officeNumber: '+27 (0) 12 345 6789' },
    { doctorName: 'Abidun Chidum', location: 'Cape Town', officeNumber: '+27 (0) 12 345 6789' },
    { doctorName: 'Amare Abdoul', location: 'Johannesburg', officeNumber: '+27 (0) 12 345 6789' },
  ];

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // Building the forms.
    this.helpRequestForm = this.formBuilder.group({
      full_name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      help_description: ['', Validators.required],
      accepted_terms_and_conditions: [null, Validators.required]
    });

    this.findDoctorForm = this.formBuilder.group({
      doctor_name: ['', Validators.required]
    });

    this.findHospitalForm = this.formBuilder.group({
      hospital_name: ['', Validators.required]
    });

  }

  open(content): any {
    this.modalService.open(content,
      { ariaLabelledBy: 'modal-basic-title', windowClass: 'modal-dialog-centered' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult =
          `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  openRequest(content): any {
    this.modalService.open(content,
      { ariaLabelledBy: 'modal-basic-title', windowClass: 'modal-dialog-centered' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult =
          `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  get getHelpf(): any { return this.helpRequestForm; }
  get getDocf(): any { return this.findDoctorForm; }
  get getHospf(): any { return this.findHospitalForm; }

  onSubmitGetHelp(): any {
    this.submittedGetHelp = true;

    // stop here if form is invalid
    if (this.helpRequestForm.invalid) {
      return;
    }

    console.log(this.helpRequestForm.value);
    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.dynamicForm.value, null, 4));
  }

  onSubmitFindDoctor(): any{
    this.submittedGetHelp = true;

    // stop here if form is invalid
    if (this.findDoctorForm.invalid) {
      return;
    }

    console.log(this.findDoctorForm.value);
  }

  onSubmitFindHospital(): any{
    this.submittedFindHosp = true;

    // stop here if form is invalid
    if (this.findHospitalForm.invalid) {
      return;
    }

    console.log(this.findHospitalForm.value);
  }

  onReset(): any {
    // reset whole form back to initial state
    this.submittedGetHelp = false;
    this.helpRequestForm.reset();
  }

  public onDoctorAutoComplete($event, val): any{
    this.autoCompleteDocs = [];
    const enteredVal = val;
    const availableDocs = this.doctorsNames.filter((doc) => {
      if (doc.doctorName.toLowerCase().includes(enteredVal.toLowerCase()) || doc.location.toLowerCase().includes(enteredVal.toLowerCase()) || doc.typeOfDoctor.toLowerCase().includes(enteredVal.toLowerCase())){
        return doc;
      }
    });
    this.autoCompleteDocs = enteredVal.length < 1 ? [] : availableDocs;
  }

  public onHospitalAutoComplete($event, val): any{
    this.autoCompleteDocs = [];
    const enteredVal = val;
    const availableHosp = this.hospitalNames.filter((doc) => {
      if (doc.doctorName.toLowerCase().includes(enteredVal.toLowerCase()) || doc.location.toLowerCase().includes(enteredVal.toLowerCase())){
        return doc;
      }
    });
    console.log(availableHosp);
    this.autoCompleteHosp = enteredVal.length < 1 ? [] : availableHosp;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  public docAutoCompleteSelect(docId): any{
    this.showFindDocForm = false;
  }

  public backToSearch(): any {
    this.showFindDocForm = true;
  }

  public hospitalAutoCompleteSelect(): any{
    this.showFindHospital = false;
  }

  public backToSearchHospital(): any {
    this.showFindHospital = true;
  }

}
