import { Component, OnInit } from '@angular/core';
import { ReportesService } from 'src/app/services/reportes/reportes.service';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule, NgForm} from '@angular/forms';


@Component({
  selector: 'app-reporte4',
  templateUrl: './reporte4.component.html',
  styleUrls: ['./reporte4.component.scss']
})
export class Reporte4Component implements OnInit {
  form!: FormGroup;
  reporte4:any;
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
    });
  }

  getReporte4(dato:any) {
    console.log(dato);
    this.reportes.getReporte4(dato).subscribe((res)=>{
      this.reporte4 = res;
      console.log(res);
    });
  }

  buscar(event: Event){
    event.preventDefault();
    this.getReporte4(this.form.value.anio);
  }

}
