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
      path: 'assetsdownloadsexamination-downloadsTalbat Admisstion Form.pdf',
    },
    {
      name: 'داخلہ فارم برائےطلبہ (درجہ متوسطہ تا تخصص )بابت سالانہ/ضمنی امتحان',
      path: 'assetsdownloadsexamination-downloadsTulba Admisstion Form.pdf',
    },
    {
      name: 'پروفارمہ بابت امتحانات زیر تکمیل حفظ القرآن طلبہ و طالبات',
      path: 'assetsdownloadsexamination-downloadsپروفارمہ بابت امتحانات زیر تکمیل حفظ القرآن طلبہ و طالبات.pdf',
    },
    {
      name: 'پروفارمہ بابت امتحانات زیر تکمیل تجوید و قرأت طلبہ و طالبات',
      path: 'assetsdownloadsexamination-downloadsپروفارمہ بابت امتحانات زیر تکمیل تجوید قرآت طلبہ و طالبات.pdf',
    },
    {
      name: 'داخلہ فارم تحفیظ القرآن',
      path: 'assetsdownloadsexamination-downloadsتحفیظ القرآن.pdf',
    },
    {
      name: 'داخلہ فارم تجوید و قرأت',
      path: 'assetsdownloadsexamination-downloadsتجوید وقرأت.pdf',
    },
    {
      name: 'نظام الاوقات وصولی داخلہ فارم بابت سالانہ امتحانات 2023ء برائے طالبات',
      path: 'assetsdownloadsexamination-downloadsنظام الاوقات سالانہ امتحانات 2023ء.jpg',
    },
  ];
  affiliatedDownloads: any = [
    {
      name: 'درخواست الحاق فارم صفحہ اول،صفحہ ثانی(اہم ہدایات)',
      path: 'assetsdownloadsaffiliated-universitiesدرخواست الحاق فارم صفحہ اول،صفحہ ثانی(اہم ہدایات)۔.pdf',
    },
    {
      name: 'کوائف نامہ برائے الحاق و تجدید الحاق',
      path: '',
    },
    {
      name: 'فارم برائے درستگی ریکارڈ سربراہ ادارہ',
      path: '',
    },
    {
      name: 'ہدایات و ضوابط متعلقہ الحاق و درستی ریکارڈ ملحقہ جامعات',
      path: '',
    },
    {
      name: 'یہ تمام لنک آپ تیار کر لیں ان کے فارم میں آپ کو دو سے تین دن میں فائنل کر کے دے دوں گا',
      path: '',
    },
  ];
  curriculamDownloads: any = [
    {
      name: 'نصاب تعلیم درجہ عامہ تا عالمیہ برائے طلبہ',
      path: 'assetsdownloadscurriculam-downloadsنصاب تعلیم درجہ عامہ تا عالمیہ برائےطلبہ.pdf',
    },
    {
      name: 'نصاب تعلیم درجہ عامہ تا عالمیہ برائے طالبات',
      path: 'assetsdownloadscurriculam-downloadsنصاب تعلیم درجہ عامہ تا عالمیہ برائے طالبات.pdf',
    },
    {
      name: 'نصاب تعلیم درجہ تخصصات برائے طلبہ و طالبات',
      path: 'assetsdownloadscurriculam-downloadsنصاب تعلیم درجہ تخصصات برائے طلبہ و طالبات.pdf',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
