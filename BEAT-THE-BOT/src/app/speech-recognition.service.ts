import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SpeechRecognitionService {
baseUrl = 'http://50.1.0.11:3003/translator/translation_en';
  constructor(private http: HttpClient) { }

  getConfig(data) {
    return this.http.post(this.baseUrl, data);
  }
}
