import { AfterViewInit, Component, ElementRef, EventEmitter, forwardRef, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
declare const $: any;

@Component({
  selector: 'app-custom-summernote',
  imports: [],
  templateUrl: './custom-summernote.html',
  styleUrl: './custom-summernote.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSummernote),
      multi: true
    }
  ]
})
export class CustomSummernote implements AfterViewInit, OnDestroy, ControlValueAccessor {

    @ViewChild('editor', { static: true }) editor!: ElementRef;

  @Input() placeholder: string = 'Start writing...';
  @Input() height: number = 300;
  @Output() contentChanged = new EventEmitter<string>();

  private innerValue = '';
  private onChange = (_: any) => {};
  private onTouched = () => {};

  ngAfterViewInit() {
    $.summernote.addPlugin({
      buttons: {
        saveButton: this.createButton('💾', 'Save to LocalStorage', () => this.saveToLocal()),
        loadButton: this.createButton('📂', 'Load from LocalStorage', () => this.loadFromLocal()),
        downloadHtml: this.createButton('⬇️', 'Download HTML', () => this.downloadContent('html'))
      }
    });

    $(this.editor.nativeElement).summernote({
      placeholder: this.placeholder,
      height: this.height,
      toolbar: [
        ['style', ['bold', 'italic', 'underline']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['insert', ['link', 'picture']],
        ['custom', ['saveButton', 'loadButton', 'downloadHtml']],
        ['view', ['codeview']]
      ],
      callbacks: {
        onImageUpload: (files: File[]) => this.uploadImage(files[0]),
        onChange: (contents: string) => {
          this.innerValue = contents;
          this.onChange(contents);
          this.contentChanged.emit(contents);
        }
      }
    });

    $(this.editor.nativeElement).summernote('code', this.innerValue);
  }

  createButton(icon: string, tooltip: string, onClick: () => void) {
    return function (context: any) {
      let ui = $.summernote.ui;
      return ui.button({
        contents: icon,
        tooltip: tooltip,
        click: onClick
      }).render();
    };
  }

  writeValue(value: any): void {
    this.innerValue = value || '';
    if (this.editor) {
      $(this.editor.nativeElement).summernote('code', this.innerValue);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnDestroy() {
    $(this.editor.nativeElement).summernote('destroy');
  }

  saveToLocal() {
    localStorage.setItem('summernote-content', this.innerValue);
    alert('Content saved to localStorage!');
  }

  loadFromLocal() {
    const saved = localStorage.getItem('summernote-content');
    if (saved) {
      this.innerValue = saved;
      $(this.editor.nativeElement).summernote('code', saved);
    } else {
      alert('No saved content found!');
    }
  }

  downloadContent(type: 'html' | 'txt') {
    let data = this.innerValue;
    if (type === 'txt') {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = data;
      data = tempDiv.innerText;
    }
    const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `summernote-content.${type}`;
    a.click();
  }

  uploadImage(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    // TODO: Replace this with your backend upload API
    fetch('https://api.imgbb.com/1/upload?key=your_api_key', {
      method: 'POST',
      body: formData
    })
      .then((res) => res.json())
      .then((data) => {
        const url = data.data.url;
        $(this.editor.nativeElement).summernote('insertImage', url);
      })
      .catch(() => alert('Image upload failed'));
  }

}
