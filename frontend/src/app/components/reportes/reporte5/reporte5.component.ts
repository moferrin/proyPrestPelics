import { Component, OnInit } from '@angular/core';
import { ReportesService } from 'src/app/services/reportes/reportes.service';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule, NgForm} from '@angular/forms';


@Component({
  selector: 'app-reporte5',
  templateUrl: './reporte5.component.html',
  styleUrls: ['./reporte5.component.scss']
})
export class Reporte5Component implements OnInit {
  form!: FormGroup;
  reporte5:any;
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
      nombre: new FormControl(''),
      apellido: new FormControl(''),
    });
  }

  getReporte5(dato:any) {
    console.log(dato);
    this.reportes.getReporte5(dato).subscribe((res)=>{
      this.reporte5 = res;
      console.log(res);
    });
  }

  buscar(event: Event){
    event.preventDefault();
    this.getReporte5(this.form.value);
  }

}
