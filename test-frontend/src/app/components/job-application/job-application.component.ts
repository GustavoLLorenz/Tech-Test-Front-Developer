import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Language } from 'src/app/utils/languageEnum';
import { Tech } from 'src/app/utils/techEnum';
import { LanguageSelectInterface } from 'src/interfaces/languageSelectInterface';
import { SkillSelectInterface } from 'src/interfaces/skillSelectInterface';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css']
})
export class JobApplicationComponent {
  form!: FormGroup;
  collegeForm!: FormGroup;
  workHistoryForm!: FormGroup;
  formCategoryAndSegments!: FormGroup;
  isSubmit: boolean = false;
  skillList: string[] = [];
  languageList: string[] = [];
  selectedLanguageList: LanguageSelectInterface[] = [];
  selectedSkillList: SkillSelectInterface[] = [];
  educationList: any[] =[]
  jobList: any[] = []
  education: boolean = false
  job: boolean = false
  selectedLanguage: string = '';
  selectedSkill: string = ''
  educationId: number = 0
  jobId: number = 0
  currentJob: boolean = false
  addWork: boolean = true
  addEdu: boolean = true
  showCurrJob: boolean = true
  skillLevelVerify: boolean = true
  languageLevelVerify: boolean = true
  constructor(
    private formBuilder: FormBuilder,
    // private toastrService: ToastrService,
    private router: Router,
 
  ) {
    this.form = this.formBuilder.group({
      name: ["", [Validators.required, Validators.maxLength(50)]],
      email: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      skills: [""],
      languages: ["", [Validators.required]],
      education: [""],
      workHistory: [""]
    });

    this.collegeForm = this.formBuilder.group({
      collegeName: ["", [Validators.required]],
      course: ["", [Validators.required]],
      start: ["", [Validators.required]],
      end: ["", [Validators.required]],
      status: ["", [Validators.required]],
      complement: [""],
     
    });
    this.workHistoryForm = this.formBuilder.group({
      companyName: ["", [Validators.required]],
      title: ["", [Validators.required]],
      start: ["", [Validators.required]],
      status: [false],
      end: [""],
      description: ["", [Validators.required]],
     
    });

  }

  ngOnInit(): void {
    this.skillList = Object.keys(Tech)
    this.languageList = Object.keys(Language)
  }
    
  informEducationOrJob(event: any){
    const { target: { id } } = event
    if(id === "edu") this.education = !this.education
    else this.job = !this.job 
  }

  getSkill(event: any) {

    const { target: { id } } = event
    if (id === 'languages') {
      const languageSelectObj: LanguageSelectInterface = {
        lan: this.selectedLanguage,
        level: ''
      }
      this.selectedLanguageList.push(languageSelectObj)
     
      this.languageList =  this.languageList.filter((item: string) => item !== this.selectedLanguage)
    } else {
      const skillSelectObj: SkillSelectInterface = {
        skill: this.selectedSkill,
        level: ''
      }
      
      this.selectedSkillList.push(skillSelectObj)
      
      this.skillList =  this.skillList.filter((item: string) => item !== this.selectedSkill)
    } 

  }

  saveInfo(event:any) {
    const { target: { id } } = event
    if (id === "edu") {
      this.addEdu = true
      if(this.collegeForm.valid) {
        const edu = {
          id: this.educationId += 1,
          collegeName: this.collegeForm.controls["collegeName"].value,
          course: this.collegeForm.controls["course"].value,
          start: this.collegeForm.controls["start"].value,
          end: this.collegeForm.controls["end"].value,
          status: this.collegeForm.controls["status"].value,
          complement: this.collegeForm.controls["complement"].value,
    
        }
    
        this.educationList.push(edu)
        this.collegeForm.reset()
      } else {
        this.addEdu = false
      }
 
    } else {
      if(this.workHistoryForm.valid) {
        this.addWork = true
        const job = {
          id: this.jobId += 1,
          companyName: this.workHistoryForm.controls["companyName"].value,
          title: this.workHistoryForm.controls["title"].value,
          start: this.workHistoryForm.controls["start"].value,
          status: this.workHistoryForm.controls["status"].value,
          end: this.workHistoryForm.controls["end"].value,
          description: this.workHistoryForm.controls["description"].value,
        }
        this.jobList.push(job)
        this.workHistoryForm.reset()
  
      } else {
        
        this.addWork = false
        
      }
      
    }

  }

  getValue(event: any) {
    const { target: {  id, value } } = event
    if (id === 'status') {
      this.currentJob = this.workHistoryForm.controls['status'].value
   
    }
    if (id === 'end') {
      if (value !== '') this.showCurrJob = false
      else this.showCurrJob = true
    }
    
  }

  skillLevel(event: any) {
    const { target: { value, id } } = event
    const stringToArray = value.split(' ')
    const lan = stringToArray[0]
    const level = stringToArray[1]
    if (id === 'languages') {
      const index = this.selectedLanguageList.findIndex((item: LanguageSelectInterface) => {
        return item.lan === lan;
      });
  
      if (index !== -1) {
       this.selectedLanguageList[index].level = level;
      } 
    } else {

      const index = this.selectedSkillList.findIndex((item:SkillSelectInterface) => {
        return item.skill === lan;
      });
  
      if (index !== -1) {
       this.selectedSkillList[index].level = level;
      }
      
    }
   

  }

  removeItem(index: number, event: any) {
    const { target: { value, id } } = event
    if (id === 'languages') {
     const lan =  this.selectedLanguageList.splice(index, 1)
     this.selectedLanguageList.splice(index, 1)
     this.languageList.push(lan[0].lan)
    } else {
      const skill =  this.selectedSkillList.splice(index, 1)
      this.selectedSkillList.splice(index, 1)
      this.skillList.push(skill[0].skill)
    }
  }

  removeForm(edu: any, event: any) {
    const { target: { id } } = event
    if(id === "edu") this.educationList = this.educationList.filter((item: any) => item.id !== edu.id )
    if(id === "job") this.jobList = this.jobList.filter((item: any) => item.id !== edu.id )
   
  }

  onSubmit() {
     this.isSubmit = true;
    if(this.selectedSkillList.some((item: SkillSelectInterface) => item.level === '')) {
      this.skillLevelVerify = false
    } else {
      this.skillLevelVerify = true
    }

    if(this.selectedLanguageList.some((item: LanguageSelectInterface) => item.level === '')) {
      this.languageLevelVerify = false
    } else {
      this.languageLevelVerify = true
    }

    const newCandidate: any = {
      name: this.form.controls["name"].value,
      email: this.form.controls["email"].value,
      phone: this.form.controls["phone"].value,
      skills: this.selectedSkillList,
      languages: this.selectedLanguageList,
      education: this.educationList,
      workHistory: this.jobList


    };
    if(this.form.valid && this.languageLevelVerify && this.skillLevelVerify) {

    // this.candidateServiceExample.register(newCandidate).subscribe({
    //   next: success => {
    //     this.toastrService.success("example success" "", {
    //       progressBar: true,
    //     });
    //     this.router.navigate(["/"]);
    //   },
    //   error: error => {
    //     this.toastrService.success("example error", "", { progressBar: true });
    //   },
    // });
   
    localStorage.setItem('candidate', JSON.stringify(newCandidate));
    this.router.navigate(["/success"]);
    }
 

  }



}
