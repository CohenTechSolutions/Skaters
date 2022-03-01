import { Component, OnInit } from '@angular/core';
import { Pagamento } from 'src/app/models/pagamento';
import { PagSeguroService } from 'src/app/services/pag-seguro.service';

@Component({
  selector: 'compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent implements OnInit {

  constructor(private pagSeguroService: PagSeguroService) { }
  pagamento: Pagamento = new Pagamento();

  ngOnInit(): void {
  }

  realizarPagamento(){
    this.pagSeguroService.cobranca(this.pagamento).subscribe(response =>{
      console.log(response);
    }, error =>{
      console.log(error);
    })
  }

}
