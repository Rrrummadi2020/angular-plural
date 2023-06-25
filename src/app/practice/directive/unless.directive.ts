import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({ selector: '[appUnless]' })
export class UnlessDirective implements OnInit {
  @Input('appUnless') set unless(condition: any) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.tempRef);
    } else {
      this.vcRef.clear();
    }
  }
  constructor(private vcRef: ViewContainerRef, private tempRef: TemplateRef<any>) { }
  ngOnInit() {

  }
}
