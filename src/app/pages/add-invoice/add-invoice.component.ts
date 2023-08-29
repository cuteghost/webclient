import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/services/invoice.service';
import { FormBuilder, FormGroup, FormArray, Validators, SelectMultipleControlValueAccessor, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.scss']
})
export class AddInvoiceComponent implements OnInit {
  patients: any[] = [];
  treatments: any[] = [];
  invoiceForm!: FormGroup;
  invoiceId: any = 0;

  constructor(private invoiceService: InvoiceService, private formBuilder: FormBuilder) { 
    this.invoiceForm = new FormGroup({
      items: new FormArray([this.createItem()])
    });
  }

  ngOnInit(): void {
    this.fetchTreatments();
    this.fetchPatients();
    
    const currentDate = new Date();
    
    const requestData = {
      createdDate: currentDate,
      dueDate: currentDate,
      amount: 0,
      status: 'string',
      staffId: 9,
      patientId: 19
  };

  // this.invoiceService.initInvoice(requestData).subscribe(
  //   (response) => {
  //       this.invoiceId = response;
  //   },
  //   (error) => {
  //       console.log('Error creating invoice', error);
  //   }
  // );

}
  fetchPatients () {
    this.invoiceService.getPatients().subscribe(
      (res) => {
        this.patients = res;
      },
      (error) => {
        console.log("error")
      }
    );
  }

  addRow(): void {
    const items = this.invoiceForm.get('items') as FormArray | null;
    if (items) {
      items.push(this.createItem());
    }
  }
  
  removeRow(index: number): void {
    const items = this.invoiceForm.get('items') as FormArray | null;
    if (items) {
      items.removeAt(index);
    }
  }

  createItem(): FormGroup {
    return new FormGroup({
      item: new FormControl(0),
      unitCost: new FormControl(0),
    });
  }

  get itemsFormArray(): FormArray {
    return this.invoiceForm.get('items') as FormArray;
  }

  fetchTreatments() {
    this.invoiceService.getTreatments().subscribe(
        (res) => {
            this.treatments = res;
        },
        (error) => {
            console.log("Error fetching treatments", error);
        }
    );
  }

  onTreatmentSelected(el:any,index:number)
  {
    const treatment = this.treatments.find((x:any)=>x.id==el.target.value)
    console.log(treatment);
    if (treatment)
      this.itemsFormArray.at(index).patchValue({unitCost:treatment.price})
  }

  // updateTreatment(selectedTreatmentId: any) {
  //   const treatmentUpdateData = {
  //       invoiceId: `${this.invoiceId}`
  //   };
  //       this.invoiceService.updateTreatment(selectedTreatmentId, treatmentUpdateData).subscribe(
  //         (response) => {
  //             // Update the form control or perform any necessary actions
  //         },
  //         (error) => {
  //             console.log("Error updating treatment", error);
  //         }
  //     );
  // }
}
