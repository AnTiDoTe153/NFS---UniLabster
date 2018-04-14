import { Injectable } from '@angular/core';
import { Http, RequestMethod, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { Headers } from '@angular/http';
import { Subject } from 'rxjs/Rx';


export class RequestProviderOptions {
  method: RequestMethod;
  url: string;
  params = {};
  data = {};
}

@Injectable()
export class RequestProvider {

  private errors: Observable<any>;
  private errorsSubject = new Subject<any>();

  private pendingRequestsSubject = new Subject<number>();
  private pendingRequestsCount = 0;
  private pendingRequests: Observable<number>;

  constructor(private _http: Http,
  ) {
      this.errors = this.errorsSubject.asObservable();
      this.pendingRequests = this.pendingRequestsSubject.asObservable();

      this.registerErrorHandler();
  }



  buildGet(url: string, handleError?: boolean): Observable<Response> {
      let options = new RequestProviderOptions();
      options.method = RequestMethod.Get;
      options.url = encodeURI(url);
      return this.request(options, true, handleError);
  }

  buildPost(url: string, content: any, handleError?: boolean): Observable<Response> {

      let options = new RequestProviderOptions();
      options.method = RequestMethod.Post;
      options.url = encodeURI(url);
      options.data = content;
      console.log("url: " + options.url + "data" + options.data);
      return this.request(options, true, handleError);
  }

  getHeaders(isJson: boolean): Headers {
      let headers = new Headers();
      if (isJson) {
          headers.append('Content-Type', 'application/json');
      }
      return headers;
  }

  private request(options: RequestProviderOptions, isJson: boolean,
      handleError?: boolean): Observable<any> {
      options.method = (options.method || RequestMethod.Get);
      options.url = (options.url || '');
      options.params = (options.params || {});
      options.data = (options.data || {});

      let requestOptions = new RequestOptions();
      requestOptions.method = options.method;
      requestOptions.url = options.url;
      requestOptions.headers = this.getHeaders(isJson);
      requestOptions.body = JSON.stringify(options.data);

      this.pendingRequestsSubject.next(++this.pendingRequestsCount);

      let stream = this._http.request(options.url, requestOptions)
          .catch((error: any) => {
              if (handleError === null || typeof (handleError) === 'undefined') {
                  handleError = true;
              }

              if (handleError === true) {
                  this.errorsSubject.next(error);
              }
              return Observable.throw(error);
          }).finally(() => {
              this.pendingRequestsSubject.next(--this.pendingRequestsCount);
          });

      return stream;
  }

  private registerErrorHandler() {
      this.errors.subscribe(
          (err: any) => {
              this.handleError(err);
          }
      );
  }

  private handleError(err: any) {
      try {
          JSON.parse(err._body);
      } catch (e) {
          // not a error
          if (err.status === 502) {
          } else if (err.status === 504) {
          } else {
              console.group('RequestErrorHandler');
              console.log(err.status, 'status code detected');
              console.dir(err);
              console.groupEnd();
          }
      }
  }
}