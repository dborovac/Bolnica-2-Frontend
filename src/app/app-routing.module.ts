import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { AuthGuard } from './guard/auth.guard';
import { AlreadyLoggedInGuard } from './guard/already-logged-in.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { NewEmployeeComponent } from './components/admin/new-employee/new-employee.component';
import { NewPatientComponent } from "./components/patients/new-patient/new-patient.component";
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { SearchEmployeesComponent } from './components/admin/search-employees/search-employees.component';
import { AdminEditEmployeeComponent } from './components/admin/admin-edit-employee/admin-edit-employee.component';
import { PermissionGuard } from './guard/permission.guard';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
import { NewAppointmentComponent } from './components/patients/new-appointment/new-appointment.component';
import { SearchPatientsComponent } from './components/patients/search-patients/search-patients.component';
import { HealthRecordComponent } from "./components/patients/health-records/health-record/health-record.component";
import { BasicHealthRecordComponent } from "./components/patients/health-records/basic-health-record/basic-health-record.component";
import { MedicalHistoryRecordComponent } from "./components/patients/health-records/medical-history-record/medical-history-record.component";
import { FullMedicalHistoryComponent } from "./components/patients/health-records/full-medical-history/full-medical-history.component";
import { IllnessHistoryRecordComponent } from "./components/patients/health-records/illness-history-record/illness-history-record.component";
import { ReferralHistoryComponent } from './components/referrals/referral-history/referral-history.component';

