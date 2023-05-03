import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, tap } from 'rxjs';
import { saveAs } from 'file-saver'
import { environment } from './../../../environments/environment'

interface File {
  originalname: string;
  filename: string;
  location: string;
}

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(
    private http: HttpClient
  ) { }

  private apiURL = `${environment.API_URL}/api/files`;

  getFile(name: string, url: string, type: string) {
    return this.http.get(url, { responseType: 'blob'})
    .pipe(
      tap(content => {
        const blob = new Blob([content], {type});
        saveAs(blob, name);
      }),
      map(() => true)
    );
  }

  uploadFile(file: Blob) {
    const dto = new FormData();
    dto.append('file', file);
    return this.http.post<File>(`${this.apiURL}/upload`, dto, {
      // headers: {
      //   'Content-Type': "multipart/form-data"
      // }
    });
  }
}
