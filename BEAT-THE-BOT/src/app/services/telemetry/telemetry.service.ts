import { Injectable } from '@angular/core';
import * as Md5 from 'md5';
import { HttpClient } from '@angular/common/http';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class TelemetryService {
  public stallId='STA3';
  public ideaId='IDE26';
  public did;
  http: HttpClient;
  baseUrl = 'https://devcon.sunbirded.org/';
  constructor(http: HttpClient) {
    this.http = http;
  }

  public initialize(config) {
    this.did = config.did;
    this.stallId = config.stallId;
    this.ideaId = config.ideaId;
  }

  public badge(data) {
    const badgeTelemetry = {
      eid : 'DC_EARN',
      ets: (new Date()).getTime(),
      did: this.did,
      profileId: data.userId,
      stallId: this.stallId,
      ideaId: this.ideaId,
      mid: '',
      edata: {
        'type': 'BeatTheBot',
        'points': data.points,
        'badges': [data.result]
    }
    };
    badgeTelemetry.mid = badgeTelemetry.eid + ':' + Md5(JSON.stringify(badgeTelemetry));
    const request = {
      url: `${this.baseUrl}content/data/v1/telemetry`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        id: 'api.sunbird.telemetry',
        ver: '3.0',
        params: {
          msgid: UUID.UUID()
        },
        ets: (new Date()).getTime(),
        events: [badgeTelemetry]
      }
    };

    this.http.post(request.url, request.body, { headers: request.headers } ).pipe().subscribe((res) => {
      console.log('response ', res);
    });

  }
}
