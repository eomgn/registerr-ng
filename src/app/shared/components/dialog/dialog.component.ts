import { HomeService } from './../../services/home.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  public dialogForm!: FormGroup


  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<DialogComponent>, public homeService: HomeService) {}


  ngOnInit(): void {
    this.dialogForm = this.fb.group({
      title: ['',[Validators.required]],
      message: ['',[Validators.required]],
    })
  }

  openCreate() {
    this.homeService.create(this.dialogForm.value).subscribe((data) => {
      this.dialogRef.close()
      this.dialogForm.reset()
      window.location.reload()
    })
  }

  cancel(): void {
    this.dialogRef.close();
    this.dialogForm.reset()
  }
}
