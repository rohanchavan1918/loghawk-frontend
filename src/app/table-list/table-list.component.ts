import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../services/api-services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MatchType } from 'src/enum/matchType.enum';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  tagsData: any[] = [];
  tagRules: any[] = [];
  addTagRuleForm: FormGroup;
  tagId: number;
  showForm: boolean = false;

  public TestEnum = MatchType;

  constructor(
    private apiService: ApiServicesService,
    private fb: FormBuilder
  ) { }


  ngOnInit() {
    this.initializeForm()
    this.apiService.getAllTags().subscribe((data:any [])=>{
      console.log(data);
      this.tagsData = data;
      // this.articles = data['articles'];
    });
  }

  initializeForm() {
    this.addTagRuleForm = this.fb.group({
      matchType: [null, Validators.required],
      matchValue: [null, Validators.required],
      priority: [null, Validators.required]
      // Name: [null, [Validators.required, Validators.minLength(5)]],
      // City: [null, [Validators.required, Validators.minLength(3)]],
    })
  }

  submitMatchTypeForm() {
    
    const formvalue =  this.addTagRuleForm.getRawValue()
    console.log(formvalue);

    let payload = new tagRules();

    payload.match_type = formvalue.matchType; 
    payload.match_value = formvalue.matchValue; 
    payload.priority = +formvalue.priority; 
    payload.tag_id = this.tagId; 

    this.apiService.addTagRules(payload)
    .subscribe((response: any) => {
      console.log(response);
    });
  }

}

export enum MatchType {
	contains = "Contains",
	starts_with = "Starts With",
	ends_with = "Ends With",
	regex = "Regex",
}



export class tagRules {
  match_type: string;
  match_value: string;
  priority: number;
  tag_id: number;
}