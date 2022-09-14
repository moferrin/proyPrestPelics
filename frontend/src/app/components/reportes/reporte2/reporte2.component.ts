import { Component, OnInit } from '@angular/core';
import { ReportesService } from 'src/app/services/reportes/reportes.service';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule, NgForm} from '@angular/forms';


@Component({
  selector: 'app-reporte2',
  templateUrl: './reporte2.component.html',
  styleUrls: ['./reporte2.component.scss']
})
export class Reporte2Component implements OnInit {
  form!: FormGroup;
  reporte2:any;
  constructor(
    public reportes: ReportesService,
    private formBuilder:FormBuilder) {
      this.buildForm();
     }

  ngOnInit(): void {

  }

  private buildForm(){
    this.form = this.formBuilder.group({
      anio: new FormControl(''),
    });
  }

  getReporte2(dato:any) {
    console.log(dato);
    this.reportes.getReporte2(dato).subscribe((res)=>{
      this.reporte2 = res;
      console.log(res);
    });
  }

  buscar(event: Event){
    event.preventDefault();
    this.getReporte2(this.form.value.anio);
  }


}
