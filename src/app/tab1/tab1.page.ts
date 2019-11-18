import {Component} from "@angular/core";
import {BarcodeScanner, BarcodeScannerOptions} from "@ionic-native/barcode-scanner/ngx";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  scannedData: any;
  encodedData = "";
  constructor(public barcodeCtrl: BarcodeScanner) {}
  goToBarcodeScan() {
    const options: BarcodeScannerOptions = {
      preferFrontCamera: false,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: "Place a barcode inside the scan area",
      resultDisplayDuration: 500,
      formats: "QR_CODE,PDF_417 ",
      orientation: "landscape"
    };

    this.barcodeCtrl
      .scan(options)
      .then(barcodeData => {
        console.log("Barcode data", barcodeData);
        this.scannedData = barcodeData;
        //alert(this.scannedData);
        // window.location.href = this.scannedData;
      })
      .catch(err => {
        console.log("Error", err);
      });
  }
}
