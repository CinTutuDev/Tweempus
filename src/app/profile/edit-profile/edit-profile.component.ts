import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { AuthenticationService } from '../../core/authentication.service';
import { AuthorService } from '../../shared/author/author.service';

import { Author } from '../../shared/author/author.model';

@Component({
  selector: 'tweempus-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  @Input() author: Author | null = null;
  editUserForm!: FormGroup;
 /*  currentAuthor: Author | null = null; */

  constructor(
    private authService: AuthenticationService,
    private authorService: AuthorService,
    private fb: FormBuilder,
    private router: Router,) { }

  ngOnInit() {
    this.editUserForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      image: ['']
    });
  }

  editProfile(form: any) {
    this.authorService.updateAuthor(this.authService.token!.idAuthor, form.value.fullName, form.value.image).subscribe(
      response => console.log('Usuario modificado')
    );
      this.router.navigate(['/dashboard'])

  }

  updatePreview() {
    const imageUrl = this.editUserForm.get('image')!.value;
    // Actualizar la vista previa solo si se proporciona una URL válida
    if (imageUrl) {
      this.editUserForm.patchValue({ image: imageUrl }, { emitEvent: false });
    }
  }


}
