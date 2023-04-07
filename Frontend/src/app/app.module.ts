import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardTrainerComponent } from './board-trainer/board-trainer.component';
import { BoardMemberComponent } from './board-member/board-member.component';
import { BoardEmployeeComponent } from './board-employee/board-employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistreComponent } from './registre/registre.component';
import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { TestMaterialComponent } from './test-material/test-material.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MembershipComponent } from './membership/membership.component';
import { TrainingProgramComponent } from './training-program/training-program.component';
import { ProductComponent } from './product/product.component';
import { BlogComponent } from './blog/blog.component';
import { ExerciseDASHComponent } from './exercise-dash/exercice-dash.component';
import { TrainingProgramDASHComponent } from './training-program-dash/training-program-dash.component';
import { ProductDASHComponent } from './product-dash/product-dash.component';
import { MembershipDASHComponent } from './membership-dash/membership-dash.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductBuyComponent } from './product-buy/product-buy.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { CartComponent } from './cart/cart.component';
import { TrainingProgramDetailsComponent } from './training-program-details/training-program-details.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { ExerciseDetailsComponent } from './exercise-details/exercise-details.component';
import { PostDASHComponent } from './post-dash/post-dash.component';
import { PostComponent } from './post/post.component';
import { PostDetailsComponent } from './post-details/post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardTrainerComponent,
    BoardMemberComponent,
    BoardEmployeeComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    RegistreComponent,
    TestMaterialComponent,
    UpdateProfileComponent,
    AboutComponent,
    ContactComponent,
    MembershipComponent,
    TrainingProgramComponent,
    ProductComponent,
    BlogComponent,
    ExerciseDASHComponent,
    TrainingProgramDASHComponent,
    ProductDASHComponent,
    MembershipDASHComponent,
    ProductDetailsComponent,
    ProductBuyComponent,
    OrderConfirmationComponent,
    CartComponent,
    TrainingProgramDetailsComponent,
    ExerciseComponent,
    ExerciseDetailsComponent,
    PostDASHComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatToolbarModule,
    NgxStarRatingModule
    
  ],
  providers: [httpInterceptorProviders,MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
