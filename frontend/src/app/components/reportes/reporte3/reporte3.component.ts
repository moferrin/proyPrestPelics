import { Component, OnInit } from '@angular/core';
import { ReportesService } from 'src/app/services/reportes/reportes.service';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule, NgForm} from '@angular/forms';



@Component({
  selector: 'app-reporte3',
  templateUrl: './reporte3.component.html',
  styleUrls: ['./reporte3.component.scss']
})
export class Reporte3Component implements OnInit {
  form!: FormGroup;
  reporte3:any;
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
      anio: new FormControl(''),
      ciudad: new FormControl(''),
    });
  }

  getReporte3(dato:any) {
    console.log(dato);
    this.reportes.getReporte3(dato).subscribe((res)=>{
      this.reporte3 = res;
      console.log(res);
    });
  }

  buscar(event: Event){
    event.preventDefault();
    this.getReporte3(this.form.value);
  }

}
