import { PostResolverService } from './_services/post-resolver.service';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostComponent } from './post/post.component';
import { PostDASHComponent } from './post-dash/post-dash.component';
import { RatingResolverService } from './_services/rating-resolver.service';
import { ExerciseResolverService } from './_services/exercise-resolver.service';
import { ExerciseDetailsComponent } from './exercise-details/exercise-details.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { UserResolverService } from './_services/user-resolver.service';
import { TrainingProgramResolverService } from './_services/training-program-resolver.service';
import { TrainingProgramDetailsComponent } from './training-program-details/training-program-details.component';
import { CartComponent } from './cart/cart.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { ProductBuyResolverService } from './_services/product-buy-resolver.service';
import { ProductBuyComponent } from './product-buy/product-buy.component';
import { ProductResolveService } from './_services/product-resolve.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MembershipDASHComponent } from './membership-dash/membership-dash.component';
import { ProductDASHComponent } from './product-dash/product-dash.component';
import { TrainingProgramDASHComponent } from './training-program-dash/training-program-dash.component';
import { ExerciseDASHComponent } from './exercise-dash/exercice-dash.component';
import { BlogComponent } from './blog/blog.component';
import { ProductComponent } from './product/product.component';
import { TrainingProgramComponent } from './training-program/training-program.component';
import { MembershipComponent } from './membership/membership.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { TestMaterialComponent } from './test-material/test-material.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { RegistreComponent } from './registre/registre.component';
import { BoardTrainerComponent } from './board-trainer/board-trainer.component';
import { BoardMemberComponent } from './board-member/board-member.component';
import { BoardEmployeeComponent } from './board-employee/board-employee.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'register', component: RegistreComponent },
  { path: 'goToProfile/:id', component: ProfileComponent},
  { path: 'user', component: BoardUserComponent },
  { path: 'employee', component: BoardEmployeeComponent },
  { path: 'trainer', component: BoardTrainerComponent },
  { path: 'member', component: BoardMemberComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'test', component: TestMaterialComponent },
  { path: 'goUpdate/:id' , component: UpdateProfileComponent},
  { path: 'exercise', component: ExerciseComponent},
  { path: 'goToExercise', component: ExerciseDetailsComponent,resolve:{exercise:ExerciseResolverService,rating:RatingResolverService}},
  { path: 'membership', component: MembershipComponent},
  { path: 'trainingProgram', component: TrainingProgramComponent},
  { path: 'goToTrainingProgram' , component: TrainingProgramDetailsComponent , resolve:{tp:TrainingProgramResolverService}},
  { path: 'product', component: ProductComponent},
  { path: 'goToProduct' , component: ProductDetailsComponent , resolve:{product:ProductResolveService}},
  { path: 'buyProduct' , component: ProductBuyComponent , resolve:{productDetails:ProductBuyResolverService}},
  { path: 'orderConfirmation' , component: OrderConfirmationComponent},
  { path: 'cart' , component: CartComponent},
  { path: 'post', component: PostComponent},
  { path: 'postAdmin', component:PostDASHComponent},
  { path: 'goToPost', component:PostDetailsComponent, resolve:{post:PostResolverService}},
  { path: 'exerciceAdmin', component: ExerciseDASHComponent},
  { path: 'trainingProgramAdmin', component: TrainingProgramDASHComponent},
  { path: 'productAdmin', component: ProductDASHComponent},
  { path: 'membershipAdmin', component: MembershipDASHComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
