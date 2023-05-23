import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../services/crud.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent {
  columnDefs = [
    {
      field: 'img',
      headerName: 'Immagine',
      sortable: true,
      width: 100    
    },
    {
      field: 'id_magento',
      headerName: 'ID Magento',
      sortable: true,
      width: 120,
      filter: true
    },
    {
      field: 'nome_prodotto',
      headerName: 'Nome Prodotto',
      sortable: true,
      width: 150,
      filter: true
    },
    {
      field: 'brand',
      headerName: 'Brand',
      sortable: true,
      width: 90,
      filter: true
    },
    {
      field: 'set_attributi',
      headerName: 'Set tattributi',
      sortable: true,
      width: 120,
      filter: true
    },
    {
      field: 'SKU',
      headerName: 'SKU',
      sortable: true,
      width: 120,
      filter: true
    },
    {
      field: 'SKU_fornitore',
      headerName: 'SKU Fornitore',
      sortable: true,
      width: 120,
      filter: true
    },
    {
      field: 'qnt',
      headerName: 'Qnt.',
      sortable: true,
      width: 80,
      filter: true
    },
    {
      field: 'prezzo',
      headerName: 'Prezzo',
      sortable: true,
      width: 90,
      filter: true
    },
    {
      field: 'attivo',
      headerName: 'Attivo',
      sortable: true,
      width: 80,
      filter: true
    },
    {
      field: 'visibilità',
      headerName: 'Visibilità',
      sortable: true,
      width: 120,
      filter: true
    },
    {
      field: 'tipologia',
      headerName: 'Tipologia',
      sortable: true,
      width: 120,
      filter: true
    },
    {
      field: 'assegnatario',
      headerName: 'Assegnatario',
      sortable: true,
      width: 120,
      filter: true
    },
    {
      field: 'presa_in_carico',
      headerName: 'Presa in carico',
      sortable: true,
      width: 120,
      filter: 'date'
    },
    {
      field: 'completamento',
      headerName: 'Completamento',
      sortable: true,
      width: 120,
      filter: true
    },
    {
      field: 'lingue',
      headerName: 'Lingue',
      sortable: true,
      width: 120,
      filter: true
    },
    {
      field: 'stato_revisione',
      headerName: 'Stato revisione',
      sortable: true,
      width: 120,
      filter: true
    },
    {
      field: 'score',
      headerName: 'Score',
      sortable: true,
      width: 90,
      filter: true
    },
    {
      field: 'sync',
      headerName: 'Sync',
      sortable: true,
      width: 90,
      filter: true
    }
  ];



  rowData: any = [];

  productList = [];
  productListSubscribe: any;

  constructor(private crudService: CRUDService) {

  }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.productListSubscribe = this.crudService.loadProducts().subscribe((res: any) => {
      this.productList = res;
      // output the database table
      //console.log('res', res);

      this.rowData = res;
    })
  }

}

