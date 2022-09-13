import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss'],
})
export class DownloadsComponent implements OnInit {
  examinationDownloads: any = [
    {
      name: 'داخلہ فارم برائے طالبات (درجہ متوسطہ تاتخصص  )بابت سالانہ/ضمنی امتحان',
      path: 'https://drive.google.com/file/d/1CBxb7PAVC2yicSCuVOTb1Ps5NZJaMJwU/view?usp=sharing',
    },
    {
      name: 'داخلہ فارم برائےطلبہ (درجہ متوسطہ تا تخصص )بابت سالانہ/ضمنی امتحان',
      path: 'https://drive.google.com/file/d/1T9-DMgw-pO5E7CYDBvqi4i4DVtnE9Q3z/view?usp=sharing',
    },
    {
      name: 'پروفارمہ بابت امتحانات زیر تکمیل حفظ القرآن طلبہ و طالبات',
      path: 'https://drive.google.com/file/d/1LyIf7sTgdwd2R2PmQCJ0fsiJioTfLEdX/view?usp=sharing',
    },
    {
      name: 'پروفارمہ بابت امتحانات زیر تکمیل تجوید و قرأت طلبہ و طالبات',
      path: 'https://drive.google.com/file/d/1cs_tvtGn2axG7Kc9Wpk4PxVDmKbpPGBT/view?usp=sharing',
    },
    {
      name: 'داخلہ فارم تحفیظ القرآن',
      path: 'https://drive.google.com/file/d/1Rd5pbd5rsSSAg2b0lRnpnYanGi_TSuCy/view?usp=sharing',
    },
    {
      name: 'داخلہ فارم تجوید و قرأت',
      path: 'https://drive.google.com/file/d/1le2K0kOlVGQvK7mhOGsUYGRPnVi3vNfK/view?usp=sharing',
    },
    {
      name: 'نظام الاوقات وصولی داخلہ فارم بابت سالانہ امتحانات 2023ء برائے طالبات',
      path: 'https://drive.google.com/file/d/1GkQIFSmA7U__oDhPW7K6Srxr6CqDkl_t/view?usp=sharing',
    },
  ];
  affiliatedDownloads: any = [
    {
      name: 'درخواست الحاق فارم صفحہ اول،صفحہ ثانی(اہم ہدایات)',
      path: 'https://drive.google.com/file/d/1wu3669DTgEmR82UU9DIfW3NhtHZrB6YS/view?usp=sharing',
    },
    {
      name: 'کوائف نامہ برائے الحاق و تجدید الحاق',
      path: 'https://drive.google.com/file/d/1wu3669DTgEmR82UU9DIfW3NhtHZrB6YS/view?usp=sharing',
    },
    {
      name: 'فارم برائے درستگی ریکارڈ سربراہ ادارہ',
      path: 'https://drive.google.com/file/d/1wu3669DTgEmR82UU9DIfW3NhtHZrB6YS/view?usp=sharing',
    },
    {
      name: 'ہدایات و ضوابط متعلقہ الحاق و درستی ریکارڈ ملحقہ جامعات',
      path: 'https://drive.google.com/file/d/1wu3669DTgEmR82UU9DIfW3NhtHZrB6YS/view?usp=sharing',
    },
    {
      name: 'یہ تمام لنک آپ تیار کر لیں ان کے فارم میں آپ کو دو سے تین دن میں فائنل کر کے دے دوں گا',
      path: 'https://drive.google.com/file/d/1wu3669DTgEmR82UU9DIfW3NhtHZrB6YS/view?usp=sharing',
    },
  ];
  curriculamDownloads: any = [
    {
      name: 'نصاب تعلیم درجہ عامہ تا عالمیہ برائے طلبہ',
      path: 'https://drive.google.com/file/d/1zaN87YmjyDA7U2TB_UQCIfo8OVAztqP4/view?usp=sharing',
    },
    {
      name: 'نصاب تعلیم درجہ عامہ تا عالمیہ برائے طالبات',
      path: 'https://drive.google.com/file/d/1E6oOw1rNIz9TYuM_0z_boYJel0hflLcj/view?usp=sharing',
    },
    {
      name: 'نصاب تعلیم درجہ تخصصات برائے طلبہ و طالبات',
      path: 'https://drive.google.com/file/d/16m3W52HxsNAfLph3IFPqml9epqySRd2e/view?usp=sharing',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
