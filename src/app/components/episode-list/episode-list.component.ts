import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss']
})
export class EpisodeListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'air_date', 'episode', 'actions'];
  dataSource = new MatTableDataSource<any>();
  totalItems = 0;
  pageSize = 20;
  currentPage = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.loadEpisodes();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadEpisodes(): void {
    this.rickAndMortyService.getEpisodes(this.currentPage + 1).subscribe(data => {
      this.dataSource.data = data.results;
      this.totalItems = data.info.count;
    });
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.loadEpisodes();
  }
}