import { Component, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BMFContract';
  
  name:any = "";
  amount:any = "";
  discription:any = "";
  eDate:any = "";
  sDate:any = "";

  public download() {

    var element = document.getElementById('contract')!;

    html2canvas(element).then((canvas) => {

      var imgHeight = canvas.height * 180/ canvas.width;
      var imgData = canvas.toDataURL('image/png');
      var pdf = new jsPDF()
      pdf.addImage(imgData,'PNG', 20, 4, 180, imgHeight)
      pdf.save('newImg.pdf');

    });


  }
}
