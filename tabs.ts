import { Component } from '@angular/core';
import { AboutPage } from "../../pages/about/about";
import { ContactPage } from "../../pages/contact/contact";
import { HomePage } from "../../pages/home/home";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  aboutpage = AboutPage;
  contactpage = ContactPage;
  homepage = HomePage;


}
