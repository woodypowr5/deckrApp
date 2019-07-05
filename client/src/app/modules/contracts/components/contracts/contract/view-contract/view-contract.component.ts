import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-contract',
  templateUrl: './view-contract.component.html',
  styleUrls: ['./view-contract.component.scss']
})
export class ViewContractComponent implements OnInit {
	pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf'; 

  constructor() { }

  ngOnInit() {
  }

}
