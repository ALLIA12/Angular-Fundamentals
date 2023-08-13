import { HighlightDirective } from './highlight.directive';
import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';

// Mock component to use directive
@Component({
  template: `<div appHighlight></div>`
})
class TestHighlightComponent {}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestHighlightComponent>;
  let divEl: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightDirective, TestHighlightComponent]
    });
    fixture = TestBed.createComponent(TestHighlightComponent);
    divEl = fixture.nativeElement.querySelector('div');
  });

  it('should create an instance', () => {
    const directive = new HighlightDirective(new ElementRef(divEl), TestBed.inject(Renderer2));
    expect(directive).toBeTruthy();
  });

});
