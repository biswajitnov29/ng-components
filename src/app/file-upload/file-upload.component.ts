import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { faCoffee, faUpload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  @Output() fileUpload = new EventEmitter();
  fileToUpload: File = null;
  faUpload = faUpload;
  states: any;
  stateTexts: any;
  uploadStates: any = {
    states: {
      noFile: 0,
      wrongType: 1,
      inProgress: 2,
      success: 3,
      error: 4
    },
    stateTexts: [
      'Drag and Drop files here',
      'Unsupported file format. Download the template and upload again.',
      'Map is uploading...',
      'Map information has been uploaded successfully.',
      'Uploading failed'
    ]
  };
  constructor() { }

  ngOnInit() {
    this.states = this.uploadStates.states;
    this.stateTexts = this.uploadStates.stateTexts;
  }

  dropFile(event:any){
    event.preventDefault();
    this.fileToUpload = event.dataTransfer.files.item(0);
    this.fileUpload.emit({
      file:this.fileToUpload
    });
  }
  upload(event: any) {
    event.preventDefault();
    this.fileToUpload = event.currentTarget.files[0];
    this.fileUpload.emit({
      file:this.fileToUpload
    });
  }
  allowDrop(ev) {
    ev.preventDefault();
  }

}
