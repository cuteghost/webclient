import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {
  invoices: any[] = [];

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.fetchInvoices();
  }

  fetchInvoices(): void {
    this.invoiceService.getInvoices().subscribe((invoices) => {
      this.invoices = invoices;
    });
  }
  getStatusClass(status: string): any {
    switch (status) {
      case 'Partially Paid':
        return { 'custom-badge': true, 'status-orange': true };
      case 'Paid':
        return { 'custom-badge': true, 'status-green': true };
      case 'Unpaid':
        return { 'custom-badge': true, 'status-red': true };
      default:
        return {}; // No specific class
    }
  }

}
