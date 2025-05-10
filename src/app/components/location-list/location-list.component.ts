import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'type', 'dimension', 'actions'];
  dataSource = new MatTableDataSource<any>();
  totalItems = 0;
  pageSize = 20;
  pageSizeOptions: number[] = [10, 20, 50];
  currentPage = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.loadLocations();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadLocations(): void {
    this.rickAndMortyService.getLocations(this.currentPage + 1).subscribe(data => {
      this.dataSource.data = data.results;
      this.totalItems = data.info.count;
    });
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.loadLocations();
  }
}