import { SpecialistDoctorExaminationComponent } from './components/patients/specialist-doctor-examination/specialist-doctor-examination.component';
import { ScheduledAppointmentsComponent } from './components/patients/scheduled-appointments/scheduled-appointments.component';
import { EditPatientComponent } from './components/patients/edit-patient/edit-patient.component';
import { ScheduledPatientsComponent } from './components/patients/scheduled-patients/scheduled-patients.component';
import { NewWorkOrderComponent } from './components/laboratory/new-work-order/new-work-order.component';
import { NewLabVisitComponent } from './components/laboratory/lab-visits/new-lab-visit/new-lab-visit.component';
import { LabVisitsComponent } from './components/laboratory/lab-visits/lab-visits.component';
import { NewReferralComponent } from './components/referrals/new-referral/new-referral.component';
import { SearchScheduledLabVisitsComponent } from './components/laboratory/lab-visits/search-scheduled-lab-visits/search-scheduled-lab-visits.component';
import { DocLabWorkOrderHistoryComponent } from './components/laboratory/doc-lab-work-order-history/doc-lab-work-order-history.component';
import {IssuingResultsComponent} from "./components/laboratory/issuing-results/issuing-results.component";
import {FullIssuingResultsComponent} from "./components/laboratory/full-issuing-results/full-issuing-results.component";
import { SearchBiochemAccComponent } from './components/laboratory/search-biochem-acc/search-biochem-acc.component';
import { StationaryPatientReceptionComponent } from './components/stationary/nurse/reception-menu/stationary-patient-reception.component';
import { StationaryMenuComponent } from './components/stationary/nurse/menu/stationary-menu.component';
import { ViewStationaryPatientReceptionsComponent } from './components/stationary/nurse/view-receptions/view-stationary-patient-receptions.component';
import { AppointmentSchedulingComponent } from "./components/stationary/nurse/appointment-scheduling/appointment-scheduling.component";
import {SchedulingComponent} from "./components/stationary/nurse/scheduling/scheduling.component";
import {ViewAppointmentsComponent} from "./components/stationary/nurse/view-appointments/view-appointments.component";
import { DischargeListComponent } from './components/stationary/doctor/discharge-list/discharge-list.component';
import { HealthReportComponent } from './components/stationary/doctor/health-report/health-report.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AlreadyLoggedInGuard]
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    canActivate: [AlreadyLoggedInGuard]
  },
  {
    path: 'personal-data',
    component: PersonalDataComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'new-employee',
    component: NewEmployeeComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: { permissions: ['ROLE_ADMIN'] }
  },
  {
    path: 'new-patient',
    component: NewPatientComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: { permissions: ['ROLE_MED_SESTRA', 'ROLE_VISA_MED_SESTRA', 'ROLE_RECEPCIONER'] }
  },
  {
    path: 'search-employees',
    component: SearchEmployeesComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: { permissions: ['ROLE_ADMIN'] }
  },
  {
    path: 'admin-edit-employee/:lbz',
    component: AdminEditEmployeeComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: { permissions: ['ROLE_ADMIN'] }
  },
  {
    path: 'forgot-password/:reset-token',
    component: ResetPasswordComponent,
    canActivate: [AlreadyLoggedInGuard]
  },
  {
    path: 'new-appointment',
    component: NewAppointmentComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: { permissions: ['ROLE_MED_SESTRA', 'ROLE_VISA_MED_SESTRA', 'ROLE_RECEPCIONER'] }
  },
  {
    path: 'search-patients',
    component: SearchPatientsComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: { permissions: ['ROLE_DR_SPEC_ODELJENJA', 'ROLE_DR_SPEC', 'ROLE_DR_SPEC_POV', 'ROLE_MED_SESTRA', 'ROLE_VISA_MED_SESTRA', 'ROLE_RECEPCIONER'] }
  },
  {
    path: 'health-record/:lbp',
    component: HealthRecordComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: { permissions: ['ROLE_DR_SPEC_ODELJENJA', 'ROLE_DR_SPEC', 'ROLE_DR_SPEC_POV'] }
  },
  {
    path: 'basic-health-record',
    component: BasicHealthRecordComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: { permissions: ['ROLE_DR_SPEC_ODELJENJA', 'ROLE_DR_SPEC', 'ROLE_DR_SPEC_POV'] }
  },
  {
    path: 'medical-history-record',
    component: MedicalHistoryRecordComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: { permissions: ['ROLE_DR_SPEC_ODELJENJA', 'ROLE_DR_SPEC', 'ROLE_DR_SPEC_POV'] }
  },
  {
    path: 'full-medical-history',
    component: FullMedicalHistoryComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: { permissions: ['ROLE_DR_SPEC_ODELJENJA', 'ROLE_DR_SPEC', 'ROLE_DR_SPEC_POV'] }
  },
  {
    path: 'illness-history',
    component: IllnessHistoryRecordComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: { permissions: ['ROLE_DR_SPEC_ODELJENJA', 'ROLE_DR_SPEC', 'ROLE_DR_SPEC_POV'] }
  },
  {
    path: 'specialist-doctor-examination',
    component: SpecialistDoctorExaminationComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: { permissions: ['ROLE_DR_SPEC_ODELJENJA', 'ROLE_DR_SPEC', 'ROLE_DR_SPEC_POV'] }
  },
  {
    path: 'scheduled-appointments',
    component: ScheduledAppointmentsComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: { permissions: ['ROLE_DR_SPEC_ODELJENJA', 'ROLE_DR_SPEC', 'ROLE_DR_SPEC_POV', 'ROLE_MED_SESTRA', 'ROLE_VISA_MED_SESTRA'] }
  },
  {
    path: 'edit-patient/:lbp',
    component: EditPatientComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: { permissions: ['ROLE_MED_SESTRA', 'ROLE_VISA_MED_SESTRA'] }
  },
  {
    path: 'new-referral/:lbp',
    component: NewReferralComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: { permissions: ['ROLE_DR_SPEC_ODELJENJA', 'ROLE_DR_SPEC', 'ROLE_DR_SPEC_POV'] }
  },
  {
    path:'scheduled-patients',
    component:ScheduledPatientsComponent,
    canActivate:[AuthGuard,PermissionGuard],
    data:{permissions:['ROLE_LAB_TEHNICAR', 'ROLE_VISI_LAB_TEHNICAR']}
  },
  {
    path:'new-work-order/:lbp',
    component:NewWorkOrderComponent,
    canActivate:[AuthGuard,PermissionGuard],
    data:{permissions:['ROLE_LAB_TEHNICAR', 'ROLE_VISI_LAB_TEHNICAR']}
  },
  {
    path:'new-work-order',
    component:NewWorkOrderComponent,
    canActivate:[AuthGuard,PermissionGuard],
    data:{permissions:['ROLE_LAB_TEHNICAR', 'ROLE_VISI_LAB_TEHNICAR']}
  },
  {
    path: 'lab-visits',
    component: LabVisitsComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: { permissions: ['ROLE_VISI_LAB_TEHNICAR', 'ROLE_LAB_TEHNICAR'] }
  },
  {
    path: 'new-lab-visit',
    component: NewLabVisitComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: { permissions: ['ROLE_VISI_LAB_TEHNICAR', 'ROLE_LAB_TEHNICAR'] }
  },
  {
    path: 'referral-history/:lbp',
    component: ReferralHistoryComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: { permissions: ['ROLE_DR_SPEC_ODELJENJA','ROLE_DR_SPEC','ROLE_DR_SPEC_POV'] }
  },
  {
    path: 'search-scheduled-lab-visits',
    component: SearchScheduledLabVisitsComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: { permissions: ['ROLE_VISI_LAB_TEHNICAR', 'ROLE_LAB_TEHNICAR'] }
  },
  {
    path: 'doc-lab-work-order-history/:lbp',
    component: DocLabWorkOrderHistoryComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: { permissions: ['ROLE_DR_SPEC_ODELJENJA','ROLE_DR_SPEC','ROLE_DR_SPEC_POV'] }
  },
    {
    path:'search-biochem-acc',
    component:SearchBiochemAccComponent,
    canActivate:[AuthGuard,PermissionGuard],
    data:{permissions:['ROLE_MED_BIOHEMICAR','ROLE_SPEC_MED_BIOHEMIJE']}
  },
  {
    path: 'issuing-results',
    component: IssuingResultsComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: {permissions: ['ROLE_VISI_LAB_TEHNICAR', 'ROLE_LAB_TEHNICAR']}
  },
  {
    path: 'full-issuing-results',
    component: FullIssuingResultsComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: {permissions: ['ROLE_VISI_LAB_TEHNICAR', 'ROLE_LAB_TEHNICAR']}
  },
  {
    path: 'stationary-menu',
    component: StationaryMenuComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: { permissions: ['ROLE_MED_SESTRA', 'ROLE_VISA_MED_SESTRA'] }
  },
  {
    path: 'stationary-patient-reception',
    component: StationaryPatientReceptionComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: { permissions: ['ROLE_MED_SESTRA', 'ROLE_VISA_MED_SESTRA'] }
  },
  {
    path: 'view-stationary-patient-receptions',
    component: ViewStationaryPatientReceptionsComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: { permissions: ['ROLE_MED_SESTRA', 'ROLE_VISA_MED_SESTRA'] }
  },
  {
    path: 'appointment-scheduling',
    component: AppointmentSchedulingComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: { permissions: ['ROLE_MED_SESTRA', 'ROLE_VISA_MED_SESTRA'] }
  },
  {
    path: 'scheduling',
    component: SchedulingComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: { permissions: ['ROLE_MED_SESTRA', 'ROLE_VISA_MED_SESTRA'] }
  },
  {
    path: 'view-appointments',
    component: ViewAppointmentsComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: { permissions: ['ROLE_MED_SESTRA', 'ROLE_VISA_MED_SESTRA'] }
  },
  {
    path: 'discharge-list/:lbp',
    component: DischargeListComponent,
    canActivate: [AuthGuard],
    data: { permissions: ['ROLE_DR_SPEC_ODELJENJA','ROLE_DR_SPEC','ROLE_DR_SPEC_POV'] }
  },
  {
    path: 'health-report/:lbp',
    component: HealthReportComponent,
    canActivate: [AuthGuard],
    data: { permissions: ['ROLE_DR_SPEC_ODELJENJA','ROLE_DR_SPEC','ROLE_DR_SPEC_POV'] }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
