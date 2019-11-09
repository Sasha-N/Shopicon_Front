import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Image } from '../image';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  images;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getImages().subscribe((data)=>{
      this.images = data;
    });
  }
}
