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
      path: 'assets/downloads/examination-downloads/Talbat Admisstion Form.pdf',
    },
    {
      name: 'داخلہ فارم برائےطلبہ (درجہ متوسطہ تا تخصص )بابت سالانہ/ضمنی امتحان',
      path: 'assets/downloads/examination-downloads/Tulba Admisstion Form.pdf',
    },
    {
      name: 'پروفارمہ بابت امتحانات زیر تکمیل حفظ القرآن طلبہ و طالبات',
      path: 'assets/downloads/examination-downloads/پروفارمہ بابت امتحانات زیر تکمیل حفظ القرآن طلبہ و طالبات.pdf',
    },
    {
      name: 'پروفارمہ بابت امتحانات زیر تکمیل تجوید و قرأت طلبہ و طالبات',
      path: 'assets/downloads/examination-downloads/پروفارمہ بابت امتحانات زیر تکمیل تجوید قرآت طلبہ و طالبات.pdf',
    },
    {
      name: 'داخلہ فارم تحفیظ القرآن',
      path: 'assets/downloads/examination-downloads/تحفیظ القرآن.pdf',
    },
    {
      name: 'داخلہ فارم تجوید و قرأت',
      path: 'assets/downloads/examination-downloads/تجوید وقرأت.pdf',
    },
    {
      name: 'نظام الاوقات وصولی داخلہ فارم بابت سالانہ امتحانات 2023ء برائے طالبات',
      path: 'assets/downloads/examination-downloads/نظام الاوقات سالانہ امتحانات 2023ء.jpg',
    },
  ];
  affiliatedDownloads: any = [
    {
      name: 'درخواست الحاق فارم صفحہ اول،صفحہ ثانی(اہم ہدایات)',
      path: 'assets/downloads/affiliated-universitiesدرخواست الحاق فارم صفحہ اول،صفحہ ثانی(اہم ہدایات)۔.pdf',
    },
    {
      name: 'کوائف نامہ برائے الحاق و تجدید الحاق',
      path: 'assets/downloads/affiliated-universitiesدرخواست الحاق فارم صفحہ اول،صفحہ ثانی(اہم ہدایات)۔.pdf',
    },
    {
      name: 'فارم برائے درستگی ریکارڈ سربراہ ادارہ',
      path: 'assets/downloads/affiliated-universitiesدرخواست الحاق فارم صفحہ اول،صفحہ ثانی(اہم ہدایات)۔.pdf',
    },
    {
      name: 'ہدایات و ضوابط متعلقہ الحاق و درستی ریکارڈ ملحقہ جامعات',
      path: 'assets/downloads/affiliated-universitiesدرخواست الحاق فارم صفحہ اول،صفحہ ثانی(اہم ہدایات)۔.pdf',
    },
    {
      name: 'یہ تمام لنک آپ تیار کر لیں ان کے فارم میں آپ کو دو سے تین دن میں فائنل کر کے دے دوں گا',
      path: 'assets/downloads/affiliated-universitiesدرخواست الحاق فارم صفحہ اول،صفحہ ثانی(اہم ہدایات)۔.pdf',
    },
  ];
  curriculamDownloads: any = [
    {
      name: 'نصاب تعلیم درجہ عامہ تا عالمیہ برائے طلبہ',
      path: 'assets/downloads/curriculam-downloads/نصاب تعلیم درجہ عامہ تا عالمیہ برائےطلبہ.pdf',
    },
    {
      name: 'نصاب تعلیم درجہ عامہ تا عالمیہ برائے طالبات',
      path: 'assets/downloads/curriculam-downloads/نصاب تعلیم درجہ عامہ تا عالمیہ برائے طالبات.pdf',
    },
    {
      name: 'نصاب تعلیم درجہ تخصصات برائے طلبہ و طالبات',
      path: 'assets/downloads/curriculam-downloads/نصاب تعلیم درجہ تخصصات برائے طلبہ و طالبات.pdf',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
