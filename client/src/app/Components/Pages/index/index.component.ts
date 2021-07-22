import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  uploadedFiles: Array < File > ;

    constructor(private http: HttpClient) {}

    ngOnInit() {}

    fileChange(element) {
        this.uploadedFiles = element.target.files;
    }

    upload() {
        let formData = new FormData();
        for (var i = 0; i < this.uploadedFiles.length; i++) {
            formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
        }
        this.http.post('http://localhost:5000/api/upload', formData)
        .subscribe((response) => {
            console.log('response received is ', response);
        })
    }


}
