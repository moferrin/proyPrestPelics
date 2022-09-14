import { Component, OnInit } from '@angular/core';
import { ReportesService } from 'src/app/services/reportes/reportes.service';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-reporte1',
  templateUrl: './reporte1.component.html',
  styleUrls: ['./reporte1.component.scss']
})
export class Reporte1Component implements OnInit {
  form!: FormGroup;
  reporte1:any;
  constructor(
    public reportes: ReportesService,
    private formBuilder:FormBuilder
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      ciudad: new FormControl(''),
    });
  }


  getReporte1(dato:any) {
    this.reportes.getReporte1(dato).subscribe((res)=>{
      this.reporte1 = res;
      console.log(this.reporte1);
    });
  }

  buscar(event: Event){
    event.preventDefault();
    console.log(this.form.value.ciudad);
    this.getReporte1(this.form.value);
  }
}