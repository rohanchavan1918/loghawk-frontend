import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  tagsData: any[] = [];
  tagRules: any[] = [];
  constructor(private apiService: ApiServicesService) { }


  ngOnInit() {
    this.apiService.getAllTags().subscribe((data:any [])=>{
      console.log(data);
      this.tagsData = data;
      // this.articles = data['articles'];
    });
  }

}
